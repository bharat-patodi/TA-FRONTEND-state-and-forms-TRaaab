import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible: true,
      modalVisible: false,
    };
  }

  sidebarView = () => {
    if (this.state.sidebarVisible) {
      return (
        <aside className="sidebar">
          <div className="home-actions">
            <button className="actions">Coding Addict</button>
            <button onClick={this.handleClick} className="actions">
              ❌
            </button>
          </div>
          <button className="actions">🏠 Home</button>
          <button className="actions">🤼 Team</button>
          <button className="actions">📁 Projects</button>
          <button className="actions">🗓️ Calendar</button>
          <button className="actions">📜 Documents</button>
        </aside>
      );
    }
  };

  footerView = () => {
    if (!this.state.sidebarVisible) {
      return (
        <div className="footer-view">
          <button onClick={this.handleClick} className="actions">
            🚀🚀🚀
          </button>
        </div>
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

  displayModal = () => {
    this.setState((prevState) => {
      return {
        modalVisible: !prevState.modalVisible,
      };
    });
  };

  modalView = () => {
    if (this.state.modalVisible) {
      return (
        <div className="modal">
          <p>Modal View</p>
          <button className="actions" onClick={this.displayModal}>
            ❌
          </button>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="App">
        {this.modalView()}
        <div className="wrapper">
          {this.sidebarView()}
          {this.footerView()}
          <main className="main-body">
            <button className="actions" onClick={this.displayModal}>
              Show Modal
            </button>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
