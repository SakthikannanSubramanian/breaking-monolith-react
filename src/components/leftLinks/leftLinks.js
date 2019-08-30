import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './leftLinks.css';

const LeftLinks = (props) => {

    const leftLinksToDisplay = props.children.map(link => (
        <tr className='leftLinksTableRow'>
            <td className='leftLinksTableCell'>
                    <Link className="leftLinksTableCell" to={`/${props.heading}#${link}`}>{link}</Link>
            </td>
        </tr>
    ));

    return (
        <div className='leftLinks' >
            <table className='leftLinksList'>
                {leftLinksToDisplay}
            </table>
        </div>
    );

}






export default LeftLinks;