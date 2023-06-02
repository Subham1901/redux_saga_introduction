import { ADDTOCART, productDetails } from "../helper";
const cartReducer = (cart = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADDTOCART:
      console.log(cart);
      return { ...cart, cartItems: [...cart.cartItems, action.payload] };
      break;
    default:
      return cart;
      break;
  }
};

export default cartReducer;
