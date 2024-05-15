import React, { useContext } from 'react'
import './CartItems.css'
import {ShopContext} from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeToCart}  = useContext(ShopContext)
  return (
    <div className='cartitem'>
        <div className="cart-itrm-main">
            <p>Products</p>
            <p>Titles</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
       {all_product.map((e)=>{

     if(cartItems[e.id]>0)
     {
        return  <div>
        <div className="cart-item-formate cart-itrm-main">
            <img src={e.image} alt=""  className='cart-icon-product-icon'/>
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cart-icon-quantity'>{cartItems[e.id]}</button>
            <p>${e.new_price * cartItems[e.id]}</p>
            <img src={remove_icon} className='cart-remove-icon' onClick={()=>{removeToCart(e.id)}} alt="" />
        </div>
        <hr />
        
    </div>
     }
     return null;
       })}
       <div className="cart-item-dowm">
        <div className="cart-item-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cart-item-total-item">
                    <p>SubTotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-item-total-item">
                    <p>Shipping Fees</p>
                    <p>Free</p>
                </div>
                <hr />
              <div className="cart-item-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECK OUT</button>
        </div>
        <div className="cart-promosection">
            <p>If you have promo code,enter here</p>
            <div className="cart-item-box">
              <input type="text" name="" id="" placeholder='promocode' />
              <button>Submit</button>
            </div>
        </div>
       </div>
    </div>
  )
}
