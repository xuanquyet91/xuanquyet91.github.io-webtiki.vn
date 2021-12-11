import React from 'react'
import { Link } from 'react-router-dom'


function BannerSaleFour() {
    return (
        <Link to="/Discount-daily" className="link-item">
        <div className="bannerSalesFour">   
                <div className="bannerThirdCol">
                    <img src="https://salt.tikicdn.com/cache/w400/ts/banner/f6/07/10/001a5d2337a5b0c568107583e1d4493a.png.webp" alt="" />
                </div>
                <div className="bannerThirdCol">
                    <img src="https://salt.tikicdn.com/cache/w400/ts/banner/af/da/10/c818cc953989cbf71105d978cf04cafe.png.webp" alt="" />
                </div>
                <div className="bannerThirdCol">
                    <img src="https://salt.tikicdn.com/cache/w400/ts/banner/3b/52/82/8204b5f0b48a7781ebd1aeaa80555d96.png.webp" alt="" />
                </div>
            </div>
        </Link>
    )
}

export default BannerSaleFour
