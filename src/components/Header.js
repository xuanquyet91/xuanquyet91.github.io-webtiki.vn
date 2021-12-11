import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';


function Header() {
  const { user,logout, isAuthenticated } = useAuth0();
  // const { user, isAuthenticated } = useAuth0();

  
    return ( 
        <header className="style__header">
          <div className="header__top">
            <div className="menu__left">
              <div className="menu-logo">
                <a href="true" className="style-logo">
                <Link to="/">
                  <img src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt="logoTIKI" />
                </Link>
                </a>
              </div>
              <div className="formSearch">
                <input type="text" data-view-id="main_search_form_input"  placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..." className="formSearch__Input" />
                <div class="search-list">
                  <Link to="/Product" className="link-item">
                  <div class="search-item">Thịt Rau Củ</div>
                  <div class="search-item">Bách Hóa Xanh</div>
                  <div class="search-item">Nhà Cửa</div>
                  <div class="search-item">Sửa Điều Hòa</div>
                  </Link>
                </div>
                <button>
                  <img src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png" alt="tìm kiếm" />
                  Tìm Kiếm
                </button>
              </div>
            </div>
            <div className="menu__right">
              <div className="user-account">
              <a href="http://localhost:3000/Register-login">
                <div className="cart-item">
                  {!isAuthenticated && (<img src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png" alt="" className="profile-icon" />)}
                  {isAuthenticated && (<img src={user.picture} alt="" className="profile-icon" />)}
                  {/* <img src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png" alt="" className="profile-icon" /> */}
                  <span className="user-style">
                  {!isAuthenticated && (
                    <div>
                    <span className="user-style__login">Đăng Nhập / Đăng Ký</span>
                    <span className="account-label">
                      <span>Tài Khoản</span>
                      <img src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png" alt="" />
                    </span>
                    </div>
                    )}
                    {isAuthenticated && (
                      <>
                      <Link to="/Account" className="link-item">
                      <p>{user.email}</p>
                      </Link>
                      <button onClick={() => logout()} className="log-out">
                      Log Out
                      </button> 
                      {/* <JSONPretty data={user} /> */}
                      </>
                    )}
                    
                  </span>
                </div>
                </a>
                <Link to="/Shopping-cart" className="link-item">
                <div className="cart-shopping">
                  <img src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png" alt="" />
                  <span>Giỏ Hàng</span>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="header__bottom">
            <a className="logo__bottom" href="true">
            <Link to="/">
              <img src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png" alt="FreeShip" />
            </Link>
            </a>
            <div className="keyWords__food">
            <Link to="/Product">
              <a href="true">Tất cả thịt rau củ</a>
            </Link>
            <Link to="/Product">
              <a href="true">thịt</a>
            </Link>
            <Link to="/Product">
            <a href="true">hàng đông lạnh</a>
            </Link>
            <Link to="/Product">
            <a href="true">trái cây</a>
            </Link>
            <Link to="/Product">
            <a href="true">hải sản</a>
            </Link>
            <Link to="/Product">
            <a href="true">gạo</a>
            </Link>
            </div>
            
            <Link to="/Register-form" className="link-item">
            <a className="tiki-seller" href="true">
              <img className="icon" alt="tik" src="https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg" />
              <span className="text">Bán hàng cùng Tiki</span>
            </a>
            </Link>
            
            
        </div>
          
      </header>


    )
}

export default Header