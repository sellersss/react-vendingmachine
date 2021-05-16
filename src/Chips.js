import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Message from "./Message";

class Chips extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">Go back</NavLink>
        <Message>
          <h1>Chips</h1>
        </Message>
        <img
          src="http://cdn.shopify.com/s/files/1/2804/5352/products/07017_Zapps_5oz_VoodooKettleChips_Front_2000x.jpg?v=1611698578"
          alt="Voodoo Chips"
        />
      </div>
    );
  }
}

export default Chips;
