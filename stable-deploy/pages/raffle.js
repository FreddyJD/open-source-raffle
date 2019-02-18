import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import template from '../static/template';
import SingleRaffle from '../component/SingleRaffle'

class raffle extends Component {
    constructor(props) {
        super(props)
        this.state = { 
          data: []
         };
      }
  static getInitialProps ({ query: { id } }) {
      return { id: id }
  }

  componentDidMount() { 
    fetch(`/api/raffles/search/${this.props.id}`)
    .then(res => res.json())
    .then(json => this.setState({
        data: json,
    }));
  }

  render () {
    return (
      <div>
        <SingleRaffle data={this.state.data} />
      </div>
    )
  }
}


export default template(raffle);