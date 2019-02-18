import React, { Component } from "react";
import Steps from './Steps'
import CallToAction from "./CallToAction";

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
        <hr/>
        <CallToAction/> 

      </>
    );
  }
}

export default HeadContainer;