import React, { Component } from "react";
//import Logo from "./images/head.jpeg";
import Nav from "./Nav.css";

export default class Navfooter extends Component {
  render() {
    return (
      <footer class="footer-distributed">
        <div class="footer-left">
          {/* {<img src={Logo} width="50" height="50" />} */}
          <h3>
            Green<span>Lanka</span>
          </h3>

          <p class="footer-links">
            <a href="#" class="link-1">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p class="footer-company-name">Green Lanka © 2022</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>444/2nd mailpost,</span> Gregory park road, Nuwaraeliya
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+94522235018</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">GreenLanka@company.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
