import React, { PureComponent } from "react";
import "./Rewards.css";
import taart from "../../images/taart.jpg";
import thumbs from "../../images/thumbs.png";
import { StoreItem, Button, PopUp } from "../../components/elements";

class Rewards extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  componentWillMount() {
    this.props.editHeader(false, "Beloningen");
  }

  activateQuestion = () => {
    this.activatePopUp("question");
  };

  activateConfirmation = () => {
    this.activatePopUp("confirmation");
  };

  activatePopUp = identifier => {
    this.setState({
      active: identifier
    });
  };

  deactivatePopUp = () => {
    this.setState({
      active: ""
    });
  };

  render() {
    const { active } = this.state;
    const buttons = [
      <Button
        onClick={this.activateConfirmation}
        variant={"positive"}
        text={"Activeer"}
      />
    ];

    return (
      <main>
        <PopUp
          identifier={"question"}
          active={active}
          deactivate={this.deactivatePopUp}
          title={"Taart"}
          text={
            "Als je de taart nu activeert wordt hij morgen gebracht. Activeer dit pas als je dit aan je begeleider kan laten zien."
          }
          buttons={buttons}
        />

        <PopUp
          identifier={"confirmation"}
          active={active}
          image={thumbs}
          deactivate={this.deactivatePopUp}
          text={
            "Je hebt een taart geactiveerd! Zorg ervoor dat je begeleider dit ziet, als je dit bericht sluit kan je het niet meer openen."
          }
        />

        <div className={"rewardsViewer"}>
          <StoreItem
            onClickFunc={this.activateQuestion}
            title={"Taart"}
            image={taart}
          />
          <StoreItem
            onClickFunc={this.activateQuestion}
            title={"Taart"}
            image={taart}
          />
          <StoreItem
            onClickFunc={this.activateQuestion}
            title={"Taart"}
            image={taart}
          />
          <StoreItem
            onClickFunc={this.activateQuestion}
            title={"Taart"}
            image={taart}
          />
          <StoreItem
            onClickFunc={this.activateQuestion}
            title={"Taart"}
            image={taart}
          />
        </div>
        <Button
          link={"/winkel"}
          text={"Haal meer beloningen"}
          variant={"invert"}
        />
      </main>
    );
  }
}
export default Rewards;
