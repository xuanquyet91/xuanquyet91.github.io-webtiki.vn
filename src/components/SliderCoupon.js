import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderCoupon() {

    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className="couponTiki">
            <div className="sliderCoupon">
            <Slider {...settings}>
                <div className="imageCoupon">
                <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/0d/ca/c7/6ba8762e4da109128f94cca1a6ecce0d.png.webp" alt="" />
                </div>
                <div className="imageCoupon">
                <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/b3/9f/9c/a759c5b90b9b1c083147a60d0a0c86ce.png.webp" alt="" />
                </div>
                <div className="imageCoupon">
                <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/9a/1e/ff/c4feec6276c9a319f763d6a5297c8a53.png.webp" alt="" />
                </div>
                <div className="imageCoupon">
                <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/c6/fc/15/043d58e6a950c3ff6261cbe34164c4d9.png.webp" alt="" />
                </div>
            </Slider>
            </div>
            <div className="bookClubCoupon">
                <img src="https://salt.tikicdn.com/cache/w400/ts/banner/da/91/87/a4728dc4e17dc3bdd284e36bee7703dc.png.webp" alt="" />
            </div>
        </div>

    )
}

export default SliderCoupon
