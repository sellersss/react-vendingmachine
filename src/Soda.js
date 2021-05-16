import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Message from "./Message";

class Soda extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">Go back</NavLink>
        <Message>
          <h1>Soda</h1>
        </Message>
        <img
          src="https://cdn.shoplightspeed.com/shops/633679/files/22510538/dr-pepper-stash-can.jpg"
          alt="Dr. Pepper"
        />
      </div>
    );
  }
}

export default Soda;
