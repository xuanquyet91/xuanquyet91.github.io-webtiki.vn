import React from 'react'
import { useState,useEffect } from 'react'

function ContainerProductRightSub() {

    const [products, setProducts] = useState([])

    useEffect(() => {       
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => setProducts(products))
        .catch(error => console.error(error))

        return () => {
            fetch('https://fakestoreapi.com/products')
        }
    }, [])

    return (
        <div 
        
        className="productListTikiSub-item">
         {products.map(product => {
            return (
                
                <div 
                onClick={event => {
                    const storageProductTitle = product.title
                    const storageProductPrice = product.price
                    const storageProductImg =  product.image
                    const storageProductDiscount = Math.round(product.rating.rate)
                    // console.log(storageProduct);
                    localStorage.setItem('productTitle',storageProductTitle)
                    localStorage.setItem('productPrice',storageProductPrice)
                    localStorage.setItem('productImg',storageProductImg)
                    localStorage.setItem('productDisc',storageProductDiscount)
                    // event.preventDefault()
                }}
                key={product.id}
                className="productSub-item">
                <div className="productSub-picture">     
                    <a href="http://localhost:3000/Product-item" class="link-item">
                    <img src={product.image} alt="" />
                    <img src="https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png" alt="" />          
                    </a>
                </div>
                <div className="productSub-content">
                    <div className="productSub-titleItem">
                    <h5>{product.title}</h5>
                    </div>
                    <div className="productSub-info">
                    <div className="productSub-rates">
                        <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                        <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                        <ion-icon name="star-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star sharp" />
                        <ion-icon name="star-half-sharp" style={{color: '#fdd836'}} role="img" className="md hydrated" aria-label="star half sharp" />
                        <ion-icon name="star-outline" style={{color: '#5e64637c'}} role="img" className="md hydrated" aria-label="star outline" />
                    </div>
                    <div className="productSub-count">
                        <p>Đã Bán {product.rating.count}</p>
                    </div>
                    </div>
                </div>
                <div className="productSub-bottom">
                    <span className="productSub-total">{product.price} $ </span>
                    <span className="productSub-discount">- {Math.round(product.rating.rate)}% </span>
                </div>
                </div>

            )
        })}
    
        </div>
    )
}

export default ContainerProductRightSub
