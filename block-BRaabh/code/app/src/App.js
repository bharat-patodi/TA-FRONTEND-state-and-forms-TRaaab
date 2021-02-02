import "./App.css";
import data from "./data.json";
import House from "./components/House";
import Characters from "./components/Characters";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHouse: "",
      activeCharacter: "",
      isMatch: 0,
    };
  }
  handleHouseClick = (e) => {
    console.log("House Chosen");
    this.setState(
      {
        activeHouse: e.target.value,
      },
      () => {
        console.log(this.state.activeHouse);
      }
    );
  };
  handleImageClick = (e) => {
    console.log("Image Chosen");
    this.setState(
      {
        activeCharacter: e.target.dataset.house,
      },
      () => {
        let housePeople = data
          .find((v) => v.name === this.state.activeHouse)
          .people.map((v) => v.name);

        if (housePeople.includes(this.state.activeCharacter)) {
          this.setState({
            isMatch: 1,
          });
        } else {
          this.setState({
            isMatch: 2,
          });
        }
      }
    );
  };

  handleResult = () => {
    if (this.state.isMatch === 0) {
      return <p>Result will be displayed here!</p>;
    }
    if (this.state.isMatch === 1) {
      return <p>🦒 Correct Choice</p>;
    }
    if (this.state.isMatch === 2) {
      return <p>💥 Incorrect! Try Again.</p>;
    }
  };

  render() {
    return (
      <div className="App">
        <section className="gameplay">
          <section>
            <h2>Select A House</h2>
            <House name="Starks" clicker={this.handleHouseClick} />
            <House name="Baratheons" clicker={this.handleHouseClick} />
            <House name="Greyjoys" clicker={this.handleHouseClick} />
            <House name="Lannisters" clicker={this.handleHouseClick} />
            <House name="Targaryens" clicker={this.handleHouseClick} />
            <House name="Tyrells" clicker={this.handleHouseClick} />
            <House name="Tullys" clicker={this.handleHouseClick} />
            <House name="Redwynes" clicker={this.handleHouseClick} />
            <House name="Freys" clicker={this.handleHouseClick} />
            <House name="Arryns" clicker={this.handleHouseClick} />
            <House name="Dothrakis" clicker={this.handleHouseClick} />
          </section>
          <section>
            <h2>Select a Character</h2>
            <Characters clicker={this.handleImageClick} />
          </section>
        </section>
        <section className="result">{this.handleResult()}</section>
      </div>
    );
  }
}

export default App;
