import React, { Component } from "react";

export default class UserData extends Component {
  render() {
    return (
      <>
        <div className="text-block text-center">
          <img
            alt="avatar"
            src={this.props.data.picture}
            className="image--sm"
          />

          <span className="h5">{this.props.data.family_name}, {this.props.data.given_name}</span>
          <span>Active Seller Account </span>
        </div>

        <hr />

        <div className="text-block">
          <ul className="menu-vertical">
            <li>
              <a>Active Raffles</a>
            </li>
            <li>
              <a>Add a Raffle</a>
            </li>
            <li>
              <a> Interactions Stats </a>
            </li>
          </ul>
        </div>

      </>
    );
  }
}
