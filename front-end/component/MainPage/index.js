import React, { Component } from "react";

class HeadContainer extends Component {
  render() {
    return (
      <>
        <section
          className="imagebg text-center height-80"
          data-gradient-bg="#5f2c82,#49a09d,#F3A183,#5f2c82"
        >
          <div className="background-image-holder">
            <img alt="background" src="/static/assets/img/main.png" />
          </div>
          <div className="container pos-vertical-center">
            <div className="row">
              <div className="col-md-9">
                <img alt="Image" src="/static/assets/img/big_logo.png" />

                <div className="hosted">
                  Hosting over <strong> 200 </strong> active raffles!
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fdb-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 mb-4 mb-md-0">

                <img alt="image" className="img-fluid" src="/static/assets/img/raffle.png" />
              </div>
              <div className="col-12 col-md-6 col-lg-5 ml-md-auto text-left">
                <h1>About Raffles</h1>
                <p className="lead">
                  <p>raf·fle</p>
                  <p>ˈrafəl</p>
                  a means of raising money by selling numbered tickets, one or some of which are subsequently drawn at random, the holder or holders of such tickets winning a prize.
</p>
              </div>
            </div>
          </div>
        </section>

        <section className="team db-block team-2">
          <div className="container">
            <div className="row text-center justify-content-center">
              <div className="col-8">
                <h1>Meet Our Team</h1>
              </div>
            </div>

            <div className="row-50"></div>

            <div className="row text-center justify-content-center">
              <div className="col-sm-3 m-sm-auto">
                <img alt="image" className="img-fluid rounded-circle" src="/static/assets/img/ceo.png" />

                <h2>W. Harrison</h2>
              </div>
              <div className="col-sm-3 m-sm-auto">
                <img alt="image" className="img-fluid rounded-circle" src="/static/assets/img/cto.png" />
                <h2>F. Diaz</h2>
              </div>
              <div className="col-sm-3 m-sm-auto">
                <img alt="image" className="img-fluid rounded-circle" src="/static/assets/img/coo.png" />
                <h2>B. Wiggins</h2>
              </div>
            </div>
          </div>
        </section>

      </>
    );
  }
}

export default HeadContainer;
