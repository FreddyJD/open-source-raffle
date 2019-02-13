import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <>
        <section class="switchable feature-large feature-large-13">
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-md-6">
                <img
                  alt="Image"
                  class="border--round box-shadow-wide"
                  src="/static/img/inner-3.jpg"
                />
              </div>
              <div class="col-md-6 col-lg-5">
                <div class="switchable__text">
                  <h2>This is dummy text</h2>
                  <p class="lead">
                    Launching an attractive and scalable website quickly and
                    affordably is important for modern startups — Stack offers
                    massive value without looking 'bargain-bin'.
                  </p>

                  <div class="text-block">
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
