import React from "react";

class Meal extends React.Component {
  render() {
    return (
      <article className="meal">
        <img src={this.props.img} alt="" className="meal-image" />
        <div className="recipe-text">
          <div className="title-and-price">
            <h3 className="meal-name">{this.props.title}</h3>
            <p>${this.props.price}</p>
          </div>
          <p className="meal-description">{this.props.desc}</p>
        </div>
      </article>
    );
  }
}

export default Meal;
