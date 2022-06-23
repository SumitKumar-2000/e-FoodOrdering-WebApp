import React  from 'react'
import '../filtermodalbox/filtermodalbox.css'
import cuisineList from '../../../../data/cuisine'

const sortbyList = [
    {
        id : 1,
        title : 'Popularity'
    },
    {
        id : 2,
        title : 'cost: Low to High'
    },
    {
        id : 3,
        title : 'cost: High to Low'
    },
]

const FilterModalBox = ({setFilteredItem}) => {
  
  const cuisines = cuisineList;  
    
  return (
    <div className='filterModal-box'>
        <div className='filter-sortby'>
            <h4 color="">Sort by</h4>
            {sortbyList.map(item => {
                return <div key={item.title} className='radio-box'>
                    <input className='cur-pointer' type="radio" name='sortby' value={item.title} onChange={e=>setFilteredItem(e.target.value)}/>
                    <label className='radio-label cur-pointer'>{item.title}</label>
                </div>
            })}
        </div>
        <div className='filter-cuisines'>
            <h4>Cuisine</h4>
            <div className='filter-cuisine'>
                {cuisines.map(cuisine => {
                    return <div className='check-box'>
                        <input type="checkbox" name='cuisine' value={cuisine.cuisineType}/>                
                        <label className='radio-label' htmlFor="">{cuisine.cuisineType}</label>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default FilterModalBox
