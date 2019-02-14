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
      
            <img alt="image" className="img-fluid" src="/static/assets/img/smile.svg" />
          </div>
          <div className="col-12 col-md-6 col-lg-5 ml-md-auto text-left">
            <h1>Froala Blocks</h1>
            <p className="lead">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p><a className="btn btn-secondary mt-4" href="https://www.froala.com">Download</a></p>
          </div>
        </div>
      </div>
    </section>

      </>
    );
  }
}

export default HeadContainer;
