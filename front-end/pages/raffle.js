import React, { Component } from 'react';
import fetch from 'cross-fetch';
import Head from 'next/head'


// this is my example NextJs/React for creating dynamic pages
// for our contest - With love ❤️

export default class extends Component {

  static async getInitialProps ({ query: { id }}) {
    const resposne = await fetch('http://localhost:8080/api/raffles/search/' + id);
    const data = await resposne.json();
    return { data }
  }

  render () {
    return (
      <div>
      <Head>
          <title>{this.props.data.name}</title>
      </Head>

        <h1>{this.props.data.name}</h1>
        <h2>{this.props.data.daysLeft} Days left 🙉 </h2>
        <h2>{this.props.data.ticketsSold} Entries </h2>
        <p>
          {this.props.data.desc}
        </p>
      </div>
    )
  }
}
