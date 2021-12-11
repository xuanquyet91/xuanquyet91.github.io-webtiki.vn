import React from 'react'
import { Link } from 'react-router-dom'


function BannerSaleTwo() {
    return (
            <Link to="/Discount-daily" className="link-item">
        <div className="bannerSalesTwo">
            <div className="bannerFourCol">
                <img src="https://salt.tikicdn.com/cache/w280/ts/banner/10/dd/88/5563d5caa269278e5b665614a5cf1951.png.webp" alt="" />
            </div>
            <div className="bannerFourCol">
                <img src="https://salt.tikicdn.com/cache/w280/ts/banner/e2/43/2a/d7da956f5b21fb7d2251e22e3f66f318.png.webp" alt="" />
            </div>
            <div className="bannerFourCol">
                <img src="https://salt.tikicdn.com/cache/w280/ts/banner/17/4c/b4/0732cfdcb0eb472eba0e42e28620e035.png.webp" alt="" />
            </div>
            <div className="bannerFourCol">
                <img src="https://salt.tikicdn.com/cache/w280/ts/banner/0c/da/b4/83a905ffcdd2487d8f589ddb7b57fe92.png.webp" alt="" />
            </div>
        </div>
        </Link>
    )
}

export default BannerSaleTwo
