import React from 'react';

class RaffleDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: [] };
  }
  componentDidMount(event) {
    fetch(`http://localhost:8080/api/raffles/all`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(project2_its_awesome => (
            <li>
              <hr />
              <div className="fdb-block">
                <div className="container">
                  <div className="row align-items-center pb-xl-5">
                    <div className="col-12 col-md-7 col-xl-5">
                      <h1 className="productName-display">{project2_its_awesome.name}</h1>
                      <p className="desc-display">{project2_its_awesome.desc}</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 m-sm-auto mr-md-0 ml-md-auto pt-4 pt-md-0">
                      <img className="picture-display" alt="image" class="img-fluid" src={project2_its_awesome.picture} />
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-12 col-sm-6 col-md-3">
                      <h3><strong>Raffle Days</strong></h3>
                      <p className="daysLeft">{project2_its_awesome.daysLeft}</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 pt-3 pt-sm-0">
                      <h3><strong>Number of Tickets</strong></h3>
                      <p className="numTickets">{project2_its_awesome.numTickets}</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 pt-3 pt-md-0">
                      <h3><strong>Tickets Sold</strong></h3>
                      <p className="ticketsSold">{project2_its_awesome.ticketsSold}</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 pt-3 pt-md-0">
                      <h3><strong>Ticket Price</strong></h3>
                      <p className="ticketPrice">{project2_its_awesome.numTickets / project2_its_awesome.price}</p>
                    </div>
                  </div>
                  <br />
                  <div className="buyRaffle" style={{ float: "right" }}>
                    <button className="btn btn-primary" style={{ padding: "20px", fontSize: "24px" }} onSubmit={this.raffleSubmit}>Buy Raffle Ticket</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

    );
  }
}

export default RaffleDisplay;