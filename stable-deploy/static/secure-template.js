import React from 'react';
import Navbar from '../component/Navbar';
import Header from '../component/Header';
import Footer from '../component/Footer'
import { getTokenForBrowser, getTokenForServer } from '../static/auth';

export default Page => class SecureTemplate extends React.Component {
  static async getInitialProps({ req }) {
    const loggedInUser = process.browser ? await getTokenForBrowser() : await getTokenForServer(req);
    const pageProperties = await Page.getInitialProps && await Page.getInitialProps(req);
    return {
      ...pageProperties,
      loggedInUser,
      isLoggedIn: !!loggedInUser
    }
  }

  render() {
    if (!this.props.isLoggedIn) {
      return (
        <>
        <Header />
          <Navbar { ...this.props } />
          <center>
          <p>You're not authorised. Try <br/> 
          <a href="/login">Login</a>
          </p>  
          </center>
          <Footer />
        </>
      )
    }
    return (
      <>
      <Header />
        <Navbar { ...this.props } />
        <Page { ...this.props } />
      <Footer />
      </>
    )
  }
}