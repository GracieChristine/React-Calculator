import React from "react";

class Button extends React.Component {

  handleClick = () => {
    console.log("I'm clicking...");
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.name}
      </button>
    )
  }
}

Button.propTypes = {
  name: React.propTypes.string,
};

export default Button;
