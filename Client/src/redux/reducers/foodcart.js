const initialCartList = () =>{
  const list = localStorage.getItem("cartItem")
  let cartList = []
  if(list){
    cartList = JSON.parse(list);
  }

  return cartList;
}

const initialState = {
  cart: initialCartList()
};

export const myCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      localStorage.setItem(
        "cartItem",
        JSON.stringify([...state.cart, action.payload])
      );
      return {
        ...state,
        cart: [...state.cart,action.payload]
      }
    }

    case "DELETE_FROM_CART": {
      const date = action.payload.createdAt;
      const updatedList = state.cart.filter(
        (item) => item.createdAt !== date
      );
      localStorage.setItem("cartItem", JSON.stringify(updatedList));
      return {
        ...state,
        cart: updatedList
      };
    }

    default: return state;
  }
};
