import React, { PureComponent } from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Button extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * The path to link to
     */
    link: PropTypes.string,
    /**
     * The text inside the button
     */
    text: PropTypes.string.isRequired,
    /**
     * The function executed when clicked
     */
    executable: PropTypes.func,
    /**
     * Defines what the button should do
     */
    variant: PropTypes.oneOf(["positive", "negative", "neutral", "invert"])
  };

  static defaultProps = {
    text: "",
    executable: "",
    variant: "positive"
  };

  render() {
    const { text, link, executable, variant } = this.props;
    return link ? (
      <Link to={link}>
        <button className={variant} onClick={executable}>
          {text}
        </button>
      </Link>
    ) : (
      <button className={variant} onClick={executable}>
        {text}
      </button>
    );
  }
}

export default Button;
