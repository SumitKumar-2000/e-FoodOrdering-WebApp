import React from 'react'
import HeadScreen from '../../components/headScreen';
import Meal from '../../components/meal/meal';
import fooditems from '../../data/FoodItemdata';
import '../../components/meal/meal.css'
import cartImg from '../Booking&Ordering/shopping-cart.png'
import { Link } from 'react-router-dom';

const BookRestaurant = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body rounded">
        <div className="navleft">e!</div>
        <div className="navright">
          <Link className="navitem1" to="/home" >Home</Link>
          <Link className="navitem2" to="/MyCart">
            <img
              src={cartImg}
              alt="shoppingcart"
              style={{width: "34px", height:"34px"}}
            />
          </Link>
        </div>
      </nav>
      <HeadScreen title="Select food of your choice">
        <div className="container">
          <div className="row">
            {fooditems.map((food) => {
              return (
                <div className="col-md-4">
                  <div>
                    <Meal key={food.id} food={food} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </HeadScreen>
    </div>
  );
}

export default BookRestaurant