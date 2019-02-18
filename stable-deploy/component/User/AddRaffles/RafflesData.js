import React, { Component } from 'react'

export default class RafflesData extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        const name = data.get('name');
        const picture = data.get('picture');
        const desc = data.get('desc');
        const numTickets = parseInt(data.get('numTickets'));
        const daysLeft = parseInt(data.get('daysLeft'));
        const minTickets = parseInt(data.get('minTickets'));
        
        fetch('/api/raffle/create', {
          method: 'POST',
          headers: {
            // Check what headers the API needs. A couple of usuals right below
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
          body: JSON.stringify({
              "name": name, 
              "picture": picture,
              "desc": desc,
              "numTickets": numTickets,
              "daysLeft": daysLeft,
              "minTickets": minTickets,
              "email": this.props.data.email,
            })
        }).then(function() {
            window.location = '/dashboard/all'
      });
    }

  render() {
    return (
    <>
    <div className="account-tab">
        <h4>Create a Raffle </h4>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quod architecto incidunt, consectetur harum accusantium laborum temporibus possimus praesentium, facere optio sapiente? Eligendi assumenda quisquam officiis neque culpa iste excepturi. <br/>
        </p>
        <hr/>
        <br/>
        <form onSubmit={this.handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                    <label>Name of the product</label>
                    <input type="text" id="name" name="name" />
                </div>

                <div className="col-md-6">
                <label>Picture URL</label>
                    <input type="text" id="picture" name="picture" />
                </div>

                <div className="col-md-6">
                <label>Description </label>
                    <input type="text" id="desc" name="desc" />
                </div>

                <div className="col-md-6">
                <label> How many tickets you want to sell ? </label>
                    <input type="text" id="numTickets" name="numTickets" />
                </div>

                <div className="col-md-6">
                <label> How many days you want to run it ? </label>
                    <input type="text" id="daysLeft" name="daysLeft" />
                </div>


                <div className="col-md-6">
                <label> What is the minimun of tickets ? </label>
                    <input type="text" id="minTickets" name="minTickets" />
                </div>


                <div className="col-md-12">
                <label> Associated to Seller Account :  </label>
                    <input type="text" id="email" name="email" value={this.props.data.email} disabled />
                </div>



                <div className="col-lg-3 col-md-4">
                    <button type="submit" className="btn btn--primary type--uppercase"> Create </button>
                </div>
            </div>
        </form>
    </div>
    </>
    )
  }
}

