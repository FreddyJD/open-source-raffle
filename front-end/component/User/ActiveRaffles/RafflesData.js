import React, { Component } from 'react'

export default class RafflesData extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            raffles: []
         };
      }
    componentDidMount(event) {
        // This is a temporary RESTfull endpoint. 
        // Todo: replace this with Apollo Client. 
        fetch(`http://localhost:8080/api/seller/raffles/${this.props.data.email}`)
          .then(res => res.json())
          .then(json => this.setState({ raffles: json }));
      }
    
  render() {
    return (
    <>
    <div className="account-tab">
        <h4>All my raffles!</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, cumque doloribus? Totam rem alias repellat nisi tempora autem praesentium distinctio, mollitia sapiente at animi aspernatur, ad dolores cupiditate, ullam voluptates. </p>
        <hr/> <br/>
            <div className="row">
            {this.state.raffles.map(singleRaffle => (

                <div className="col-md-6">
                    <p> ⭐ {singleRaffle.name}</p>
                    <hr/>
                    <p>
                        {singleRaffle.desc} <br/>
                        <bold>Number of Tickets</bold> : {singleRaffle.numTickets}  <br/>
                        <bold>Total Price set </bold> : {singleRaffle.numTickets}  <br/>
                    </p>
                </div>
          ))}
            </div>
    </div>
    </>
    )
  }
}

