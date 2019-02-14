import React, { Component } from "react";

export default class UserData extends Component {
  render() {
    return (
      <>
        <div class="text-block text-center">
          <img
            alt="avatar"
            src={this.props.passedData.picture}
            class="image--sm"
          />

          <span class="h5">{this.props.passedData.family_name}, {this.props.passedData.given_name}</span>
          <span>Active Seller Account </span>
          <span class="label">Seller</span>
        </div>

        <hr />

        <div class="text-block">
          <ul class="menu-vertical">
            <li>
              <a>Active Raffles</a>
            </li>
            <li>
              <a>Add a Raffle</a>
            </li>
            <li>
              <a> Interactions Stats </a>
            </li>
            <li>
              <a> Edit Account </a>
            </li>
          </ul>
        </div>

      </>
    );
  }
}
