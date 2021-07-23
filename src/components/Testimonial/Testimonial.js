import React, { Component } from 'react'
import TestimonialItem from './TestimonialItem'

export default class Testimonial extends Component {

    arrItem = [
        { id: 1, name: 'Jenifer Burns', img: './assets/images/te2.jpg', star: 3.5, quote: "Lorem Ipsum has been the industrys standard since the 1500s. Praesent ullamcorper dui turpis.Nulla non laoreet eleifend." },
        { id: 2, name: 'Abraham Smith', img: './assets/images/te3.jpg', star: 2.5, quote: "Lorem Ipsum has been the industrys standard since the 1500s. Praesent ullamcorper dui turpis.Nulla non laoreet eleifend." },
        { id: 3, name: 'Jenifer Burns', img: './assets/images/te1.jpg', star: 4, quote: "Lorem Ipsum has been the industrys standard since the 1500s. Praesent ullamcorper dui turpis.Nulla non laoreet eleifend." },
    ]

    renderTestimonial = () => {
        return this.arrItem.map((item, index) => {
            return <div key={index} className="col-4">
                <TestimonialItem item={item} />
            </div>
        })
    }


    render() {
        return (
            <div className="testimonial py-5">
                <div className="container py-5 text-center">
                    <h3 className="txt__title">Testimonials</h3>
                    <h5 className="txt__title__small">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</h5>
                    <div className="testimonial__content">
                        <div className="row">
                            {this.renderTestimonial()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
