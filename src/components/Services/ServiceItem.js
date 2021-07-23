import React, { Component } from 'react'

export default class ServiceItem extends Component {
    render() {
        let { item } = this.props;
        return (
            <div className="service__item">
                <i className={item.class}></i>
                <h5>Service 0{item.id}</h5>
                <p>{item.text}</p>
            </div>
        )
    }
}
