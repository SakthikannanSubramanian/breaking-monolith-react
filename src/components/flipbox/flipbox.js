import React, { Component } from 'react';
import './flipbox.css';


const FlipBox = (props) => {


    const linksToDisplay = props.backLinks.map(link => (
        <tr>
            <td>
            <a href="#/test">{link.name}</a>
            </td>
        </tr>
    ));
    return (
        <div className="flipContainer" style={{top: props.top, left: props.left, width: props.width, height: props.height }}>
            <div className="flipCard">
                <div className="frontCard">
                    {props.frontText}
                </div>
                <div className="backCard">
                   <table>{linksToDisplay}</table>
                </div>
            </div>
        </div >
    );
}

export default FlipBox;