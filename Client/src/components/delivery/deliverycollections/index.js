import React from 'react'
import Slider from 'react-slick/lib/slider';
import NextArrow from '../../common/crausal/nextArrow'
import PrevArrow from '../../common/crausal/prevArrow';
import DeliveryCollectionItem from './deliveryCollectionItem';
import '../deliverycollections/deliveryCollections.css'

const deliverItems = [
    {
        id: 1,
        title: 'Pizza',
        cover: 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png'
    },
    {
        id: 2,
        title: 'Burger',
        cover: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png'
    },
    {
        id: 3,
        title: 'Chicken',
        cover: 'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png'
    },
    {
        id: 4,
        title: 'Roll',
        cover: 'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png'
    },
    {
        id: 5,
        title: 'Paratha',
        cover: 'https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png'
    },
    {
        id: 6,
        title: 'Biryani',
        cover: 'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png'
    },
    {
        id: 7,
        title: 'Fries',
        cover: 'https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png'
    },
    {
        id: 8,
        title: 'Momos',
        cover: 'https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png'
    },
    {
        id: 9,
        title: 'Shake',
        cover: 'https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png'
    },
    {
        id: 10,
        title: 'Home Style',
        cover: 'https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png'
    },
    {
        id: 11,
        title: 'Sandwich',
        cover: 'https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png'
    },
    {
        id: 12,
        title: 'Noodle',
        cover: 'https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png'
    },
]

const settings = {
    // dots: true,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
};

const DeliveryCollections = () => {
  
    
  return (
    <div className='delivery-collection'>
      <div className='max-width'>
        <div className='collection-title'>Inspiration for your first order</div>
        <Slider {...settings}>
            {deliverItems.map(items=>{
                return <div key={items.title} className='collection-slider'>
                    <DeliveryCollectionItem collectionItem={items} />
                </div>
            })}
        </Slider>
      </div>
    </div>
  )
}

export default DeliveryCollections
