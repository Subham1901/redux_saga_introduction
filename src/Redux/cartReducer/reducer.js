import { ADDTOCART, productDetails } from "../helper";
const cartReducer = (cart = [], action) => {
  switch (action.type) {
    case ADDTOCART:
      console.log(action);
      return [...cart, action.payload];
      break;
    default:
      return cart;
      break;
  }
};

export default cartReducer;
