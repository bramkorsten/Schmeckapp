import React, { PureComponent } from "react";
import "./Overlay.css";
import { Link } from "react-router-dom";

class Overlay extends PureComponent {
  render() {
    const { active, hamburgerFunction } = this.props;
    return (
      <nav className={active && "active"}>
        <ul>
          <Link onClick={hamburgerFunction} to={"/"}>
            <li>Home</li>
          </Link>
          <Link onClick={hamburgerFunction} to={"/beloningen"}>
            <li>Beloningen</li>
          </Link>
          <Link onClick={hamburgerFunction} to={"/winkel"}>
            <li>Winkel</li>
          </Link>
          <Link onClick={hamburgerFunction} to={"/prestaties"}>
            <li>Prestaties</li>
          </Link>
          <Link onClick={hamburgerFunction} to={"/inspiratie"}>
            <li>Inspiratie</li>
          </Link>
          <li className={"logout"}>Uitloggen</li>
        </ul>
      </nav>
    );
  }
}

export default Overlay;
