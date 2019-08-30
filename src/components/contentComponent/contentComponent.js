import React, { Component } from 'react';
import Header from '../header/header';
import LeftLinks from '../leftLinks/leftLinks';
import './contentComponent.css';

export default class ContentComponent extends Component {
    render() {
        return (
            <div className='pageContainer'>
                {/* Header component for each and every page's heading */}
                <Header>
                    {this.props.header}
                </Header>
                <LeftLinks heading={this.props.header}>
                    {this.props.topics}
                </LeftLinks>
                <div className='mainContent'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


