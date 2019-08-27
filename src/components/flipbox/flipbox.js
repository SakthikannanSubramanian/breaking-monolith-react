import React, { Component } from 'react';
import './flipbox.css';


const FlipBox = (props) => {
    return (
        <div className="flipContainer" style={{top:props.top, left:props.left, width:props.width, height:props.height}}>
            <div className="flipCard">
                <div className="frontCard">
                {props.frontText}
                </div>
                <div className="backCard">
                {props.backText}
                </div>
            </div>
        </div >
    );

}

export default FlipBox;