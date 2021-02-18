export const ADD_TO_CART = "ADD_TO_CARD";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product: product,
  };
};
