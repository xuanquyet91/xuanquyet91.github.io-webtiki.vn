import React from 'react'
import { Link } from 'react-router-dom'


function ShoppingCart() {
    return (
      <div className="shoppingCart">
  <div className="shoppingCart-title">
    <h1>GIỎ HÀNG</h1>
  </div>
  <div className="shoppingCart-body">
    <div className="shoppingCart-left">
      <div className="checkBox-Item">
        <input type="checkbox" />
        <span>Tất cả (1 sản phẩm)</span>
        <p>Đơn giá</p>
        <p>Số Lượng</p>
        <p>Thành Tiền</p>
        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg" alt="" />
      </div>
      <div className="checkBox-group">
        <div className="checkBox-count">
          <div className="checkBox-countTitle">
            <input type="checkbox" />
            <img src="https://salt.tikicdn.com/ts/upload/30/24/79/8317b36e87e7c0920e33de0ab5c21b62.png" alt="" />
            <h3>Đồ Trang Trí Nội Thất</h3>
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/Path.svg" alt="" />
          </div>
          <div className="checkBox-countInfo">
            <div className="checkBox-countInfoLeft">
              <input type="checkbox" />
              <img src="https://salt.tikicdn.com/cache/w1200/ts/product/e5/d5/16/a93f3b25e10bd0616908b53da35ac410.jpg" alt="" />
              <div className="word-two">
                <p>Hộp đựng giấy ăn họa tiết hoa nhí xanh vân men sứ mang phong cách tân cổ điển CB06-HG có 2 ngăn siêu tiện ích</p>
              </div>
            </div>
            <div className="checkBox-countInfoRight">
              <p>750.000₫</p>
              <p>1.090.000đ</p>
              <div className="checkBox-countAdd">
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" alt="" />
                <input type="text" defaultValue={1} />
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" alt="" />
              </div>
              <p>750.000đ</p>
              <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="shop-discount">
          <h4>Shop Khuyến Mãi</h4>
          <p>Vui lòng chọn sản phẩm trước</p>
        </div>
      </div>
      <div className="checkBox-group">
        <div className="checkBox-count">
          <div className="checkBox-countTitle">
            <input type="checkbox" />
            <img src="https://salt.tikicdn.com/ts/upload/30/24/79/8317b36e87e7c0920e33de0ab5c21b62.png" alt="" />
            <h3>Đồ Trang Trí Nội Thất</h3>
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/Path.svg" alt="" />
          </div>
          <div className="checkBox-countInfo">
            <div className="checkBox-countInfoLeft">
              <input type="checkbox" />
              <img src="https://salt.tikicdn.com/cache/w1200/ts/product/e5/d5/16/a93f3b25e10bd0616908b53da35ac410.jpg" alt="" />
              <div className="word-two">
                <p>Hộp đựng giấy ăn họa tiết hoa nhí xanh vân men sứ mang phong cách tân cổ điển CB06-HG có 2 ngăn siêu tiện ích</p>
              </div>
            </div>
            <div className="checkBox-countInfoRight">
              <p>750.000₫</p>
              <p>1.090.000đ</p>
              <div className="checkBox-countAdd">
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" alt="" />
                <input type="text" defaultValue={1} />
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" alt="" />
              </div>
              <p>750.000đ</p>
              <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="shop-discount">
          <h4>Shop Khuyến Mãi</h4>
          <p>Vui lòng chọn sản phẩm trước</p>
        </div>
      </div>
    </div>
    <div className="shoppingCart-right">
      <div className="discount-tiki">
        <div>
          <p>Tiki Khuyến Mãi</p>
          <span>Có thể chọn 2</span>
          <img src="https://frontend.tikicdn.com/_desktop-next/static/img/mycoupon/icons-info-gray.svg" alt="" />
        </div>
        <div>
          <img src="https://frontend.tikicdn.com/_desktop-next/static/img/mycoupon/coupon_icon.svg" alt="" />
          <h5>Chọn hoặc nhập Khuyến mãi</h5>
        </div>
      </div>
      <div className="priceItem-submit">
        <div className="priceItem-submitTop">
          <div>
            <p>Tạm Tính</p>
            <span>0đ</span>
          </div>
          <div>
            <p>Giảm Giá</p>
            <span>0đ</span>
          </div>
        </div>
        <div className="priceItem-submitBottom">
          <div>
            <p>Tổng Cộng</p>
            <span>750.000đ</span>
          </div>
          <p>(Đã bao gồm VAT nếu có)</p>
        </div>
      </div>
      <Link to="/" class="link-item">
      <button>Mua Hàng (0)</button>
      </Link>
    </div>
  </div>
</div>

    
    )
}

export default ShoppingCart
