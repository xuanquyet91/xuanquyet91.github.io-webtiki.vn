import React from 'react'

function Header() {
    return ( 
        <header className="style__header">
          <div className="header__top">
            <div className="menu__left">
              <div className="menu-logo">
                <a href="#" className="style-logo">
                  <img src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt="logoTIKI" />
                </a>
              </div>
              <div className="formSearch">
                <input type="text" data-view-id="main_search_form_input"  placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..." className="formSearch__Input" />
                <button>
                  <img src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png" alt="tìm kiếm" />
                  Tìm Kiếm
                </button>
              </div>
            </div>
            <div className="menu__right">
              <div className="user-account">
                <div className="cart-item">
                  <img src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png" alt="" className="profile-icon" />
                  <span className="user-style">
                    <span className="user-style__login">Đăng Nhập / Đăng Ký</span>
                    <span className="account-label">
                      <span>Tài Khoản</span>
                      <img src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png" alt="" />
                    </span>
                  </span>
                </div>
                <div className="cart-shopping">
                  <img src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png" alt="" />
                  <span>Giỏ Hàng</span>
                </div>
              </div>
            </div>
          </div>
          <div className="header__bottom">
            <a className="logo__bottom" href="#">
              <img src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png" alt="FreeShip" />
            </a>
            <div className="keyWords__food">
              <a href="#">Tất cả thịt rau củ</a>
              <a href="#">thịt</a>
              <a href="#">hàng đông lạnh</a>
              <a href="#">trái cây</a>
              <a href="#">hải sản</a>
              <a href="#">gạo</a>
            </div>
            <a className="tiki-seller" href="#">
              <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg" />
              <span className="text">Bán hàng cùng Tiki</span>
            </a>
          </div>
          <div className="header__support">
            <a href="#"> <img src="https://cf.shopee.vn/file/f630b99bef39b0226e962ba7d6750e68" alt="" />
            </a>
          </div>
</header>


    )
}

export default Header