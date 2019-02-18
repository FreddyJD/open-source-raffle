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
        fetch(`/api/seller/raffles/${this.props.data.email}`)
          .then(res => res.json())
          .then(json => this.setState({ raffles: json }));
      }
    
  render() {
    return (
    <>
    <div className="account-tab">
        <h4>All my raffles!</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, cumque doloribus? Totam rem alias repellat nisi tempora autem praesentium distinctio, mollitia sapiente at animi aspernatur, ad dolores cupiditate, ullam voluptates. </p>
        <hr/>
            <div className="row">
            {this.state.raffles.map(item => (

                <div className="col-md-12 pd-3 mt-1">
                    <p> ⭐ {item.name} | <a href={`/raffle?id=${item.id}`}> View → </a></p>
                    <p>
                        {item.desc} <br/>
                        <bold>Number of Tickets</bold> : {item.numTickets}  <br/>
                        <bold>Total Price set </bold> : {item.numTickets}  <br/>
                    </p>
                    <hr/>
                </div>
          ))}
            </div>
    </div>
    </>
    )
  }
}

