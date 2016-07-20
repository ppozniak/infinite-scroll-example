require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MessagesField from './MsgField';

class App extends React.Component {

  render() {
    return (
      <div>
        <MessagesField />
      </div>
    );
  }

    // $.get('test.txt', function(data) {
    //   let arr = data.split('\n');
    //   this.setState({msgs: arr});
    // });

  // _getRandomStrings(n) {
  //   let randStr = '',
  //       randStrings = [],
  //       randLength = Math.floor(Math.random() * 30) + 10;
  //   const LETTERS = 'abcdefghijklmnoprsteqwfdsioagjoiegjnagiao';
  //
  //   for(let j = 0; j < n; j++) {
  //     for(let i = 0; i < randLength; i++) {
  //       randStr += LETTERS.charAt(Math.floor(Math.random() * LETTERS.length));
  //     }
  //     randStrings.push(randStr);
  //     randStr = '';
  //   }
  //   return randStrings;
  // }

}

export default App;
