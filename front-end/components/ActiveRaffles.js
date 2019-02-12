import React, { Component } from "react";
import fetch from 'cross-fetch';

class activeRaffles extends Component {

  static async getInitialProps() {
    const resposne = await fetch("http://localhost:8080/api/raffles/all");
    const data = await resposne.json();
    return { data };
  }

  render() {
    return (
      <div>



      <p>  </p>

      </div>
    );
  }
}

export default activeRaffles;
