const productReducer = (
  products = { allProducts: "", error: "", loading: null },
  action
) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return { ...products, allProducts: action.payload };
    case "SET_PRODUCT_RECV_ERROR":
      return { ...products, error: action.error };
    case "LOADING_STATE_TRUE":
      return { ...products, loading: true };
    case "LOADING_STATE_FALSE":
      return { ...products, loading: false };
    default:
      return products;
  }
};

export default productReducer;
