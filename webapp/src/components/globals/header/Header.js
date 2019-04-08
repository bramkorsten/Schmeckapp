import React, { PureComponent } from "react";
import "./Header.css";
import "../../../externalLibraries/hamburgers.css";
import schmeckle from "../../../images/schmeckle.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      //put your state here
      hamburgerActive: false
    };
    this.hamburgerRef = React.createRef();
  }

  static propTypes = {
    /**
     * The wether the wallet should be shown or not
     */
    wallet: PropTypes.bool.isRequired,
    /**
     * The wether the wallet should be shown or not
     */
    title: PropTypes.string,
    /**
     * The wether the wallet should be shown or not
     */
    schmeckleCount: PropTypes.number
  };

  static defaultProps = {
    title: "",
    wallet: false,
    schmeckleCount: 0,
  };

  componentDidMount() {
    this.hamburgerRef.current.addEventListener("click", this.props.setHamburgerActive);
  }

  componentWillUnmount() {
    this.hamburgerRef.current.removeEventListener(
      "click",
      this.props.setHamburgerActive
    );
  }

  render() {
    const { title, schmeckleCount, wallet, active } = this.props;

    return (
      <header className={"header"}>
        {wallet ? (
          <div className={"wallet"}>
            <img src={schmeckle} alt={"schmeckleCoin"} />
            <span className={"schmeckleCount"}>{schmeckleCount}</span>
          </div>
        ) : (
          <Link to={"/"}>
            <span className={"backButton"}>
              Terug
            </span>
          </Link>
        )}

        <span className={"title"}>{title}</span>

        <button
          ref={this.hamburgerRef}
          class={
            "hamburger hamburger--squeeze" + (active && " is-active")
          }
          type="button"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner" />
          </span>
        </button>
      </header>
    );
  }
}

export default Header;
