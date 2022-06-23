import React from 'react'
import '../deliveryBrandItem/deliveryBrandItem.css'

const DeliveryBrandItem = ({collectionItem}) => {
  return (
    <div className='collection-item'>
        <div className='collection-item-cover'>
            <img src={collectionItem.cover} alt='cover img' className='collection-item-img'/>
        </div>
        <div className='collection-item-title'>{collectionItem.title}</div>
    </div>
  )
}

export default DeliveryBrandItem