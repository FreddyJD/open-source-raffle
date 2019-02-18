import React, { Component } from 'react'

export default class Steps extends Component {
  render() {
    return (
        <section class="fdb-block">
        <div class="container">
          <div class="row">
            <div class="col text-center">
              <h1>How it works ? </h1>
              <p className="lead">
                  Far far away, behind the word mountains, far from the countries <br/> Vokalia and Consonantia, there live the blind texts
                </p>
            </div>
          </div>
      
          <div class="row pt-5 justify-content-center align-items-center">
            <div class="col-6 col-md-2">
              <img alt="image" class="img-fluid" src="/static/assets/img/steps/1_p.png"/>
            </div>
            <div class="col-6 col-md-2 offset-md-1">
              <img alt="image" class="img-fluid" src="/static/assets/img/steps/2_p.png"/>
            </div>
            <div class="col-6 col-md-2 mt-4 mt-md-0 offset-md-1">
              <img alt="image" class="img-fluid" src="/static/assets/img/steps/3_p.png"/>
            </div>
            <div class="col-6 col-md-2 mt-4 mt-md-0 offset-md-1">
              <img alt="image" class="img-fluid" src="/static/assets/img/steps/4_p.png"/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
