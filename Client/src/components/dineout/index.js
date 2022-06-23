import React from 'react'
import Collection from '../common/collection'
import ExploreSection from '../common/exploresection/inxex'
import Filter from '../common/filter'
import dineoutRestaurants from '../../data/dineoutRestaurants'
import '../dineout/dineout.css'


const Dineout = ({activeName,activeTab, activeSearchTerm}) => {
  
  const restaurantList = dineoutRestaurants;
  
  const collectionList = [
    {
      id: "1",
      title: "Live Cricket Screening",
      cover: "https://b.zmtcdn.com/data/collections/e2ceb701e81a8113eab9627069f6f6bf_1649144881.jpg"
    },
    {
      id: "2",
      title: "Festive Special",
      cover: "https://b.zmtcdn.com/data/collections/15242b397d79d3498922b4779231c850_1555421190.jpg"
    },
    {
      id: "3",
      title: "Newly Opened",
      cover: "https://b.zmtcdn.com/data/collections/031c2dd47d839ff2bf98dbb66147ab4f_1648708613.jpg"
    },
    {
      id: "4",
      title: "Trending",
      cover: "https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040101.png"
    },
    {
      id: "5",
      title: "Best Of Delhi NCR",
      cover: "https://b.zmtcdn.com/data/collections/dc55234ebcab4867fa2eb65730c4a695_1646987030.jpg"
    },
    {
      id: "6",
      title: "High On Sugar",
      cover: "https://b.zmtcdn.com/data/collections/821a4a7a6a0f8c265f5bf804cf18dfa3_1631714127.jpg"
    },
    {
      id: "7",
      title: "Great Cafes",
      cover: "https://b.zmtcdn.com/data/collections/f29fa95355a78edb148d737d12bd9ef0_1646983582.jpg"
    },
    {
      id: "8",
      title: "Microbreweries",
      cover: "https://b.zmtcdn.com/data/collections/460a438bf1ccf7a0e032928f6fef0d75_1646984077.jpg"
    },
    
  ]
  
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
      title: 'Pro Offers'
    },
    {
      id: 4,
      title: 'Outdoor Sitting'
    },
    {
      id: 5,
      title: 'Serves Alchol'
    }
  ]
  return (
    <div>
      <div>
        <Collection list={collectionList}/>
      </div>
      <div className='max-width'>
            <Filter filterList = {deliveryFilter} />
      </div>
      <ExploreSection list={restaurantList} collectionName = 'Delivery restaurants in Delhi' CityName={activeName} activeTab={activeTab} activeSearchTerm={activeSearchTerm}/>
    </div>
  )
}

export default Dineout
