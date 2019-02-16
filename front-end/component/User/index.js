
import React, { Component } from 'react'
import UserData from "./UserData";
import RafflesData from "./RafflesData";

export default class User extends Component {
  render() {
    return (
      <>
      <section className="bg--secondary space--sm">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="boxed boxed--lg boxed--border">
                <UserData data={this.props.data} />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="boxed boxed--lg boxed--border">
                <RafflesData data={this.props.data} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
  }
}
