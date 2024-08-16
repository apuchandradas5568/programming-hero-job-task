import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    const { data } = await axios.get(`https://backend-for-deploy-eryg.onrender.com/products/${id}`);
    setProduct(data);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Ratings: {product.ratings}</p>
      <p>Date Added: {new Date(product.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default ProductDetails;
