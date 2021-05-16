import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Message from "./Message";

class Sardines extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">Go back</NavLink>
        <Message>
          <h1>Sardines</h1>
        </Message>
        <img
          src="https://www.pngitem.com/pimgs/m/413-4135040_transparent-sardine-png-mega-sardines-png-download.png"
          alt="sardines"
        />
      </div>
    );
  }
}

export default Sardines;
