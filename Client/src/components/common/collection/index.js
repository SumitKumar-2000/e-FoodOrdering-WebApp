import React from 'react'
import Slider from 'react-slick/lib/slider'
import NextArrow from '../crausal/nextArrow';
import PrevArrow from '../crausal/prevArrow';
import '../collection/collection.css'

const settings = {
    // dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
};
    
const Collection = ({list}) => {
  return (
    <div>
        <div className='collection-wrapper'>
            <div className='max-width collections'>
                <div className='collection-title'>Collection</div>
                <Slider {...settings}>
                    {list.map(item=>(
                        <div key={item.title}>
                            <div className='collection-cover'>
                                <img src={item.cover} className='collection-img' alt={item.title}/>
                                <div className='gradient-bg'></div>
                                <div className='collection-card-title'>{item.title}</div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Collection
