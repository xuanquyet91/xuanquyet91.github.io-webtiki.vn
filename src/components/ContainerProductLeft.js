import React from 'react'

function ContainerProductLeft() {
    return (
        <div className="containerProduct-left">
            <div className="listProductOption">
                <h4>DANH MỤC SẢN PHẨM</h4>
                <a href="#">Rau Củ Quả</a>
                <a href="#">Bia, đồ uống</a>
                <a href="#">Hải Sản</a>
                <a href="#">Thực Phẩm Chế Biến Sẵn</a>
                <a href="#">Thực Phẩm Đông Lạnh Khác</a>
                <a href="#">Traí Cây</a>
                <a href="#">Điện Lạnh</a>
                <a href="#">Thiết Bị Số</a> 
                <a href="#">Điện Thoại </a> 
                <a href="#">Mẹ &amp; Bé </a> 
                <a href="#">Làm Đẹp </a> 
                <a href="#">Gia Dụng </a> 
                <a href="#">Thời trang nữ </a> 
                <a href="#">Thời trang nam </a> 
                <a href="#">Giày nữ </a> 
                <a href="#">Túi nữ </a> 
                <a href="#">Giày nam </a> 
                <a href="#">Túi nam </a> 
                <a href="#">Balo &amp; Vali </a> 
                <a href="#">Phụ kiện </a> 
                <a href="#">Đồng hồ </a> 
                <a href="#">Thực Phẩm Bổ Dưỡng </a> 
                <a href="#">Quốc Tế </a> 
                <a href="#">Voucher </a> 
                <a href="#">Thực Phẩm Bảo Vệ Sức Khỏe </a> 
                <a href="#">Thực Phẩm Cho Trẻ Em</a> 
                <a href="#">Thực Phẩm Cao Cấp </a> 
                <a href="#">Thể Thao </a> 
                <a href="#">Máy Ảnh </a>
            </div>
            <div className="listProductOption">
                <h4>ĐỊA CHỈ NHẬN HÀNG</h4>
                <p>Bạn muốn giao hàng tới đâu?</p>
                <a href="#" style={{color: 'blue'}}>NHẬP ĐỊA CHỈ</a>
            </div>
            <div className="listProductOption">
                <h4>DỊCH VỤ</h4>
                <div>
                <input type="checkbox" />
                <img src="https://salt.tikicdn.com/ts/upload/f9/ad/0e/a8a97f5ac7661d637942b42796893662.png" alt="" />
                <p>Giao Siêu Tốc 2H</p>
                </div>
                <div>
                <input type="checkbox" />
                <img src="https://salt.tikicdn.com/ts/upload/af/84/fc/2037c3b93a81767aed21358ebf3f8b8e.png" alt="" />
                <p>Không Giới Hạn</p>
                </div>
                <div>
                <input type="checkbox" />
                <p>Hoàn Tiền Siêu Tốc</p>
                </div>
            </div>
            <div className="listProductOption">
                <h4>ĐÁNH GIÁ</h4>
                <div className="starRateSub">
                <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                {/* <ion-icon name="star-half-sharp" style="color: #fdd836;" role="img" class="md hydrated" aria-label="star half sharp"></ion-icon> */}
                <ion-icon name="star-outline" style={{color: '#5e64637c'}} role="img" className="md hydrated" aria-label="star outline" />
                <ion-icon name="star-outline" style={{color: '#5e64637c'}} role="img" className="md hydrated" aria-label="star outline" />
                <p>Từ 3 Sao</p>
                </div>
                <div className="starRateSub">
                <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                <ion-icon name="star-outline" style={{color: '#5e64637c'}} role="img" className="md hydrated" aria-label="star outline" />
                <p>Từ 4 Sao</p>
                </div>
                <div className="starRateSub">
                <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                <p>Từ 5 Sao</p>
                </div>
            </div>
            <div className="listProductOption">
                <h4>GIÁ</h4>
                <span>Dưới 60.000 &amp; Giá 1đ</span>
                <span>Từ 60.000 đến 220.000</span>
                <span>Từ 220.000 Trở Lên</span>
                <p>Chọn khoảng giá</p>
                <div>
                <input defaultValue={0} className="priceProduct" type="text" /> - 
                <input defaultValue={0} className="priceProduct" type="text" />
                </div>
                <button>Xác Nhận</button>
            </div>
            <div className="listProductOption">
                <h4>THƯƠNG HIỆU</h4>
                <div>
                <input type="checkbox" />
                <p>Coop Food</p>
                </div>
                <div>
                <input type="checkbox" />
                <p>3 Sạch Food</p>
                </div>
                <div>
                <input type="checkbox" />
                <p>Bách Hóa Xanh</p>
                </div>
                <div>
                <input type="checkbox" />
                <p>Vinsmart</p>
                </div>
                <div>
                <input type="checkbox" />
                <p>BigC</p>
                </div>
            </div>
            <div className="listProductOption">
                <h4>NHÀ CUNG CẤP</h4>
                <div>
                <input type="checkbox" />
                <p>Bic C! Bắc Ninh</p>
                </div>
                <div>
                <input type="checkbox" />
                <p>Bic C! Bắc Giang</p>
                </div>
                <div>
                <input type="checkbox" />
                <p>GO! Hà Nội</p>
                </div>
                <div>
                <input type="checkbox" />
                <p>GO! Vĩnh Phúc</p>
                </div>
                <div>
                <input type="checkbox" />
                <p>GO! Thái Nguyên</p>
                </div>
            </div>
            </div>

    )
}

export default ContainerProductLeft
