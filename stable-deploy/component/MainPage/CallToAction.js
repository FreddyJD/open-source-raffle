import React, { Component } from 'react'
import Link from 'next/link';

export default class CallToAction extends Component {
  render() {
    return (
      <section className="fdb-block py-0 fdb-block-grey">
        <div className="container py-5 my-5 special">
          <div className="row justify-content-center py-5">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <div className="fdb-box">
                <h1>Try us!</h1>
                <p className="lead">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
                </p>
                <p className="mt-4">
                <Link href="/dashboard">
                  <a className="btn btn-primary">Register</a>
                </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
