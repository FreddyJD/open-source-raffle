import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <>
        <footer className="text-center-xs space--xs bg--secondary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <ul className="list-inline">
                                <li> <a><span className="h6 type--uppercase"><p>MIT © 2019 . All rights reserved</p> </span></a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </footer>
        <script src="/static/assets/js/jquery-3.1.1.min.js"></script>
        <script src="/static/assets/js/flickity.min.js"></script>
        <script src="/static/assets/js/lightbox.min.js"></script>
        <script src="/static/assets/js/granim.min.js"></script>
        <script src="/static/assets/js/jquery.steps.min.js"></script>
        <script src="/static/assets/js/scripts.js"></script>
        </>
    )
  }
}
