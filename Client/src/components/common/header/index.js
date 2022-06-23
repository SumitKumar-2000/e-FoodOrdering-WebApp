import React from 'react'
import '../header/header.css'
import { Link } from 'react-router-dom'

const Header = ({locationList, setActiveName, activeName, setActiveSearchTerm}) => {

  return (
    <div className='max-width header'>
      <Link className='header-Logo' to="/">e!</Link>
      
      <div className='header-right'>
        <div className='header-location-search-container'>
            <div className="location-icon-name">
              <i className="bi bi-geo-alt-fill absolute-center location-icon cur-pointer"></i>
              <select className='location-select' onChange={event => setActiveName(event.target.value)} >
                {locationList.map (item => {
                  return <option key={item.id} value={item.name}>{item.name}</option>
                })}
              </select>
              
            </div>

            <div className='search-input-container'>
              <i className="bi bi-search cur-pointer"></i>
              <input type="text" onChange={e=>setActiveSearchTerm(e.target.value)} className='location-input' placeholder= {`Search Restaurant in ${activeName}`}/> 
            </div>
        </div>

        <div className='register'>
          <div>
                Log In
          </div>
          <div>
                Cart
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header
