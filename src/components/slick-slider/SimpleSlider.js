import React, { Component } from "react";
import Slider from "react-slick";
// import { pizzas } from "../../data/pizzaDB";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import { promo } from "../../data/promoDB";


export default class SimpleSlider extends Component {

    render() {
        // const settings = {
        //     dots: true,
        //     infinite: true,
        //     speed: 1000,
        //     slidesToShow: 2,
        //     slidesToScroll: 1,
        //     arrows: false,
        //     centerMode: true,
        //     variableWidth: true,
        //     adaptiveHeight: true,
        //     // autoplay: true,
        //     autoplaySpeed: 3000,


        // };
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 5
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
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