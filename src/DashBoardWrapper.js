import React, { Component } from 'react';
import Header from './Header';
import EmpForm from './EmpForm';

class DashBoardWrapper extends Component {
    render() {
        return (
            <div>
                <Header />
                <EmpForm />
            </div>

        );
    }
}

export default DashBoardWrapper;