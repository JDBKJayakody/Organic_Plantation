import React, { Component } from "react";
import Logo from "./images/head.jpeg";
import navbarnav from "./Nav.css";
export default class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {<img src={Logo} width="50" height="50" />}
        <a class="navbar-brand" href="#">
          Green Lanka
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Admin
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Delivary
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Instructor
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
