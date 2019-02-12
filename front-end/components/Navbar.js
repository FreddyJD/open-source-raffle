import React, { Component } from "react";
import Link from "next/link";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
