import React, { Component } from "react";
import Link from 'next/link';

export default class UserData extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      response: []
     };
  }
componentDidMount(event) {
    // This is a temporary RESTfull endpoint. 
    // Todo: replace this with Apollo Client. 
    fetch(`http://localhost:8080/api/seller/${this.props.data.email}`)
      .then(res => res.json())
      .then(json => this.setState({ response: json }));
  }

  
  render() {
    return (
      <>
        <div className="text-block text-center">
          <img
            alt="avatar"
            src={this.props.data.picture}
            className="image--sm"
          />

          <span className="h5">{this.props.data.nickname}</span>
          <span><bold>Active</bold> Seller Account </span>
        </div>

        <hr />

        <div className="text-block">
          <ul className="menu-vertical">
            <li>
            <Link href="/dashboard">
              <a>Add a Raffle</a>
            </Link>
            </li>

            <li>

            <Link href="/dashboard/all">
              <a>View all campaigns </a>
            </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
