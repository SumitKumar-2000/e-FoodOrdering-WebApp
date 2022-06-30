import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import HeadScreen from '../../components/headScreen'
import './mycart.css'

const MyCart = () => {

  const {cart} = useSelector(state => state.myCart)   
  
  const handleBuy = (foodPrice,e) =>{

    e.preventDefault()

    var options = {
      key: "rzp_test_7l7TPbssHgTjvX",
      key_secret: "I2MLkCZl0oPlS6hT1Ic4fTOT",
      amount: foodPrice * 100,
      currency: "INR",
      name: "FOODORDERING",
      description: "testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "sumit",
        email: "sumitkumarracer@gmail.com",
        contact: "9818620925",
      },
      notes: {
        address: "razorpay corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var pay = new window.Razorpay(options)
    pay.open(); 
  }


  return (
    <HeadScreen title="MyCart">
      <div>
        {cart.length ? (
          cart.map((food) => {
            return (
              <div className="selectedFoodContainer">
                <div>
                  <img src={food.foodPic} alt="foodpic" className="foodImg" />
                </div>
                <div className="foodName">{food.foodName}</div>
                <div className="priceTag">
                  <div className="foodName">{food.foodPrice} Rs/-</div>
                  <div className="buy-bin">
                    <Button variant="danger" className="buyButton" size="sm" onClick={(e)=>handleBuy(food.foodPrice,e)}>
                      Buy
                    </Button>
                    <img
                      src={require("./bin.png")}
                      alt="deleteIcon"
                      className="deleteIcon"
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h3 style={{ color: "#696969" }}>Your Cart is Empty...</h3>
        )}
      </div>
    </HeadScreen>
  );
}

export default MyCart
