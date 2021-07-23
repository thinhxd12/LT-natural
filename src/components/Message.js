import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        return (
            <div className="message" style={{
                backgroundImage: `url(./assets/images/bg2.jpg)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
                <div className="container">
                    <div className="message__info">
                        <h1>Nature Always Wears The Colors Of The Spirit.</h1>
                        <p>Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor. Vestibulum at dui nunc. Nulla viverra pharetra sem, eget pulvinar neque pharetra ac int. lorem ipsum Vestibulum. placerat placerat dolor. Vestibulum at dui nunc. Nullam eu elit neque lectus.</p>
                        <div className="message__button d-flex justify-content-center">
                            <a href="/#" class="btn__learnmore__1 mr-3">Read More</a>
                            <a href="/#" class="btn__learnmore__1">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
