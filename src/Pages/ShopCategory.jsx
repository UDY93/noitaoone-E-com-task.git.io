
import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext} from '../Context/ShopContext';
import drop_down from '../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Item/Item'

export const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);

    return (
        <div className='shopcategory'>
            <img className='shop-category-banner' src={props.banner} alt="" />
            <div className="shopCategory-index">
                <p>
                    <span>
                        Showing 1-12
                    </span> Out of 36 Products
                </p>
                <div className="shop-categery-sort">
                    Sort by <img src={drop_down} alt="" />
                </div>
            </div>
            <div className="shop-category-product">
                {all_product.map((item,i)=>{
                    if (props.category===item.category) {
                        return <Item key ={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price ={item.old_price}/>
                        
                    }
                    else{
                        return null;
                    }

                })}
            </div>
            <div className="shop-category-loadmore">
                Explore More
            </div>
        </div>
    );
};

