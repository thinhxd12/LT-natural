import React, { Component } from 'react'
import Slider from "react-slick";

export default class Carousel extends Component {
    render() {

        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            dots: true,
            speed: 1000
        };

        return (
            <div className="carousel">
                <Slider {...settings}>
                    <div>
                        <div className="carousel__item__1" style={{ background: `url(./assets/images/1.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}></div>
                    </div>
                    <div>
                        <div className="carousel__item__2" style={{ background: `url(./assets/images/2.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}></div>
                    </div>
                    <div>
                        <div className="carousel__item__3" style={{ background: `url(./assets/images/3.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}></div>
                    </div>
                </Slider>
            </div >
        )
    }
}
