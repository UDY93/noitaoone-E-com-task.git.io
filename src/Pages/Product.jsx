import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import {useParams} from 'react-router-dom'
import { Breadcums } from '../Components/Breadcums/Breadcums';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DespricationBox } from '../Components/DespricationBox/DespricationBox';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const {all_product} =useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId));

  return (
    <div>
       <Breadcums   product={product}/>
       <ProductDisplay product={product}/>
       <DespricationBox/>
       <RelatedProducts/>

    </div>
  )
}
