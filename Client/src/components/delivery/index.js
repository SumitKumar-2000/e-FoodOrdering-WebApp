import React, { useState } from 'react'
import ExploreSection from '../common/exploresection/inxex'
import Filter from '../common/filter'
import DeliveryBrands from './deliverybrands'
import DeliveryCollections from './deliverycollections'
import deliveryRestaurants from '../../data/deliveryRestaurants'
import './delivery.css'

const Delivery = ({activeName,activeTab,activeSearchTerm}) => {
  

  const deliveryFilter = [
    
    {
      id: 1,
      title: 'Filters'
    },
    {
      id: 2,
      title: 'Rating'
    },
    {
      id: 3,
      title: 'Pure Veg'
    },
    {
      id: 4,
      title: 'Non-Veg'
    },
  ]
  const [filteredItem,setFilteredItem] = useState("");
  const restaurantList = deliveryRestaurants;
  console.log(filteredItem);

  return (
    <div>
      <div className='max-width'>
        <Filter filterList = {deliveryFilter} setFilteredItem={()=>setFilteredItem} />
      </div>
        <DeliveryCollections/>
        <DeliveryBrands/>
        <ExploreSection list={restaurantList} CityName={activeName} activeTab={activeTab} activeSearchTerm={activeSearchTerm} filteredItem={filteredItem}/>
    </div>
  )
}

export default Delivery
