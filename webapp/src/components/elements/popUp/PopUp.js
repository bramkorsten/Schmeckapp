import React, { PureComponent, Fragment } from "react";
import "./PopUp.css";
import PropTypes from "prop-types";
import { Button } from "../";
import RootRef from "@material-ui/core/RootRef";

class PopUp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    };
    this.closeRef = React.createRef();
  }

  componentWillUpdate() {
    this.shouldOpen();
  }

  componentDidMount() {
    this.closeRef.current.addEventListener("click", this.closeModal);
  }

  componentWillUnmount() {
    this.closeRef.current.removeEventListener("click", this.closeModal);
  }

  shouldOpen = () => {
    const { active, identifier } = this.props;
    active === identifier ? this.openModal() : this.closeModal();
  };

  openModal = () => {
    const { identifier } = this.props;
    const popUpItems = document.getElementsByClassName(identifier);
    const popUpArray = Array.prototype.slice.call(popUpItems);
    popUpArray.map(popUpItem =>
      setTimeout(() => {
        popUpItem.classList.remove("wall-hidden");
        popUpItem.classList.remove("modal-hidden");
      }, 20)
    );
  };

  closeModal = () => {
    const { identifier } = this.props;
    const popUpItems = document.getElementsByClassName(identifier);
    const popUpArray = Array.prototype.slice.call(popUpItems);
    popUpArray.map(popUpItem =>
      setTimeout(() => {
        popUpItem.classList.add("wall-hidden");
        popUpItem.classList.add("modal-hidden");
      }, 20)
    );
    this.props.deactivate();
  };

  static propTypes = {
    /**
     * The title of the popup
     */
    title: PropTypes.string.isRequired,
    /**
     * The text inside the popup
     */
    text: PropTypes.string.isRequired,
    /**
     * The text of the popup
     */
    buttons: PropTypes.node,
    /**
     * Determinates which popup opens
     */
    active: PropTypes.string,
    /**
     * Function to set parent state (active) to false
     */
    deactivate: PropTypes.func.isRequired,
    /**
     * The id to use in the flip animation
     */
    identifier: PropTypes.string.isRequired
  };

  static defaultProps = {
    title: "",
    text: "",
    active: false
  };

  render() {
    const { title, text, buttons, identifier, image } = this.props;
    return (
      <Fragment>
        <div className={identifier + " popup-modal-wall wall-hidden"} />
        <div className={identifier + " popup-modal-contain modal-hidden"}>
          <div className="popup-modal-wrap">
            {title && (
              <Fragment>
                <div className={"popUpTitle"}>
                  <h1>{title}</h1>
                </div>
                <hr />
              </Fragment>
            )}
            {image &&
              <img src={image} alt={"popUpImage"} />
            }
            <div className={"popUpContent"}>
              <p>{text}</p>
            </div>
            {buttons}
            <RootRef rootRef={this.closeRef}>
              <Button variant={"negative"} text={"Sluit"} />
            </RootRef>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default PopUp;
