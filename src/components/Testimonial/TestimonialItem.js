import React, { Component } from 'react'
import StarRatings from 'react-star-ratings';

export default class TestimonialItem extends Component {
    changeRating = (newRating) => {
        this.setState({
            rating: newRating
        })
    }

    state = {
        rating: this.props.item.star
    }


    render() {
        let { item } = this.props;
        return (
            <div className="testimonial__item">
                <div className="testimonial__item__quote">
                    <i className="fa fa-quote-left"></i>
                    <span>{item.quote}</span>
                    <i className="fa fa-quote-right"></i>
                </div>
                <div className="testimonial__item__info">
                    <img src={item.img} alt="..." />
                    <h5>{item.name}</h5>
                    <div className="item__stars">
                        <StarRatings
                            rating={this.state.rating}
                            starRatedColor="blue"
                            numberOfStars={4}
                            name='rating'
                            starRatedColor='#ff3c41'
                            starDimension='12px'
                            starSpacing='3px'
                            changeRating={this.changeRating}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
