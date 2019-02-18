import React, { Component } from 'react';
import Raffle from '../component/Raffles';
import template from '../static/template';

class raffles extends Component {
    render() {
        return (
            <>
            <Raffle />
            </>
        );
    }
}

export default template(raffles);
