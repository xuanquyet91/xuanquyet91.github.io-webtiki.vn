import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SliderText() {

        var settings = {
          infinite: true,
          slidesToShow: 13,
          slidesToScroll: 13
        };

        return (
            <Link to="/Product" >
            <div className="slider__header">
                <Slider {...settings}>
                    <div className="styleCateName">Thịt, rau củ</div>
                    <div className="styleCateName">Bách Hóa</div>
                    <div className="styleCateName">Nhà Cửa</div>
                    <div className="styleCateName">Thiết Bị Số</div>
                    <div className="styleCateName">Điện Thoại</div>
                    <div className="styleCateName">Mẹ &amp; Bé</div>
                    <div className="styleCateName">Làm Đẹp</div>
                    <div className="styleCateName">Gia Dụng</div>
                    <div className="styleCateName">Thời trang </div>
                    <div className="styleCateName">Làm Đẹp</div>
                    <div className="styleCateName">Giày nữ</div>
                    <div className="styleCateName">Túi nữ</div>
                    <div className="styleCateName">Giày nam</div>
                    <div className="styleCateName">Túi nam</div>
                    <div className="styleCateName">Balo &amp; Vali</div>
                    <div className="styleCateName">Phụ kiện</div>
                    <div className="styleCateName">Đồng hồ</div>
                    <div className="styleCateName">Laptop</div>
                    <div className="styleCateName">Quốc Tế</div>
                    <div className="styleCateName">Voucher</div>
                    <div className="styleCateName">Xe</div>
                    <div className="styleCateName">Sách</div>
                    <div className="styleCateName">Điện Tử</div>
                    <div className="styleCateName">Thể Thao</div>
                    <div className="styleCateName">Máy Ảnh</div>
                </Slider>
            </div>
            </Link>
        )
}

export default SliderText
