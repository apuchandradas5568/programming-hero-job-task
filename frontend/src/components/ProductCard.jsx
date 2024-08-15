import React from 'react';
import StarRating from './StarRating';

const ProductCard = ({ product }) => {


    console.log(product);

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <img
        className="w-full h-48 object-cover"
        src={product?.image}
        alt={product?.name}
      />
      <div className="p-4">
        <h3 className="text-gray-900 font-bold text-xl mb-2">{product?.name}</h3>
        <p className="text-gray-700 text-base mb-2">{product?.description}</p>
        <p className="text-gray-900 font-semibold text-lg mb-2">${product?.price}</p>
        <p className="text-gray-600 text-sm mb-2">Category: {product?.category}</p>
        <div className="flex items-center mb-2">
        <StarRating rating={product?.rating} />
          <span className="text-gray-600 text-sm ml-2">({product?.rating})</span>
        </div>
        <p className="text-gray-600 text-sm">
          Created on: {new Date(product?.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
