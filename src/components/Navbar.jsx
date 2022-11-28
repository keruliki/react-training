import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="mb-8">
          <div className="flex justify-between p-4 bg-gray-700 shadow-lg text-white">
            <a href="#" className="brand-logo">
              Logo
            </a>
            <ul >
              <li className="flex gap-4">
                <a >Sass</a>
                <a >Test</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;


