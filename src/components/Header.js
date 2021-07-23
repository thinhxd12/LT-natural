import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <ul className="header__navbar">
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#">About us</a></li>
                        <li><a href="/#">Service</a></li>
                        <li><a href="/#">Gallery</a></li>
                        <li><a href="/#">Contact us</a></li>
                    </ul>
                    <div className="header__info">
                        <div className="header__brand">
                            <a href="/#">Natural</a>
                        </div>
                        <div className="header__content">
                            <h4>NATURE IS THE ART OF GOD</h4>
                            <p>UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT.</p>
                        </div>
                        <a href="/#" className="btn__readmore">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
