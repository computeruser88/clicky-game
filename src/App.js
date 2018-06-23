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


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        {
          id: 0,
          imageSource: Arya
        },
        {
          id: 1,
          imageSource: Brienne
        },
        {
          id: 2,
          imageSource: Cersei
        },
        {
          id: 3,
          imageSource: Dany
        },
        {
          id: 4,
          imageSource: Gendry
        },
        {
          id: 5,
          imageSource: Hound
        },
        {
          id: 6,
          imageSource: Jaime
        },
        {
          id: 7,
          imageSource: Jon
        },
        {
          id: 8,
          imageSource: Mountain
        },
        {
          id: 9,
          imageSource: NightKing
        },
        {
          id: 10,
          imageSource: Tyrion
        },
        {
          id: 11,
          imageSource: Yara
        }
      ],
      score: 0,
      highScore: 0,
      userMessage: "Click any picture to begin!",
      isClicked: [false, false, false, false, false, false, false, false, false, false, false, false]
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    this.shuffleButtons(this.state);
  }

  handleButtonClick = event => {
    console.log(event.target.id);
    if (this.state.isClicked[event.target.id]) {
      if (this.state.score >= this.state.highScore) {
        this.setState({
          highScore: this.state.score
        });
      }
      const resetIsClickedArray = new Array(12).fill(false);
      this.setState({
        score: 0,
        userMessage: "You guessed incorrectly!",
        isClicked: resetIsClickedArray
      });
    } else {
      let currentScore = this.state.score;
      currentScore++;
      console.log(this.state.score);
      let tempIsClicked = this.state.isClicked;
      tempIsClicked[event.target.id] = true;
      this.setState({
        isClicked: tempIsClicked,
        userMessage: "You guessed correctly!",
        score: currentScore
      });
    }
    this.shuffleButtons(this.state);
  }

  shuffleButtons = props => {
    let buttonArray = props.buttons;
    for (var i = buttonArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = buttonArray[i];
      buttonArray[i] = buttonArray[j];
      buttonArray[j] = temp;
    }
    this.setState({
      buttons: buttonArray
    });
    console.log(this.state.buttons);
    this.showButtons(props);
  }

  showButtons = props =>
    props.buttons.map(button =>
      <Thumbnail key={button.id} id={button.id} src={button.imageSource} 
      isClicked={this.state.isClicked[button.id]}
       click={this.handleButtonClick} />
    );

  render() {
    return (
      <div>
        <Nav key="12" userMessage={this.state.userMessage} currentScore={this.state.score} topScore={this.state.highScore} />
        <Jumbotron key="13" />
        <ButtonList key="14">
          {this.showButtons(this.state)}
        </ButtonList>
      </div>
    );
  }
}

export default App;
