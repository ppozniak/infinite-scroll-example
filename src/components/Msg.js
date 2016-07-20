import React from 'react';

class Message extends React.Component {

  render() {
    return (
      <p className="message">{this.props.body}</p>
    );
  }
}

export default Message;
