const productReducer = (products = { allProducts: "" }, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return { ...products, allProducts: action.payload };
    default:
      return products;
  }
};

export default productReducer;
