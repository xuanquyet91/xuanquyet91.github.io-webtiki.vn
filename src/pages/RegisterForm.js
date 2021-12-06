import React from 'react'

function RegisterForm() {

    window.addEventListener('DOMContentLoaded', (event) => {

        var select = document.getElementById("year");
        
        var opt = document.createElement('option');
        opt.value = "Năm"
        opt.innerHTML = "Năm";
        select.appendChild(opt);
        var start = 1900;
        var till = new Date().getFullYear();;
        for(var year=start; year<=till; year++){
            var opt = document.createElement('option');
              opt.value = year;
              opt.innerHTML = year;
              select.appendChild(opt);
        };
    
    
        var select = document.getElementById("month");
        var start = 1;
        var till = 12;
        for(var month=start; month<=till; month++){
            var opt = document.createElement('option');
              opt.value = month;
              opt.innerHTML = month;
              select.appendChild(opt);
        };
    
        var select = document.getElementById("day");
        var start = 1;
        var till = 31;
        for(var day=start; day<=till; day++){
            var opt = document.createElement('option');
              opt.value = day;
              opt.innerHTML = day;
              select.appendChild(opt);
        };
        
    });
             

    return (
      <div className="registerSalesTiki">
      <div className="registerNow">
        <div>
          <h1>Đăng Ký Bán Hàng Cùng </h1>
          <img src="https://salt.tikicdn.com/ts/user/ee/09/6b/27a9c9764d0dbfd497c582e48bdc9c98.png" alt="" />
        </div>
        <p>Tiếp cận hơn 22 triệu lượt truy cập mỗi tháng!</p>
        <img src="https://salt.tikicdn.com/cache/w680/ts/user/dc/e6/b4/fa5101071b365ee2f385fd7d208b309f.jpg" alt="" />
      </div>
      <div className="registerImg">
        <h1>Đăng Ký Thông Tin</h1>
        <form action="http://localhost:3000/" id="form-register">
          <p>Họ và tên</p>
          <input type="text" name="name" id="name" placeholder="Nhập Đầy Đủ Họ Tên" /> 
          <span className="error" /><br />
          <p>Địa chỉ email</p>
          <input type="text" name="email" id="email" placeholder="Nhập Địa Chỉ Email" /> 
          <span className="error" /><br />
          <p>Mật khẩu</p>
          <input type="password" name="password" id="password" placeholder="Nhập Mật Khẩu" /> 
          <span className="error" /><br />
          <p>Số điện thoại</p>
          <input type="text" name="phonenumber" id="phone" placeholder="Nhập Số Điện Thoại" /> 
          <span className="error" /><br />
          <p>Địa Chỉ Đăng Ký</p>
          <input type="text" name="address" id="address" placeholder="Nhập Địa Chỉ Đăng Ký Bán Hàng" /> 
          <span className="error" /><br />
          <p>Giới Tính</p>
          <div>
            <input type="radio" name="gender" id="male" defaultValue="male" /> <label htmlFor="male"> <b>Nam</b> </label>
            <input type="radio" name="gender" id="female" defaultValue="female" /> <label htmlFor="female"> <b>Nữ</b> </label> <br />
          </div>
          <select id="day" name="day">
            <option>Ngày</option>
          </select>
          <select id="month" name="month">
            <option>Tháng</option>
          </select>
          <select id="year" name="year">
            <option>Năm</option>
          </select> <br />
          <div className="submit-form">
            <input type="submit" id="yourID" Value="Đăng Ký Ngay" />
          </div>
        </form>
      </div>
      <div className="support-messenger">
                <i className="far fa-comment"></i>
                <span>chat</span>
            </div>
    </div>
    

    )
}

export default RegisterForm
