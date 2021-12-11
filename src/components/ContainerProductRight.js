import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import ContainerProductRightSub from './ContainerProductRightSub'

function ContainerProductRight() {

    return (
        // <Link to="/Product-item" class="link-item">
        
        <div className="containerProduct-right">
            <div className="productListTikiSub">
                <div className="productListTitleSub">
                <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/f7/64/6f/b081aec16493b3ed8e38904edb186723.jpg.webp" alt="" />
                <div className="productTitleSub">
                    <h4>Phổ Biến</h4>
                    <h4>Bán Chạy</h4>
                    <h4>Hàng Mới</h4>
                    <h4>Giá Thấp</h4>
                    <h4>Giá Cao</h4>
                </div>
            </div>
            <div className="productListSub-show">
            <a href="http://localhost:3000/Product" class="link-item">
            <ContainerProductRightSub/>
            </a>
            </div>
            <div className="productListSub-extra">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <a href="true" className="ti-angle-right" />
                </div>
            </div>
            <div className="support-messenger">
                <i className="far fa-comment"></i>
                <span>chat</span>
            </div>
        </div>
        /* </Link>  */
        
    )
}

export default ContainerProductRight
