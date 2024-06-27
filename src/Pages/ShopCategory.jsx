import React from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Components/Context/ShopContext';
import { useContext } from 'react';

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
    </div>
  )
}

export default ShopCategory
