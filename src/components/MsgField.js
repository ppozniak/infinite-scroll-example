import React from 'react';
import Message from './Msg';
import ReactDOM from 'react-dom';

class MessagesField extends React.Component {

  constructor() {
    super();

    this.state = {
      msgs: [],
      loading: false,
      error: false,
      msgCount: 1,
      msgMaxCount: 4
    }
  }

  componentDidMount() {
    // Fetch initial data
    this._loadMoreContent('test.txt');
  }

  render() {
    var loadingCircle = this.state.loading ? <div className="loading-circle"></div> : null,
        errorMessage = this.state.error ? <p className="message--error">{ this.state.error }</p> : null;

    return (
      <div className="msg-field" onScroll={this._handleScroll.bind(this)}>
        { this.state.msgs.map((msg, i) => <Message key={ i } body={ i + ': ' + msg } />) }
        { loadingCircle }
        { errorMessage }
      </div>
    );
  }

  _handleScroll() {
    const SCROLL_TRESHOLD = 20;
    let node = ReactDOM.findDOMNode(this),
        { scrollHeight, scrollTop, clientHeight } = node;

    // If scroll treshold reached AND THERE'S MORE DATA - fetch additional data
    if(this.state.msgMaxCount >= this.state.msgCount && !this.state.error) {
      if(scrollHeight - scrollTop - SCROLL_TRESHOLD  <= clientHeight) {
        this._loadMoreContent('test' + String(this.state.msgCount) + '.txt');
      }
    }
  }

  _loadMoreContent(url) {
    // Show loading circle
    this.setState({ loading: true });

    $.ajax({
      url: url,
      success: function(data) {
        // Concat fetched messages into state
        let newMessages = String(data).split('\n');
        this.setState({ msgs: this.state.msgs.concat(newMessages) });
        // Increase the counter
        this.setState({ msgCount: this.state.msgCount + 1 });
        // Hide loading circle
        this.setState({ loading: false });
      }.bind(this),
      error: function(xhr, options, thrownErr) {
        // On error set state to error message
        this.setState({ error: 'Error: ' + thrownErr });
        // Hide loading circle
        this.setState({ loading: false });
      }.bind(this)
    });

  }

}

export default MessagesField;
