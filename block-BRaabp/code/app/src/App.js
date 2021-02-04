import "./App.css";
import FontCard from "./components/FontCard";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 30,
      fontValue: "",
    };
  }

  render() {
    return (
      <div className="App">
        <section className="userInput">
          <input
            type="text"
            name="font"
            id="font"
            onChange={this.handleFontChange}
          />
          <input
            type="range"
            min="12"
            max="100"
            id="slider"
            step="1"
            onChange={this.handleSliderChange}
          />
        </section>
        <section className="all-fonts">
          <FontCard
            name="Big Shoulders Display"
            author="Patric King"
            styles="8 styles"
            fontValue={this.state.fontValue}
            sliderValue={this.state.sliderValue}
          />
          <FontCard
            name="Caveat"
            author="Impallari Type"
            styles="Variable"
            fontValue={this.state.fontValue}
            sliderValue={this.state.sliderValue}
          />
          <FontCard
            name="Fredoka One"
            author="Milena Brandao"
            styles="1 style"
            fontValue={this.state.fontValue}
            sliderValue={this.state.sliderValue}
          />
          <FontCard
            name="Hachi Maru Pop"
            author="Nontynet"
            styles="1 style"
            fontValue={this.state.fontValue}
            sliderValue={this.state.sliderValue}
          />
          <FontCard
            name="Hanalei"
            author="Astigmatic"
            styles="1 style"
            fontValue={this.state.fontValue}
            sliderValue={this.state.sliderValue}
          />
          <FontCard
            name="Inconsolata"
            author="Raph Levien"
            styles="Variable"
            fontValue={this.state.fontValue}
            sliderValue={this.state.sliderValue}
          />
          <FontCard
            name="Indie Flower"
            author="Kimberly G"
            styles="1 style"
            fontValue={this.state.fontValue}
            sliderValue={this.state.sliderValue}
          />
          <FontCard
            name="Kalam"
            author="Indian Type F."
            styles="3 styles"
            fontValue={this.state.fontValue}
            sliderValue={this.state.sliderValue}
          />
          <FontCard
            name="Rajdhani"
            author="Indian Type F."
            styles="5 styles"
            fontValue={this.state.fontValue}
            sliderValue={this.state.sliderValue}
          />
          <FontCard
            name="Sriracha"
            author="Cadson Demak"
            styles="1 style"
            fontValue={this.state.fontValue}
            sliderValue={this.state.sliderValue}
          />
        </section>
      </div>
    );
  }

  handleFontChange = (e) => {
    this.setState(() => {
      return {
        fontValue: e.target.value,
      };
    });
    console.log(e.target.value);
  };

  handleSliderChange = (e) => {
    this.setState(
      () => {
        return {
          sliderValue: e.target.value,
        };
      },
      () => {
        console.log("state --", this.state.sliderValue);
      }
    );
  };
}
export default App;
