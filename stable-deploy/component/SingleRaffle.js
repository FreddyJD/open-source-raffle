import React, { Component } from 'react'

export default class SingleRaffle extends Component {
  render() {
    return (
        <div>
              <hr />
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <h1>{this.props.data.name}</h1>
                      <p>{this.props.data.desc} </p>
                    </div>

                    <div className="col-md-2">
                      <h2>Ends in → </h2>
                      <h3><mark>{this.props.data.daysLeft} Days!</mark> </h3>
                    </div>

                    <div className="col-md-2">
                    <h2>Tickets → </h2>
                      <h3><mark>{this.props.data.numTickets} Tickets</mark> </h3>
                    </div>

                    <div className="col-md-2">
                    <h2>Total Sold → </h2>
                      <h3><mark>{this.props.data.ticketsSold} Tickets!</mark> </h3>
                    </div>
                  </div>
                  <br />   
            </div>
      </div>
    )
  }
}
