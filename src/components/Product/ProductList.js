import React from "react";
import Product from "./Product";
import classes from "./ProductList.module.css";
const ProductList = ({ food }) => {
  return (
    <div className={classes.productlist}>
      {food.map((product) => (
        <Product
          id={product.id}
          key={product.id}
          title={product.title}
          price={product.price}
          photo={product.photo}
          type={product.type}
        />
      ))}
    </div>
  );
};

export default ProductList;
