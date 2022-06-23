import React from 'react'
import '../filter/filter.css'
import FilterItem from './filterItem'

const Filter = ({filterList, setFilteredItem}) => {
  return (
    <div className='filter-container'>
        {filterList && filterList.map(item => {
            return (
              <FilterItem
                key={item.id}
                filter={item}
                setFilteredItem={()=>setFilteredItem}
              />
            );
        })}
    </div>
  )
}

export default Filter