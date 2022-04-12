import React, { Component } from "react";
import Slider from "react-slick";
// import { pizzas } from "../../data/pizzaDB";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import { promo } from "../../data/promoDB";


export default class SimpleSlider extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 3000,


        };
        return (
            <div className="slider-wrapper">
                <Slider {...settings} >

                    {promo.map((item, id) =>
                        <div key={id} className="top-slider" >
                            <img src={item.img} alt={item.link} />
                        </div>
                    )
                    }

                </Slider>
            </div >
        );
    }
}