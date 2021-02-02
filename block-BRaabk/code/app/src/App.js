import "./App.css";
import data from "./data.json";
// import data from "../../data.json";
import React from "react";
import Meal from "./components/Meal";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMealType: "All",
    };
  }
  handleClick = (e) => {
    this.setState(
      () => {
        return {
          currentMealType: e.target.value,
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleMatch = () => {
    if (this.state.currentMealType === "All") {
      return data.map((meal) => {
        return <Meal {...meal} key={meal.id} />;
      });
    }
    return data
      .filter(
        (meal) => meal.category === this.state.currentMealType.toLowerCase()
      )
      .map((meal) => {
        return <Meal {...meal} key={meal.id} />;
      });
  };

  render() {
    return (
      <div className="App">
        <section className="tags">
          <button onClick={this.handleClick} value="All">
            All
          </button>
          <button onClick={this.handleClick} value="Breakfast">
            Breakfast
          </button>
          <button onClick={this.handleClick} value="Lunch">
            Lunch
          </button>
          <button onClick={this.handleClick} value="Shakes">
            Shakes
          </button>
        </section>
        <section className="meals">{this.handleMatch()}</section>
      </div>
    );
  }
}

export default App;
