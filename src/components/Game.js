import React, { Component } from "react";
import "../App.css";
import CharacterCard from "./CharacterCard.js";
import Results from "./Results.js";
import chars from "../chars.json";
import "../css/materialize.css";
import "../css/style.css";

class Game extends Component {
  state = {
    currPoints: 0,
    topPoints: 0,
    guessed: [],
    options: chars,
    win: false,
    lose: false,
    chars
  };

  selectChar = id => {
    if (!this.state.lose && !this.state.win) {
      if (this.state.guessed.includes(id)) {
        // User has lost
        this.setState({ lose: true });
        // Check to see if this was the user's best score
        if (this.state.currPoints > this.state.topPoints) {
          this.setState({ topPoints: this.state.currPoints });
        }

        // Offer option for game reset
        //this.reset();
      } else {
        const guessed = this.state.guessed.concat(id);
        this.setState({ guessed, currPoints: this.state.guessed.length + 1 });
        this.shuffle();

        if (this.state.guessed.length >= (this.state.options.length-1)) {
          this.setState({ win: true });
        }
      }
    }
  };

  shuffle() {
    let rand, temp, i;
    let options = this.state.options;
    for (i = options.length - 1; i > 0; i--) {
      rand = Math.floor(Math.random() * (i + 1));
      temp = options[i];
      options[i] = this.state.options[rand];
      options[rand] = temp;
    }
    this.setState({ options });
  }

  reset = () => {
    this.setState({
      currPoints: 0,
      guessed: [],
      win: false,
      lose: false
    });
    this.shuffle();
  }

  render() {
    return (
      <div>
        <Results
          topPoints={this.state.topPoints}
          currPoints={this.state.currPoints}
          win={this.state.win}
          lose={this.state.lose}
          reset={this.reset}
        />
        <div className="container flex wrap">
          {this.state.chars.map(character => (
            <CharacterCard
              id={character.id}
              name={character.name}
              image={character.image}
              selectChar={this.selectChar}
              key={character.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
