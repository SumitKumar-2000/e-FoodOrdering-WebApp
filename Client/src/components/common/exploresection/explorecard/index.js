import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionRestaurant } from '../../../../redux/actions/restaurant';
import '../explorecard/explorecard.css'

const ExploreCard = ({restaurant}) => {
    const name = restaurant?.info?.name ?? "";
    const locality = restaurant?.info?.locality?.name;
    const coverImg = restaurant?.info?.image?.url;
    const rating = restaurant?.info?.rating?.rating_text;
    const deliveryPrice = restaurant?.info?.cfo?.text;
    // const dineoutPrice = restaurant?.infor?.cft?.text;
    const cuisines = restaurant?.info?.cuisine?.map(item => item.name).slice(0,2);

    const dispatch = useDispatch()
    dispatch(actionRestaurant(restaurant));

    return (  
        <Link className='explore-card cur-pointer' to='/book' >
            <div className='explore-card-cover'>
                <img src={coverImg} alt={name} className='explore-card-img' />
            </div>
                <div className='res-row'>
                    <div className='res-name'>{name}</div>
                    <div className='res-rating absolute-center'>
                        {rating && <div>{rating}</div>} <i className="bi bi-star-fill absolute-center rating-star"></i>
                    </div>
                </div>
                    <div className='res-row'>
                        {cuisines &&    
                            <div className='res-cuisine'>
                                {cuisines.map((item)=>{
                                    return( 
                                    <span key={item} className='res-cuisine-tag'>
                                        {item} 
                                    </span>
                                    );
                                })}
                            </div>}
                        { deliveryPrice && <div className='res-price'>{deliveryPrice}</div> }
                    </div>
                    <div className='res-locality'>
                        {locality}
                    </div>
        </Link>
    )
}

export default ExploreCard
