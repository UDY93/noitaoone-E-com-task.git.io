import React from 'react'
import './Offers.css'
import excuslive_img from '../Assets/exclusive_image.png'
export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
       <h1>Excuslive</h1>
       <h1>Offers For You</h1>
       <p>Only On Best Seller Products</p>
       <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={excuslive_img} alt="" />

        </div>
    </div>
  )
}
