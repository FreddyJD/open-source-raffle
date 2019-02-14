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
                                <li> <a><span className="h6 type--uppercase"><p>home</p> </span></a> </li>
                                <li> <a><span className="h6 type--uppercase"><p>dashboard</p> </span></a> </li>
                                <li> <a><span className="h6 type--uppercase"><p>Developer Tools </p> </span></a> </li>
                                <li> <a><span className="h6 type--uppercase"><p>raffles</p> </span></a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </footer>
        <script src="./assets/js/jquery-3.1.1.min.js"></script>
        <script src="./assets/js/flickity.min.js"></script>
        <script src="./assets/js/lightbox.min.js"></script>
        <script src="./assets/js/granim.min.js"></script>
        <script src="./assets/js/jquery.steps.min.js"></script>
        <script src="./assets/js/scripts.js"></script>
        </>
    )
  }
}
