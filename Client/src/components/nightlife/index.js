import React from 'react'
import '../nightlife/nightlife.css'
import Filter from '../common/filter'
import Collection from '../common/collection'
import ExploreSection from '../common/exploresection/inxex'
import dineoutRestaurnat from '../../data/dineoutRestaurants'


const Nightlife = ({activeName,activeTab, activeSearchTerm}) => {
  
  const restaurantList = dineoutRestaurnat;
  const collectionList = [
      {
        id: "1",
        title: "Microbreweries",
        cover: "https://b.zmtcdn.com/data/pictures/9/18494129/b5d33dbda84c15f04e03a28b1a56bce5_featured_v2.jpg"
      },
      {
        id: "2",
        title: "Where's The Party?",
        cover: "https://b.zmtcdn.com/data/collections/15242b397d79d3498922b4779231c850_1555421190.jpg"
      },
      {
        id: "3",
        title: "Happy Hours",
        cover: "https://b.zmtcdn.com/data/collections/031c2dd47d839ff2bf98dbb66147ab4f_1648708613.jpg"
      },
      {
        id: "4",
        title: "Beer in a Bar",
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
  
  const nightLifeFilter = [
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
            <Filter filterList = {nightLifeFilter} />
      </div>
      <ExploreSection list={restaurantList} collectionName = 'Delivery restaurants in Delhi' CityName={activeName} activeTab={activeTab} activeSearchTerm={activeSearchTerm}/>
    </div>
  )
}

export default Nightlife
