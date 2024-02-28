import React, { Component } from "react";
import logoImg from "../../assets/images/logo.png";
import "./styles.css";

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="nav-brand">
            <img src={logoImg} alt="" />
            <h1>Space Flight News</h1>
          </div>

          <ul className="nav-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Trending</a>
            </li>
            <li>
              <a href="/">Categories</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
