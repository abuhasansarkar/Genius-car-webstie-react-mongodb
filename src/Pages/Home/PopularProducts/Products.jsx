import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section className="py-10 text-center">
      <div className="sec-title text-center ">
        <h3 className=" text-2xl font-bold mb-5 text-red-600">
          Popular Products
        </h3>
        <h2 className="text-5xl mb-5 font-bold">Browse Our Products</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
     <div className="grid grid-cols-3 gap-7 my-7">
        {
          products.map(product => <ProductItem product={product} key={product._id}></ProductItem>)
        }
     </div>
     <button>
        <Link className="btn btn-outline text-red-600 hover:bg-red-600">
          More Products
        </Link>
      </button>
    </section>
  );
};

export default Products;
