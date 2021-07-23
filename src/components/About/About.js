import React, { Component } from 'react'
import AboutItem from './AboutItem'

export default class About extends Component {
    arrAbout = [
        { id: 1, img: './assets/images/ab1.jpg', header: 'Never Stop Exploring', text: `Integer pulvinar leo id viverra feugiat. Pellentesque libero ut justo, semper at tempus vel, ultrices in ligula. Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nSemper at tempus vel, ultrices in ligula. Integer pulvinar leo quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.` },
        { id: 2, img: './assets/images/ab2.jpg', header: 'Lorem ipsum dolor', text: 'Integer pulvinar leo id viverra feugiat. Pellentesque libero ut justo, semper at tempus vel, ultrices in ligula. Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nSemper at tempus vel, ultrices in ligula. Integer pulvinar leo quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { id: 3, img: './assets/images/ab3.jpg', header: 'Never Stop Exploring', text: 'Integer pulvinar leo id viverra feugiat. Pellentesque libero ut justo, semper at tempus vel, ultrices in ligula. Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nSemper at tempus vel, ultrices in ligula. Integer pulvinar leo quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    ]

    renderAboutItem = () => {
        return this.arrAbout.map((item, index) => {
            return <div key={index} className="container-fluid">
                <AboutItem item={item}/>
            </div>
        })
    }


    render() {
        return (
            <div className="about py-5">
                <div className="w-100 py-5">
                    {this.renderAboutItem()}
                </div>
            </div>
        )
    }
}
