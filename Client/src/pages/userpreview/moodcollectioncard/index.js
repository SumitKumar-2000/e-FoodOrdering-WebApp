import React from 'react'
import '../moodcollectioncard/moodcollectioncard.css'
import { Link } from 'react-router-dom';

const MoodCollectionCard = ({item}) => {
  // setProgress(10);
  // setProgress(100);

  const userInfo = localStorage.getItem('userInfo')

  return (
    <Link to={userInfo ? '/home' : '/'} style={{textDecoration: 'none', color: 'gray'}}>
    <div className='card cur-pointer'>
        <img src={item.coverImg} alt={item.title} className='collection-cover-img'/>
        <div className='collection-title-box '>            
            {item.title}    
        </div>
    </div>
    </Link>
  )
}

export default MoodCollectionCard