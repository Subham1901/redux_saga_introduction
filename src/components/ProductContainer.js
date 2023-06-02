import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../Redux/productReducer/productAction";
import { addToCart } from "../Redux/cartReducer/action";

const ProductContainer = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { allProducts, error, loading } = useSelector(
    (state) => state.products
  );
  console.log(cartItems);
  const fetchProducts = () => {
    dispatch(fetchProduct());
  };
  useEffect(() => {
    fetchProducts();
  }, [dispatch]);

  if (error) {
    return <h1>{error}</h1>;
  }
  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="body-container">
      <div className="product-main-container">
        <h2>Product List</h2>
        <div className="product product-container">
          {allProducts &&
            allProducts.products.map((data) => (
              <div className="product-card" key={data?.id}>
                <h4>{data.title}</h4>
                <img className="product-card-image" src={data?.images[0]} />
                <p>{data?.description}</p>
                <button
                  onClick={() => dispatch(addToCart(data))}
                  className="card-button"
                >
                  addtocart
                </button>
              </div>
            ))}
        </div>
        <div className="product product-cart">
          <h1>Your Cart</h1>
          {cartItems &&
            cartItems.map((data) => (
              <div className="product-card" key={data?.id}>
                <h4>{data.title}</h4>
                <img className="product-card-image" src={data?.images[0]} />
                <p>{data?.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
