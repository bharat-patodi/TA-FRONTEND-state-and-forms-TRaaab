import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 1,
    };
  }
  /**
   * NOTE:
   * I have not reset the counter to zero every time the user selects a step.
   * It feels better this way.
   * If the user wants to select a step and start over they can simply use the reset button after selecting
   * */

  handleClick = (e) => {
    switch (e.target.value) {
      case "step1":
        this.setState({ step: 1 });
        break;
      case "step5":
        this.setState({ step: 5 });
        break;
      case "step10":
        this.setState({ step: 10 });
        break;
      case "step15":
        this.setState({ step: 15 });
        break;
      case "Increment":
        this.setState({ count: this.state.count + this.state.step });
        break;
      case "Decrement":
        this.setState({ count: this.state.count - this.state.step });
        break;
      case "Reset":
        this.setState({ count: 0 });
        break;
      default:
        console.log("Nothing");
    }
  };

  render() {
    return (
      <div className="App">
        <p>{this.state.count}</p>
        <section className="steps">
          <button onClick={this.handleClick} value="step1">
            Step By 1
          </button>
          <button onClick={this.handleClick} value="step5">
            Step By 5
          </button>
          <button onClick={this.handleClick} value="step10">
            Step By 10
          </button>
          <button onClick={this.handleClick} value="step15">
            Step By 15
          </button>
        </section>
        <section className="actions">
          <button onClick={this.handleClick} value="Increment">
            Increment
          </button>
          <button onClick={this.handleClick} value="Decrement">
            Decrement
          </button>
          <button onClick={this.handleClick} value="Reset">
            Reset
          </button>
        </section>
      </div>
    );
  }
}

export default App;
