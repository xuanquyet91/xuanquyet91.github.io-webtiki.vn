import React from 'react'
import { useState,useEffect,memo } from 'react';
import { Link } from 'react-router-dom'
 


function FlashDeal() {
    const [day, setDay] = useState(31)
    const [hour, setHour] = useState(12)
    const [minute, setMinute] = useState(60)
    const [second, setSecond] = useState(60)

    useEffect(()=>{

    
        window.addEventListener('DOMContentLoaded', (event) => {
        
        // Set the date we're counting down to
        var countDownDate = new Date("Dec 15, 2021 08:00:00").getTime();
        

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            // document.getElementById("day").innerHTML = days + " d";
            // document.getElementById("hour").innerHTML = hours + " h";
            // document.getElementById("min").innerHTML = minutes + " m";
            // document.getElementById("sec").innerHTML = seconds + " s";
            setDay(days)
            setHour(hours)
            setMinute(minutes)
            setSecond(seconds)
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                // document.getElementById("hour").innerHTML = "EXPIRED";
            }
        }, 1000);
    })
    // return () => window.removeEventListener('DOMContentLoaded')

},[]);


    return (
        <div className="flashDeal">
            <Link to="/Product" class="link-item">
            <div className="flashDeal__header">
                <div className="flashDeal__toDay">
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg" alt="" />
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg" alt="" />
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg" alt="" />
                </div>
                <div className="countDownTime">
                <span id="day" >{day}d </span> &nbsp;:
                <span id="hour">{hour}h </span>  &nbsp;:
                <span id="min">{minute}m </span>  &nbsp;:
                <span id="sec">{second}s </span> 
                </div>
            </div>
            <div className="flashDeal__body">
                <div className="product-Deals">
                <div className="picture">
                    <img src="https://salt.tikicdn.com/cache/200x200/media/catalog/producttmp/b2/25/ec/771bb303406607480af6fd9c71325b13.jpg.webp" alt="" />
                    <img src="https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png" alt="" />
                </div>
                <div className="price-deals">
                    <span className="price-total">31.490.000 đ </span>
                    <span className="price-discount">-7% </span>
                </div>
                <div className="deals__total">
                    <div className="deals__progress" />
                    <span className="open-sale">Vừa mở bán</span>
                </div>
                </div>
                <div className="product-Deals">
                <div className="picture">
                    <img src="https://salt.tikicdn.com/cache/200x200/ts/product/f6/1a/cd/a8d60c5417b72af92db5fcddd7860bcc.jpg.webp" alt="" />
                    <img src="https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png" alt="" />
                </div>
                <div className="price-deals">
                    <span className="price-total">4.560.000 đ </span>
                    <span className="price-discount">-2% </span>
                </div>
                <div className="deals__total">
                    <div className="deals__progress" />
                    <span className="open-sale">Vừa mở bán</span>
                </div>
                </div>
                <div className="product-Deals">
                <div className="picture">
                    <img src="https://salt.tikicdn.com/cache/200x200/media/catalog/producttmp/0a/39/ae/f91fd8121b888e0c287dfbaff763c38d.jpg.webp" alt="" />
                    <img src="https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png" alt="" />
                </div>
                <div className="price-deals">
                    <span className="price-total">2.590.000 đ </span>
                    <span className="price-discount">-49% </span>
                </div>
                <div className="deals__total">
                    <div className="deals__progress" />
                    <span className="open-sale">Vừa mở bán</span>
                </div>
                </div>
                <div className="product-Deals">
                <div className="picture">
                    <img src="https://salt.tikicdn.com/cache/200x200/ts/product/74/db/c1/2a8b487f09237ad77f6b2440b360ffea.png.webp" alt="" />
                    <img src="https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png" alt="" />
                </div>
                <div className="price-deals">
                    <span className="price-total">13.830.000 đ </span>
                    <span className="price-discount">-39% </span>
                </div>
                <div className="deals__total">
                    <div className="deals__progress" />
                    <span className="open-sale">Vừa mở bán</span>
                </div>
                </div>
                <div className="product-Deals">
                <div className="picture">
                    <img src="https://salt.tikicdn.com/cache/200x200/ts/product/4f/37/87/64077700f0e9eeb6930b5640461e658b.jpg.webp" alt="" />
                    <img src="https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png" alt="" />
                </div>
                <div className="price-deals">
                    <span className="price-total">2.160.000 đ </span>
                    <span className="price-discount">-59% </span>
                </div>
                <div className="deals__total">
                    <div className="deals__progress" />
                    <span className="open-sale">Vừa mở bán</span>
                </div>
                </div>
                <div className="product-Deals">
                <div className="picture">
                    <img src="https://salt.tikicdn.com/cache/200x200/ts/product/7d/eb/7a/09c7b1e158293a5814d2f6d1aa38c112.jpg.webp" alt="" />
                    <img src="https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png" alt="" />
                </div>
                <div className="price-deals">
                    <span className="price-total">560.000 đ </span>
                    <span className="price-discount">-34% </span>
                </div>
                <div className="deals__total">
                    <div className="deals__progress" />
                    <span className="open-sale">Vừa mở bán</span>
                </div>
                </div>
            </div>
        </Link>
        </div>
    )
}

export default memo(FlashDeal)
