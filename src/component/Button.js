import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.name}
      </button>
    )
  }
}

Button.propTypes = {
  name: React.propTypes.string,
};

export default Button;
