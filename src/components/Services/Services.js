import React, { Component } from 'react'
import ServiceItem from './ServiceItem';

export default class Services extends Component {
    arrServices = [
        { id: 1, class: 'fa fa-lightbulb', text: 'Quisque sagittis lacus eu lorem sodalesd enean adipiscing.' },
        { id: 2, class: 'fa fa-coffee', text: 'Quisque sagittis lacus eu lorem sodalesd enean adipiscing.' },
        { id: 3, class: 'fa fa-eye', text: 'Quisque sagittis lacus eu lorem sodalesd enean adipiscing.' },
        { id: 4, class: 'fa fa-gift', text: 'Quisque sagittis lacus eu lorem sodalesd enean adipiscing.' },
        { id: 5, class: 'fab fa-angellist', text: 'Quisque sagittis lacus eu lorem sodalesd enean adipiscing.' },
        { id: 6, class: 'fas fa-glass-martini', text: 'Quisque sagittis lacus eu lorem sodalesd enean adipiscing.' },
        { id: 7, class: 'fa fa-star', text: 'Quisque sagittis lacus eu lorem sodalesd enean adipiscing.' },
        { id: 8, class: 'fa fa-heart', text: 'Quisque sagittis lacus eu lorem sodalesd enean adipiscing.' },
        { id: 9, class: 'fas fa-moon', text: 'Quisque sagittis lacus eu lorem sodalesd enean adipiscing.' },
    ];


    renderServices = () => {
        return this.arrServices.map((item, index) => {
            return <div key={index} className={`col-md-4 service__item__boder border__item__${item.id}`}>
                <ServiceItem item={item} className={item.id}/>
            </div>
        })
    }

    render() {
        return (
            <div className="services py-5">
                <div className="container py-5 text-center">
                    <h3 className="txt__title">Our Services</h3>
                    <h5 className="txt__title__small">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</h5>
                    <div className="row">
                        {this.renderServices()}
                    </div>
                </div>
            </div>
        )
    }
}
