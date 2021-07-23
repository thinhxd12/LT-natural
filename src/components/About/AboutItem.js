import React, { Component } from 'react'

export default class AboutItem extends Component {


    render() {
        let { item } = this.props;
        if (item.id % 2 === 0) {
            return (
                <div className="about__item">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="about__info">
                                <h4>{item.header}</h4>
                                <p>{item.text}</p>
                                <a href="/#" className="btn__learnmore">Learn More</a>
                            </div>
                        </div>
                        <div className="col-md-4 px-0">
                            <img src={item.img} alt="..."/>
                        </div>
                    </div>
                </div>
            )
        }

        else return (
            <div className="about__item">
                <div className="row">
                    <div className="col-md-4 px-0">
                        <img src={item.img} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="about__info">
                            <h4>{item.header}</h4>
                            <p>{item.text}</p>
                            <a href="/#" className="btn__learnmore">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
