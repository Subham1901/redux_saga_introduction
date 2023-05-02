import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Redux/cartReducer/action";
import { fetchProduct } from "./Redux/productReducer/productAction";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  const products = useSelector((state) => state.products.allProducts.products);
  return (
    <div>
      {products &&
        products.map((data) => (
          <div key={data.id}>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <h4>{data.price}</h4>
            <button onClick={() => dispatch(addToCart(data))}>ADD</button>
          </div>
        ))}
    </div>
  );
};

export default App;
