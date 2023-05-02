import { ADDTOCART } from "../helper";

export const addToCart = (data) => {
  return { type: ADDTOCART, payload: data };
};
