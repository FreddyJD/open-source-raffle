import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <>
        <section className="switchable feature-large feature-large-13">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6">
                <img
                  alt="Image"
                  className="border--round box-shadow-wide"
                  src="/static/img/inner-3.jpg"
                />
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="switchable__text">
                  <h2>This is dummy text</h2>
                  <p className="lead">
                    Launching an attractive and scalable website quickly and
                    affordably is important for modern startups — Stack offers
                    massive value without looking 'bargain-bin'.
                  </p>

                  <div className="text-block">
                    <h5>Over 140 Styled Pages</h5>
                    <p>
                      Jump start your project with Stack's diverse array of
                      beautiful pre-built templates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
