import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
    const {product} = props;

    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="product-left">
           <div className="product-img-list">
           <img src={product.image} alt="" />
           <img src={product.image} alt="" />
           <img src={product.image} alt="" />
           <img src={product.image} alt="" />

           </div>
           <div className="product-img-list">
            <img  className=" product-img"src={product.image} alt="" />
           </div>
        </div>
        <div className="product-right">
            <h1>{product.name}</h1>
            <div className="product-display-str">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisply-prize">
                <div className="product-display-oldprize">${product.old_price}</div>
                <div className="product-display-newprize">${product.new_price}</div>
            </div>
            <div className="product-right-desprication">
                lightweight,and extra soft it has change the weither condition if enviroment is hot that time you fell cold etc
            </div>
            <div className="productdisplay-rightsize">
                <h1>Select Size</h1>

                <div className="productdisplay-rightsizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>X</div>
                    <div>XL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='product-display-rightcategory'><span>Category : </span> Women, T-Shirt,Crop_top</p>
            <p className='product-display-rightcategory'><span>Tags : </span>Modern,Latest</p>
        </div>
    </div>
  )
}
