import React from 'react';
import SimpsonQuote from './components/SimpsonQuote';

import './App.css';
import axios from 'axios';

const quoteTest = {
  quote: "Doughnuts? I told you I don't like ethnic food",
  character: "Mr. Burns",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMrBurns.png?1497567512188",
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: quoteTest
    }
    this.getSimpson = this.getSimpson.bind(this);
  }

  getSimpson() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => response.data)
    .then(data => {
      this.setState({
        simpson: data[0],
      });
      console.log(this.state.simpson)
    });
  }

  render() {
    return (
      <div className="App">
        <SimpsonQuote simpson={this.state.simpson} />
        <button type="button" onClick={this.getSimpson}>Obtenir un nouveau personnage</button>
      </div>
    );
  }
}


export default App;
