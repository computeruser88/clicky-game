import React, { Component } from 'react';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import ButtonList from "./components/ButtonList";
import Button from "./components/Button";
import './App.css';

state = {
  buttons =[
    {
      imageUrl: 
      isClicked: false
    }
  ],
}

renderButtons = (props) => {
  props.buttons.map(button =>
    <Button>
      <Thumbnail />
    </Button>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Jumbotron />
        <ButtonList>
          {this.renderButtons(this.state.buttons)}
        </ButtonList>
      </div>
    );
  }
}

export default App;
