import React from 'react'
import Slider from 'react-slick/lib/slider';
import NextArrow from '../../common/crausal/nextArrow'
import PrevArrow from '../../common/crausal/prevArrow';
import DeliveryBrandItem from './deliveryBrandItem';
import '../deliverybrands/deliveryBrands.css'

const deliverBrandItems = [
    {
        id: 1,
        title: 'Subway',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990846.png?output-format=webp'
    },
    {
        id: 2,
        title: 'Burger King',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp'
    },
    {
        id: 3,
        title: "Haldiram's",
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp'
    },
    {
        id: 4,
        title: 'SFG',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/3b4407ed2d5e8cf0fe73cc8dd9a4f5cd_1571829741.png?output-format=webp'
    },
    {
        id: 5,
        title: 'KFC',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp'
    },
    {
        id: 6,
        title: 'Pizza Hut',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png?output-format=webp'
    },
    {
        id: 7,
        title: "Kwality Wall's",
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/e12f7587d0a5f589af54c88352ff8bf3_1628324690.png?output-format=webp'
    },
    {
        id: 8,
        title: 'Burger Singh',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/a175a6938688350fb3da3018da6293db_1625244343.png'
    },
    {
        id: 9,
        title: "Giani's",
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/7646da8be63a93ff0e4a3d1662ed0215_1570258129.png'
    },
    {
        id: 10,
        title: 'Fassos',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/c737c601e879eda8ef8e50af4009c67c_1624021239.png'
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

const DeliveryBrands = () => {

  return (
    <div className='deliveryBrand-collection'>
      <div className='max-width'>
        <div className='collection-title'>Top brands for you</div>
        <Slider {...settings}>
            {deliverBrandItems.map(items=>{
                return <div key={items.id} className='collection-slider'>
                    <DeliveryBrandItem collectionItem={items}/>
                </div>
            })}
        </Slider>
      </div>
    </div>
  )
}

export default DeliveryBrands
