import React, { Component } from 'react';
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Raffle from '../component/Raffles';

class index extends Component {
    render() {
        return (
            <>
            <Header />
            <Navbar />
            <Raffle />
            <Footer />
            </>
        );
    }
}

export default index;