export const addtocart = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};

export const deletefromcart = (data) => {
  return {
    type: "DELETE_FROM_CART",
    payload: data,
  };
};

