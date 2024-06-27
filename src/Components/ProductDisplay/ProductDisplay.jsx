import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdsiplay-right-description">
        Elevate your style game with our range of comfortable and versatile t-shirts. Crafted from high-quality 
        100% cotton, these t-shirts are designed to make you stand out on any occasion. 
         This regular fit t-shirt features a solid pattern and is available in a half sleeve design, making it
          suitable for all seasons. The round neck adds a touch of classic style while providing maximum comfort.
          Whether you're layering up or wearing it alone, this t-shirt is perfect for every day wear.We understand 
          the importance of everyday comfort .Don't compromise on quality or price when it comes to your wardrobe
             staples. Our t-shirts offer great quality at an unbeatable price point. 
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-size">
                <div>XS</div>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
            </div>
        </div>
        <button>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Tshirt, C</p>
      </div>
    </div>
  )
}

export default ProductDisplay
