import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import 'bootstrap/dist/css/bootstrap.min.css';

function ShoppingCart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [countResult, setCountResult] = useState(() => {
    const initCount = Number(localStorage.getItem('productCount'))
    return initCount
  })
  const handlerIncreaseCart = () =>{
    setCountResult(prev => prev -1)
    localStorage.setItem('productCount',countResult)
  }
  const handlerDecreaseCart = () =>{
    setCountResult(prev => prev +1)
    localStorage.setItem('productCount',countResult)
  }

  const productTitle = localStorage.getItem('productTitle')
  const productImg = localStorage.getItem('productImg')
  const productPrice = Number(localStorage.getItem('productPrice'))
  const storageProductDiscount = (Number(localStorage.getItem('productDisc')) / 100 * productPrice).toFixed(1);
  const countData = Number(localStorage.getItem('productCount'))

  console.log(typeof storageProductDiscount)

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
                    <img src={productImg} alt="" />
                    <div className="word-two">
                      <p>{productTitle}</p>
                    </div>
                  </div>
                  <div className="checkBox-countInfoRight">
                    <p>{productPrice} $</p>
                    <p>190 $</p>
                    <div className="checkBox-countAdd">
                      <img 
                      onClick={handlerIncreaseCart}
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" alt="" />
                      <input type="text" Value={countData} />
                      <img 
                      onClick={handlerDecreaseCart}
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" alt="" />
                    </div>
                    <p>{productPrice * countData} $</p>
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
                  <span>{productPrice * countData} $</span>
                </div>
                <div>
                  <p>Giảm Giá</p>
                  <span>{(storageProductDiscount*countData).toFixed(1)} $</span>
                </div>
              </div>
              <div className="priceItem-submitBottom">
                <div>
                  <p>Tổng Cộng</p>
                  <span>{((productPrice * countData) - (storageProductDiscount*countData)).toFixed(1)} $</span>
                </div>
                <p>(Đã bao gồm VAT nếu có)</p>
              </div>
            </div>
            {/* <Link to="/" class="link-item">
            <button>Mua Hàng ({countData})</button>
            </Link> */}
             <>
              <Button variant="danger" onClick={handleShow}>
                  Mua Hàng ({countData})
              </Button>
              <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
            <Modal.Title>Hoàn Tất Thanh Toán</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            Bạn đã mua thành công <span>{countData }</span> sản phẩm <span>{productTitle}</span> với giá <span>{((productPrice * countData) - (storageProductDiscount*countData)).toFixed(1)} $ </span>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" 
            className="setButton"
            onClick={handleClose}>
              <Link to="/"  class="link-item">
                Đặt Đơn Mới
                </Link>
            </Button>
            {/* <Button variant="primary">Understood</Button> */}
            </Modal.Footer>
            </Modal>
            </>
          </div>
        </div>
      </div>
     
      

    
    )
}

export default ShoppingCart
