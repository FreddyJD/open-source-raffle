import React, { Component } from "react";
import Steps from './Steps'

class HeadContainer extends Component {
  render() {
    return (
      <>
        <section className="imagebg text-center height-80">
          <div className="background-image-holder">
            <img src="/static/assets/img/main.png" />
          </div>
          <div className="container pos-vertical-center">
            <div className="row">
              <div className="col-md-9">
                <img src="/static/assets/img/big_logo.png" />

                <div className="hosted">
                  Hosting over <strong> 200 </strong> active raffles!
                </div>
              </div>
            </div>
          </div>
        </section>
        <Steps />

        <section className="fdb-block">
          <div className="container">
            <div className="row text-left align-items-center">
              <div className="col-12 col-md-6 col-lg-4">
                <h2>Your Website</h2>
                <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>

              <div className="col-12 col-md-6 col-lg-4 pt-4 pt-md-0">
                <h2>Amazing Design</h2>
                <p className="lead">Right at the coast of the Semantics, a large language ocean. A small river named Dude a rge language ocean there live the blind.</p>
              </div>

              <div className="col-12 col-md-8 m-auto m-lg-0 col-lg-4 pt-5 pt-lg-0">
                <img className="image" class="img-fluid" src="/static/assets/img/draws/dashboard.svg"/>
              </div>
            </div>
          </div>
        </section>


      <section className="fdb-block py-0 fdb-block-grey">
        <div className="container py-5 my-5 special">
          <div className="row justify-content-center py-5">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <div className="fdb-box">
                <h1>Call to Action</h1>
                <p className="lead">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
                </p>
                <p className="mt-4">
                  <a className="btn btn-primary" href="https://www.froala.com">Download</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      </>
    );
  }
}

export default HeadContainer;