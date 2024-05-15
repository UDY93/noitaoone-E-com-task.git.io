import React from 'react'
import './NewCollection.css'
import new_collection from '../Assets/new_collections'
import { Item}  from '../Item/Item'

export const NewCollection = () => {
  return (
    <div className='newcollection'>
        <h1>New Collection</h1>
        <hr />
        <div className="new-collection">
            {new_collection.map((item,i)=>{
                return <Item key ={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price ={item.old_price}/>
            })}

        </div>
    </div>
  )
}