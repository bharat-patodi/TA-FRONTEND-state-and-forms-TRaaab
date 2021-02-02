import "./App.css";
import Card from "./components/Card";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Data
    this.data = {
      javascript: {
        title: "Javascript",
        description:
          "JavaScript is the Programming Language for the Web. It can update and change both HTML and CSS, and it can calculate, manipulate and validate data.",
      },
      react: {
        title: "React",
        description:
          "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
      },
      node: {
        title: "Node",
        description:
          "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.",
      },
    };

    this.state = {
      activeCard: "",
    };
  }

  handleClick = (e) => {
    this.setState({
      activeCard: e.currentTarget.dataset.name,
    });
  };

  render() {
    return (
      <div className="App">
        <Card
          title={this.data.javascript.title}
          description={this.data.javascript.description}
          clicker={this.handleClick}
          name={this.data.javascript.title}
          activeCard={this.state.activeCard}
        />
        <Card
          title={this.data.react.title}
          description={this.data.react.description}
          clicker={this.handleClick}
          name={this.data.react.title}
          activeCard={this.state.activeCard}
        />
        <Card
          title={this.data.node.title}
          description={this.data.node.description}
          clicker={this.handleClick}
          name={this.data.node.title}
          activeCard={this.state.activeCard}
        />
      </div>
    );
  }
}

export default App;
