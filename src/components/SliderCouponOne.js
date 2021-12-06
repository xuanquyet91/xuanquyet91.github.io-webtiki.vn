import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


function SliderCouponOne() {
    var settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots:true
      };

    return (
        <Link to="/Discount-daily" className="link-item">
            <div className="sliderCouponOne">
                <div className="slider-title">
                    <div className="title-left">
                    <img src="https://salt.tikicdn.com/ts/upload/ab/97/b1/a7c6657740248d396b100bc2330e98b8.png" alt="" />
                    <span>Thương Hiệu Chính Hãng</span>
                    </div>
                    <div className="title-right">
                    <a href="true">XEM THÊM</a>
                    </div>
                </div>
                <div className="layout-coupon">
                <Slider {...settings}>
                        <div className="imageCouponOne">
                        <img src="https://salt.tikicdn.com/cache/w750/ts/banner/13/57/29/2e5e6cb94420fec58c8aeb96a7829acf.png.webp" alt="" />
                        </div>
                        <div className="imageCouponOne">
                        <img src="https://salt.tikicdn.com/cache/w750/ts/banner/95/3d/98/09fe332bfc291a405d799e84e720a126.png.webp" alt="" />
                        </div>
                        <div className="imageCouponOne">
                        <img src="https://salt.tikicdn.com/cache/w750/ts/banner/37/f1/13/a4b3e6eb1a9f9fb25c2b21b52fa89772.png.webp" alt="" />
                        </div>
                        <div className="imageCouponOne">
                        <img src="https://salt.tikicdn.com/cache/w750/ts/banner/5e/dd/e5/1ef07027bf25fb8b153e268eb517edc4.png.webp" alt="" />
                        </div>
                        <div className="imageCouponOne">
                        <img src="https://salt.tikicdn.com/cache/w750/ts/banner/18/d5/a4/a5276e10fc19a2d8a8e8411eba72c968.png.webp" alt="" />
                        </div>
                        <div className="imageCouponOne">
                        <img src="https://salt.tikicdn.com/cache/w750/ts/banner/ac/5d/2f/18bff0648ba09e2735a0249734850f66.jpg.webp" alt="" />
                        </div>
                </Slider>
                </div>
            </div>
        </Link>
    )
}

export default SliderCouponOne
