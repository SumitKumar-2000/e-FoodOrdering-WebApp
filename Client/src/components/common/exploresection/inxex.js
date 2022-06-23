import React from 'react'
import ExploreCard from './explorecard'
import '../exploresection/exploresection.css'

const ExploreSection = ({list,CityName,activeTab,activeSearchTerm, filteredItem}) => {
  console.log(filteredItem);
  return (
    <div className='max-width explore-section'>
      <div className='collection-title'> {activeTab} Restaurants in {CityName} </div>
      <div className='explore-grid'>
          { list.filter((restaurant) => activeSearchTerm !== "" ? (restaurant.info.name.toLowerCase().includes(activeSearchTerm.toLowerCase()) && restaurant.city_name === CityName) : (restaurant.city_name === CityName)).map(restaurant => {
                return  <ExploreCard key={restaurant.info.resId} restaurant={restaurant}/>
            })}
      </div>   
    </div>
  ) 
}

export default ExploreSection
