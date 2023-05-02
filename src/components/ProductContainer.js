import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../Redux/productReducer/productAction";

const ProductContainer = () => {
  const dispatch = useDispatch();
  const { allProducts, error } = useSelector((state) => state.products);
  console.log(allProducts);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="body-container">
      <div className="product-main-container">
        <h2>Product List</h2>
        <div className="product-container">
          {allProducts &&
            allProducts.products.map((data) => (
              <div className="product-card" key={data?.id}>
                <h4>{data.title}</h4>
                <img className="product-card-image" src={data?.images[0]} />
                <p>{data?.description}</p>
                <button className="card-button">addtocart</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
