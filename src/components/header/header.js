import React, { Component } from 'react';
import homeImage from '../../assets/whiteHome.png'
import './header.css';

const Header = (props) => {
    return (
        <div className='pageHeader'>
            <div className ='heading'>
                <h2>{props.children}</h2>
            </div>
            <a href="#/">
                    <img className="headerImage" src={homeImage}/>
            </a>
        </div>
    )
}

export default Header;