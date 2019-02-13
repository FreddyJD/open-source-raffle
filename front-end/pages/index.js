import React, { Component } from 'react';
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import MainPage from '../component/MainPage';

class index extends Component {
    render() {
        return (
            <>
            <Header />
            <Navbar />
            <MainPage />
            <Footer />
            </>
        );
    }
}

export default index;