import React, { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/productSlice";
import { STATUS } from "../store/productSlice";

const Products = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const { data: products, status } = useSelector((store) => store.product);
  console.log(products);

  useEffect(() => {
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
    dispatch(fetchProduct());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if(status === STATUS.LOADING){
  return (
    <div>
      <h2 style={{ fontFamily: "cursive", textAlign: "center" }}>
        Please wait
      </h2>
      <img
        style={{width: "40%",marginLeft:'30%' }}
        src="https://www.bing.com/th/id/OGC.26ef8bb418031b9bb4f44e1aeea71186?pid=1.7&rurl=https%3a%2f%2fwww.icegif.com%2fwp-content%2fuploads%2floading-icegif-1.gif&ehk=2Acslneog3bqjvPC44LDJtLzNjNxDqIk3NXCrSRZM%2fA%3d"
        alt="loading"
      />
    </div>
  );
  }

  if(status === STATUS.ERROR){
    return (
      <div>
        <h2 style={{ fontFamily: "cursive", textAlign: "center" }}>
          Sorry there is some error
        </h2>
        <img
          style={{width: "40%",marginLeft:'30%' }}
          src="https://www.bing.com/th/id/OGC.487e04b9526f33190daf126c7b2e04ee?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f1120320%2fscreenshots%2f3898259%2ferror.gif&ehk=yw71yCDYdd4SeTRNINOiLcfiun1BgBRXDTehQCRdaAk%3d"
          alt="loading"
        />
      </div>
    );
    }

  return (
    <div className="productsWrapper">
      {products?.map((product) => (
        <div className="card" key={product.id}>
          <img className="cardImg" src={product.image} alt="card" />
          <h4>Title : {product.title}</h4>
          <h4>Price($) : {product.price}</h4>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
