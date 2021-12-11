import React from 'react'
import { Link } from 'react-router-dom'


function BannerSaleThird() {
    return (
        <Link to="/Product" class="link-item">
        <div className="bannerSalesThird">  
                <div className="bannerSixCol">
                    <img src="https://salt.tikicdn.com/cache/w200/ts/banner/76/71/bc/c648a0fc786874fecd74d1863c75e745.png.webp" alt="" />
                    <span>Ưu Đãi Nửa Giá</span>
                </div>
                <div className="bannerSixCol">
                    <img src="https://salt.tikicdn.com/cache/w200/ts/banner/7b/6a/01/2f34fccf369b3ecb56656c216e244784.png.webp" alt="" />
                    <span>Ưu Đãi Đến 30%</span>
                </div>
                <div className="bannerSixCol">
                    <img src="https://salt.tikicdn.com/cache/w200/ts/banner/cb/54/6b/2581b23806292a6dbabcec4e23160778.jpg.webp" alt="" />
                    <span>Deal Sốc Từ 99K</span>
                </div>
                <div className="bannerSixCol">
                    <img src="https://salt.tikicdn.com/cache/w200/ts/banner/74/d0/00/18ce73527aae70230dcfc65111b4afd6.png.webp" alt="" />
                    <span>Giảm Đến 50%</span>
                </div>
                <div className="bannerSixCol">
                    <img src="https://salt.tikicdn.com/cache/w200/ts/banner/83/9e/4b/aca60f4194f2fc6322333cbed3305f0f.png.webp" alt="" />
                    <span>Chốt Đơn Nhận Quà</span>
                </div>
                <div className="bannerSixCol">
                    <img src="https://salt.tikicdn.com/cache/w200/ts/banner/6c/e1/b3/5ed9e561af8020fa5d4ed8871b07ac59.png.webp" alt="" />
                    <span>Giảm 50K Đơn 500K</span>
                </div>
            </div>
        </Link>
    )
}

export default BannerSaleThird
