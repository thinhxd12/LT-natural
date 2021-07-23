import React, { Component } from 'react'

export default class Gallery extends Component {

    imgSrc = [
        { id: 1, src: './assets/images/g1.jpg', caption: 'Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.' },
        { id: 2, src: './assets/images/g5.jpg', caption: 'Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.' },
        { id: 3, src: './assets/images/g4.jpg', caption: 'Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.' },
        { id: 4, src: './assets/images/g3.jpg', caption: 'Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.' },
        { id: 5, src: './assets/images/g6.jpg', caption: 'Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.' },
        { id: 6, src: './assets/images/g2.jpg', caption: 'Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.' },
    ]

    renderImage = () => {
        return this.imgSrc.map((image, index) => {
            return <div key={index} className="col-3 px-0">
                <a href={image.src} data-lightbox="example-set" data-title={image.caption}>
                    <div className="gallery__item">
                        <img src={image.src} className="img-fluid" />
                    </div>
                </a>
            </div>
        })
    }

    render() {
        return (
            <div className="gallery container-fluid py-5">

                <div className="row justify-content-center">
                    {this.renderImage()}
                </div>

            </div>
        )
    }
}
