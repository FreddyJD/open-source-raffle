import React from 'react';

class Raffles extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: [] };
  }
  componentDidMount(event) {
    fetch(`/api/raffles/all`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(item => (
            <li>
              <hr />
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <h1>{item.name}</h1>
                      <p>{item.desc} </p>
                    </div>

                    <div className="col-md-2">
                      <h2>Ends in → </h2>
                      <h3><mark>{item.daysLeft} Days!</mark> </h3>
                    </div>

                    <div className="col-md-2">
                    <h2>Tickets → </h2>
                      <h3><mark>{item.numTickets} Tickets</mark> </h3>
                    </div>

                    <div className="col-md-2">
                    <h2>Total Sold → </h2>
                      <h3><mark>{item.ticketsSold} Tickets!</mark> </h3>
                    </div>
                    <div className="col-md-2">
                    <h2>
                    
                    <a href={`/raffle?id=${item.id}`}>
                      <button className="btn btn-primary pl-1 pr-1"> Grab a ticket </button>
                    </a>

                    </h2>
                    </div>
                  </div>
                  <br />
                  
                </div>
            </li>
          ))}
        </ul>
      </div>

    );
  }
}

export default Raffles;