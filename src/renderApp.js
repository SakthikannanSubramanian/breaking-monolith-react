import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/homePage/homePage';
import MicroServicesTesting from './pages/testPage/micro-services-testing/micro-services-testing';

class RenderApp extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={HomePage} />
                <Route path="/Micro Services Testing" exact component={MicroServicesTesting} />
            </Router>
        );
    }
}

export default RenderApp;