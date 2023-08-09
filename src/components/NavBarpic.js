import React, { Component } from "react";
import bears from "./images/kal.jpeg";

export default class NavBarpic extends Component {
  render() {
    return <div>{<img src={bears} width="1320" height="300" />}</div>;
  }
}
