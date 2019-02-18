import React, { Component } from 'react';
import { logout } from '../static/auth0';
import { deleteToken } from '../static/auth';
import Router from 'next/router';

class LogoutPage extends Component {
  componentDidMount () {
    deleteToken();
    Router.push('/')
  }
  render() {
    return null
  }
}
export default LogoutPage
