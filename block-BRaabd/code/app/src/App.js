import "./App.css";
import React from "react";
import Button from "./components/Button";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLink: "/assets/phone.jpg",
    };
  }

  handleClick = (e) => {
    console.log(this);
    console.log("/assets/" + e.target.value.toLowerCase() + ".jpg");
    this.setState({
      imageLink: "/assets/" + e.target.value.toLowerCase() + ".jpg",
    });
  };

  render() {
    return (
      <div className="App">
        <section className="all-buttons">
          <Button name="Basketball" clicker={this.handleClick} />
          {/* <Button name="PubG" clicker={this.handleClick} /> */}
          <Button name="Tiger" clicker={this.handleClick} />
          <Button name="Phone" clicker={this.handleClick} />
          <Button name="Laptop" clicker={this.handleClick} />
          {/* <Button name="Cricket" clicker={this.handleClick} /> */}
        </section>

        <section className="image-preview">
          <img src={this.state.imageLink} alt="" width="300px" />
        </section>
      </div>
    );
  }
}

export default App;
