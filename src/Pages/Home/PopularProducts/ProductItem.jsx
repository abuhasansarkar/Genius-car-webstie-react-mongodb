import React from "react";
import { FaStar, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import './ProductItem.css';

const ProductItem = ({product}) => {

  return (

      <div className="pdt-card overflow-hidden card bg-base-100 shadow-xl relative">
         <Link><figure className="px-5 py-7 bg-slate-200">
         
          <img
            src={product.img}
            alt="Shoes"
            className="rounded-xl h-40"
          />
         
        </figure>
        </Link>
        <div className="card-body items-center text-center">
          <div className="rating text-red-600">
               <FaStar></FaStar>
               <FaStar></FaStar>
               <FaStar></FaStar>
               <FaStar></FaStar>
               <FaStar></FaStar>
          </div>
          <Link><h2 className="card-title text-2xl">{product.title}</h2></Link>
          <h4 className="card-title text-xl text-red-600">Price: ${product.price}</h4>
          
        </div>
        <Link><button className="cart-btn btn bg-white text-red-600 text-xl absolute right-5 top-5"><FaCartPlus></FaCartPlus></button></Link>
      </div>
  );
};

export default ProductItem;
