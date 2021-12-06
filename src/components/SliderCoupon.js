import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function SliderCoupon() {

    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <Link to="/Discount-daily" className="link-item">
        <div className="couponTiki">
            <div className="sliderCoupon">
            <Slider {...settings}>
                <div className="imageCoupon">
                <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/90/4e/44/409f5076798441a0dc9394bc01c5391e.png.webp" alt="" />
                </div>
                <div className="imageCoupon">
                <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/21/9c/20/1d8b61b93be89df93a0ded5cb64a0910.png.webp" alt="" />
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
                <img src="https://salt.tikicdn.com/cache/w400/ts/banner/9c/b5/20/330884cb61f225720948408be7d17527.png.webp" alt="" />
            </div>
        </div>
    </Link>
    )
}

export default SliderCoupon
