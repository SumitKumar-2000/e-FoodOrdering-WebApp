import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addtocart } from "../../redux/actions/foodcart";
import "./meal.css"

const Meal = ({food}) => {

  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("Half");

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // cart
  const handleCart = () =>{
    const data = {
      foodName: food.name,
      foodPic: food.foodimg,
      foodPrice: food.prices[0][varient] * quantity,
      createdAt: new Date()
    };

    dispatch(addtocart(data))
  }

  return (
    <div className="m-5 shadow-lg p-3 mb-5 bg-white rounded mealContainer">
      <div onClick={handleShow} className="foodContainer">
        <p className="m-3" style={{ fontWeight: "bold" }}>
          {food.name}
        </p>
        <img
          src={food.foodimg}
          alt="food"
          className="img-fluid"
          style={{ height: "200px", width: "200px", borderRadius: "6px" }}
        />
      </div>
      <div className="quantity-container mt-3 md-1">
        <div className="w-100 m-1">
          <p style={{ marginBottom: "1rem", textAlign: "center"}}>Varient</p>
          <select
            className="w-100"
            value={varient}
            onChange={(event) => setVarient(event.target.value)}
          >
            {food.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p style={{ marginBottom: "1rem", textAlign:"center" }}>Quantity</p>
          <select
            className="w-100"
            value={quantity}
            onChange={(event) => {
              setQuantity(event.target.value);
            }}
          >
            {food.quantity.map((count) => {
              return <option value={count}>{count}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="cart-container">
        <div className="m-1">
          <p className="mt-2" style={{ fontWeight: "bold" }}>
            Price: {food.prices[0][varient] * quantity} Rs/-
          </p>
        </div>
        <div className="m-1">
          <button className="btn btn-danger" style={{ fontSize: "0.8rem" }} onClick={()=>handleCart()}>
            ADD To Cart
          </button>
        </div>
      </div>

      {/*Modal*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={food.foodimg}
            className="img-fluid"
            style={{ width: "29rem", height: "29rem", padding: "1rem" }}
            alt="food"
          />
          <h2 style={{ padding: "0rem 1rem" }}>{food.descriptionHead}</h2>
          <p style={{ padding: "1rem" }}>{food.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button
            className="btn btn-danger"
            style={{ fontSize: "0.8rem" }}
            onClick={handleClose}
          >
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Meal;