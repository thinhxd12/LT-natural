import React, { Component } from 'react'
import { addBackToTop } from 'vanilla-back-to-top'

addBackToTop({
    diameter: 56,
    backgroundColor: '#0fc39b',
    textColor: '#fff',
    scrollDuration: 500,
})

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container pt-5">
                    <div className="footer__info border-bottom">
                        <div className="row py-5">
                            <div className="col-md-6">
                                <div className="footer__brand">
                                    <a href="/#">Natural</a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus.consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer__address">
                                    <h3>Get In Touch</h3>
                                    <p>Twitter, Inc.</p>
                                    <p>1355 Market St, Suite 900</p>
                                    <p>San Francisco, CA 94103</p>
                                    <p>Phone: (123) 456-7890</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer__social">
                        <a href="/#"><i className="fab fa-facebook-f" /></a>
                        <a href="/#"><i className="fab fa-twitter" /></a>
                        <a href="/#"><i className="fab fa-dribbble    "></i></a>
                        <a href="/#"><i className="fab fa-instagram    "></i></a>
                    </div>

                </div>
                <div className="footer__bottom">
                    <p>© 2019 Natural. All rights reserved | Design by <a href="/#">W3layouts.</a></p>
                </div>

            </div>
        )
    }
}
