import React from 'react'
import { Link } from 'react-router-dom'


function BannerSaleOne() {
    return (
            <Link to="/Discount-daily" className="link-item">
        <div className="bannerSalesOne">
            <div className="bannerLeft">
                <img src="https://salt.tikicdn.com/cache/w200/ts/banner/87/32/a1/91de71f8f7c68c470753efc36e565a61.png.webp" alt="" />
            </div>
            <div className="bannerCenter">
                <img src="https://salt.tikicdn.com/cache/w750/ts/banner/67/81/8b/2a4e4c66f9d22e1cd02b2f0e94250d80.png.webp" alt="" />
            </div>
            <div className="bannerRight">
                <img src="https://salt.tikicdn.com/cache/w200/ts/banner/96/60/1d/539900d3fe74dd598275ed8c43d0a487.png.webp" alt="" />
            </div>
        </div>
        </Link>
    )
}

export default BannerSaleOne
