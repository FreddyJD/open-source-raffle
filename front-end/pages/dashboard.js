import React, { Component } from 'react';
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import User from '../component/User';

class Dashboard extends Component {
    render() {
        return (
            <>
            <Header />
            <Navbar />
            <User />
            {/* This is a temporary fix to the styling :(  */}
            <br/><br/><br/><br/><br/><br/><br/>
            {/* This is a temporary fix to the styling :(  */}

            <Footer />
            </>
        );
    }
}

export default Dashboard;