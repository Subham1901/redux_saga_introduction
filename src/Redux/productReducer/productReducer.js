const productReducer = (products = { allProducts: "", error: "" }, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return { ...products, allProducts: action.payload };
    case "SET_PRODUCT_RECV_ERROR":
      return { ...products, error: action.error };
    default:
      return products;
  }
};

export default productReducer;
