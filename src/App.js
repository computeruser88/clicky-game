import React, { Component } from 'react';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import ButtonList from "./components/ButtonList";
import Button from "./components/Button";
import './App.css';

state = {
  buttons = [
    {
      imageSource: "../public/images/arya-stark.JPG",
      isClicked: false
    },
    {
      imageSource: "../public/images/brienne.JPG",
      isClicked: false 
    },
    {
      imageSource: "../public/images/cersei-lannister.JPG",
      isClicked: false
    },  
    {
      imageSource: "../public/images/daenerys.JPG",
      isClicked: false
    },
    {
      imageSource: "../public/images/gendry.JPG",
      isClicked: false 
    },
    {
      imageSource: "../public/images/hound.JPG",
      isClicked: false
    },
    {
      imageSource: "../public/images/jaime-lannister.JPG",
      isClicked: false
    },
    {
      imageSource: "../public/images/jon-snow.JPG",
      isClicked: false 
    },
    {
      imageSource: "../public/images/mountain.JPG",
      isClicked: false
    },  
    {
      imageSource: "../public/images/night-king.JPG",
      isClicked: false
    },
    {
      imageSource: "../public/images/tyrion-lannister.JPG",
      isClicked: false 
    },
    {
      imageSource: "../public/images/yara.JPG",
      isClicked: false
    }
  ],
}

renderButtons = (props) =>
  props.buttons.map(button =>
    <Button onClick={this.handleClick}>
      <Thumbnail src={props.imageSource}/>
    </Button>
  )

handleClick = event => {
  event.preventDefault();
  this.setState({
    isClicked = true
  });
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
