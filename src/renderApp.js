import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/homePage/homePage';
import TestPage from './pages/testPage/testPage';

class RenderApp extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={HomePage} />
                <Route path="/test" exact component={TestPage} />
            </Router>
        );
    }
}

export default RenderApp;