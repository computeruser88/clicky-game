import React, { Component } from 'react';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import ButtonList from "./components/ButtonList";
import Thumbnail from "./components/Thumbnail";
import './App.css';
import Arya from "./images/arya-stark.JPG";
import Brienne from "./images/brienne.JPG";
import Cersei from "./images/cersei-lannister.JPG";
import Dany from "./images/daenerys.JPG";
import Gendry from "./images/gendry.JPG";
import Hound from "./images/hound.JPG";
import Jaime from "./images/jaime-lannister.JPG";
import Jon from "./images/jon-snow.JPG";
import Mountain from "./images/mountain.JPG";
import NightKing from "./images/night-king.JPG";
import Tyrion from "./images/tyrion-lannister.JPG";
import Yara from "./images/yara.JPG";
import { _ } from 'underscore';

class App extends Component {
  state = {
    buttons: [
      {
        imageSource: Arya,
        isClicked: false
      },
      {
        imageSource: Brienne,
        isClicked: false
      },
      {
        imageSource: Cersei,
        isClicked: false
      },
      {
        imageSource: Dany,
        isClicked: false
      },
      {
        imageSource: Gendry,
        isClicked: false
      },
      {
        imageSource: Hound,
        isClicked: false
      },
      {
        imageSource: Jaime,
        isClicked: false
      },
      {
        imageSource: Jon,
        isClicked: false
      },
      {
        imageSource: Mountain,
        isClicked: false,
        isRendered: false
      },
      {
        imageSource: NightKing,
        isClicked: false,
        isRendered: false
      },
      {
        imageSource: Tyrion,
        isClicked: false,
        isRendered: false
      },
      {
        imageSource: Yara,
        isClicked: false,
        isRendered: false
      }
    ],
    score: 0,
    highScore: 0,
    userMessage: "Click any picture to begin!"
  };

  handleButtonClick = event => {
    event.preventDefault();
    const isGameOver = event.target.isClicked ? true : false; // game is over when an image is clicked twice
    if (!isGameOver) {
      this.setState({
        isClicked: true,
        userMessage: "You guessed correctly!",
        score: this.score + 1
      });
      if (this.state.score > this.state.highScore) {
        this.setState({
          highScore: this.score
        });
      }
    } else {
      this.setState({
        score: 0,
        userMessage: "You guessed incorrectly!"
      });
      this.state.buttons.forEach(button => {
        button.setState({
          isClicked: false,
          isRendered: false
        });
      });
    }

    // shuffle buttons
    _.shuffle(this.state.buttons);
    this.showButtons(this.state.buttons);
  }

  showButtons = props =>
    props.map(button =>
      <div>
        <Thumbnail src={button.imageSource} onClick={this.handleButtonClick} />
      </div>
    )

  render() {
    return (
      <div>
        <Nav user-message={this.state.userMessage} current-score={this.state.score} top-score={this.state.highScore} />
        <Jumbotron />
        <ButtonList>
          {this.showButtons(this.state.buttons)}
        </ButtonList>
      </div>
    );
  }
}

export default App;
