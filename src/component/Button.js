import React from "react";

class Button extends React.Component {

  handleClick = () => {
    this.props.clickHandler(this.props.name);
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
  clickHandler: React.PropTypes.func,
};

export default Button;
