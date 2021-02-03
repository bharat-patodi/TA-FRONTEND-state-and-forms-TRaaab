import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible: true,
    };
  }

  sidebarView = () => {
    if (this.state.sidebarVisible) {
      return (
        <aside className="sidebar">
          <button>Home</button>
          <button>About</button>
          <button onClick={this.handleClick}>Hide Sidebar</button>
        </aside>
      );
    }
  };

  footerView = () => {
    if (!this.state.sidebarVisible) {
      return (
        <footer className="footer-view">
          <button onClick={this.handleClick}>Show Sidebar</button>
        </footer>
      );
    }
  };
  handleClick = () => {
    this.setState(
      (prevState) => {
        console.log("Hi", prevState);
        return {
          sidebarVisible: !prevState.sidebarVisible,
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          {this.sidebarView()}
          <main className="main-body">This is main body</main>
        </div>
        {this.footerView()}
      </div>
    );
  }
}

export default App;
