import React, { PureComponent } from "react";
import "./Example.css";

class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        //put your state here
    };
  }

  //write functions here like this

  functionName = variables => {
    return variables;
  }

  render() {
    return (
        //return your html here
        <div/>
    );
  }
}

export default Example;
