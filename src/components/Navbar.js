import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="flex p-4 bg-gray-700 shadow-lg text-white">
            <a href="#" className="brand-logo">
              Logo
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
