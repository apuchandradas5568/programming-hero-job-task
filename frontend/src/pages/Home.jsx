import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const fetchProducts = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/products?page=${page}&limit=10`
    );
    setProducts(data.products);
    setTotalPages(data.totalPages);
  };

  return (
    <div className="container">
      <div className="product-list my-8">
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
