import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ContainerProductDetail() {

  window.addEventListener('DOMContentLoaded', () => {
    
  const images = document.querySelectorAll(".list-image img");
  images.forEach((el) => el.addEventListener("click", handleChangeImage));
  function handleChangeImage(e) {
    const source = e.target.getAttribute("src");
    const featureImage = document.querySelector(".feature-image");
    featureImage.setAttribute("src", source);
  };
  
  //zoom image =>> failed only router not render
    const cover = document.querySelector(".screen-image__cover");
    cover.addEventListener("mousemove", function (e) {
      const screenImage = document.querySelector(".feature");
      const image = document.querySelector(".feature-image");
      image.style = "width: auto;height:auto;max-height:unset";

      let imageWidth = image.offsetWidth;
      let imageHeight = image.offsetHeight;
      const screenWidth = screenImage.offsetWidth;
      const screenHeight = screenImage.offsetHeight;
      const spaceX = (imageWidth / 2 - screenWidth) * 2;
      const spaceY = (imageHeight / 2 - screenHeight) * 2;
      imageWidth = imageWidth + spaceX;
      imageHeight = imageHeight + spaceY;

      let x =
        e.pageX - screenImage.offsetParent?.offsetLeft - screenImage.offsetLeft;
      let y = e.pageY - screenImage.offsetParent?.offsetTop - screenImage.offsetTop;

      const positionX = (imageWidth / screenWidth / 2) * x;
      const positionY = (imageHeight / screenHeight / 2) * y;

      image.style = `left: ${-positionX}px;top: ${-positionY}px;width: auto;height:auto;max-height:unset;transform:none;`;
    });

    cover.addEventListener("mouseleave", function (e) {
      const image = document.querySelector(".feature-image");
      image.style = ``;
    });

  });

  const [count, setCount] = useState(1)
  const handlerIncrease = () =>{
    setCount(prev => prev +1)
    localStorage.setItem('productCount',count)
  }
  const handlerDecrease = () =>{
    setCount(prev => prev -1)
    localStorage.setItem('productCount',count)
  }

  const productTitle = localStorage.getItem('productTitle')
  const productPrice = localStorage.getItem('productPrice')
  const productImg = localStorage.getItem('productImg')

  


    return (
        <div className="containerProductDetail">
          <div className="productDetail-image">
            <div className="layout">
              <div className="feature">
                <img src={productImg} alt="" className="feature-image" />
                <div className="screen-image__cover" />
              </div>
              <div className="list-image">
                <img src="https://salt.tikicdn.com/cache/w1200/ts/product/e5/d5/16/a93f3b25e10bd0616908b53da35ac410.jpg" alt="" />
                <img src="https://salt.tikicdn.com/cache/w1200/ts/product/f1/e4/29/cfda8f7bf021fb684953a66fe10a8698.png" alt="" />
                <img src="https://salt.tikicdn.com/cache/w1200/ts/product/ed/56/d3/ff9f4782ab7cef40b6e913925f589e0d.png" alt="" />
                <img src="https://salt.tikicdn.com/cache/w1200/ts/product/95/32/05/29eae2509a9f591f632d2e3fe2277fb1.png" alt="" />
                <img src="https://salt.tikicdn.com/cache/w1200/ts/product/8f/80/ed/d10ab177b17397fd6b99c0d6870208d1.png" alt="" />
              </div>
            </div>
            <div className="socialNetwork">
              <div className="socialNetwork-share">
                <p>Chia S???: </p>
                <a href="true"><i className="fab fa-facebook-square" style={{color: 'blue'}} /></a>
                <a href="true"><i className="fab fa-youtube-square" style={{color: 'red'}} /></a>
                <a href="true"><i className="fab fa-twitter-square" style={{color: 'rgba(76, 0, 255, 0.801)'}} /></a>
                <a href="true"><i className="fab fa-facebook-messenger" style={{color: 'blue'}} /></a>
                <a href="true"><i className="fas fa-share-alt-square" /></a>
              </div>
              <div className="socialNetwork-like">
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-like.svg" alt="" />
                <p>Th??ch</p>
              </div>
            </div>
          </div>
          <div className="productDetail-desc">
            <div className="productDetail-title">
              <h1>{productTitle}</h1>
              <div className="productDetail-info">
                <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                <p>(Xem 1 ????nh gi??)</p>
                <p>???? b??n: 1</p>
              </div>
            </div>
            <div className="productDetail-body">
              <div className="productDetail-left">
                <div className="product__price">
                  <h1>{productPrice } $</h1>
                  <div className="shipPolicy">
                    <img src="https://salt.tikicdn.com/ts/upload/af/84/fc/2037c3b93a81767aed21358ebf3f8b8e.png" alt="" />
                    <p>Mi???n ph?? v???n chuy???n</p>
                  </div>
                  <div className="shipPolicy">
                    <img src="https://salt.tikicdn.com/ts/upload/f9/ad/0e/a8a97f5ac7661d637942b42796893662.png" alt="" />
                    <p>Ho??n ti???n 15%, Mi???n ph?? th?????ng ni??n</p>
                  </div>
                </div>
                <div className="product__final">
                  <div className="voucher">
                    <h4>15 M?? Gi???m Gi??</h4>
                    <div className="coupon-tag">Gi???m 200k</div>
                    <div className="coupon-tag">Gi???m 86k</div>
                    <div className="coupon-tag">Gi???m 2 Tri???u</div>
                  </div>
                  <div className="address-price">
                    <p>B???n h??y nh???p ?????a ch??? nh???n h??ng ????? ???????c d??? b??o th???i gian &amp; chi ph?? giao h??ng ch??nh x??c nh???t.</p>
                  </div>
                  <div className="product-submit">
                    <h4>S??? L?????ng</h4>
                    <div className="product-count">
                      <img 
                      onClick={handlerDecrease}
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" alt="" />
                      <input type="text" Value={count-1} />
                      <img 
                      onClick={handlerIncrease}
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" alt="" />
                    </div>
                    <div className="group-button">
                      <Link to="/Shopping-cart" className="link-item">
                      <button>Ch???n Mua</button>
                      </Link>
                      <div className="button-chat">
                        <a href="true"><i className="far fa-comment" style={{color: '#2b08b7'}} /></a>
                        <span>chat</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="productDetail-right">
                <div className="title-shop">
                  ????? Trang Tr?? N???i Th???t
                </div>
                <div className="feedback-shop">
                  <div>
                    <span>4.4 / 5</span>
                    <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                    <p>164</p>
                  </div>
                  <div>
                    <span>345</span>
                    <p>Theo d??i</p>
                  </div>
                  <div>
                    <span>100%</span>
                    <p>Ph???n H???i Chat</p>
                  </div>
                </div>
                <div className="follow-shop">
                  <div className="click-shop">
                    <img src="https://salt.tikicdn.com/ts/upload/49/27/ff/d735c33edfdc6cf6aeb6e183bec28869.png" alt="" />
                    <span>Xem Shop</span>
                  </div>
                  <div className="click-shop">
                    <img src="https://salt.tikicdn.com/ts/upload/5b/bf/3c/eeda00767e26b5873030e44f951441c4.png" alt="" />
                    <span>Theo D??i</span>
                  </div>
                </div>
                <div className="product-benifit">
                  <div className="item-benifit">
                    <img src="https://salt.tikicdn.com/ts/upload/2c/48/44/720434869e103b03aaaf1a104d91ad25.png" alt="" />
                    <span>Ho??n Ti???n 100% H??ng Gi???</span>
                  </div>
                  <div className="item-benifit">
                    <img src="https://salt.tikicdn.com/ts/upload/4b/a1/23/1606089d5423e5cba05e3820ad39708e.png" alt="" />
                    <span>M??? H???p Ki???m Tra Nh???n H??ng</span>
                  </div>
                  <div className="item-benifit">
                    <img src="https://salt.tikicdn.com/ts/upload/63/75/6a/144ada409519d72e2978ad2c61bc02a7.png" alt="" />
                    <span>?????i Tr??? Trong 30 Ng??y N???u SP L???i</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


    )
}

export default ContainerProductDetail