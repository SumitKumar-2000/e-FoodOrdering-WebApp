const initialState = {
  cart: []
};

export const myCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [...state.cart,action.payload]
      }
    }

    case "DELETE_FROM_CART": {
      const date = action.payload.createdAt;
      const updatedList = state.expenseList.filter(
        (item) => item.createdAt !== date
      );
      return {
        ...state,
        cart: updatedList
      };
    }

    default: return state;
  }
};
