// src/components/ProductFilters.js
import React, { useState } from "react";

const ProductFilters = ({ onFilterChange }) => {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sort, setSort] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onFilterChange({
      search: e.target.value,
      brand,
      category,
      priceRange,
      sort,
    });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === "brand") setBrand(value);
    if (name === "category") setCategory(value);
    if (name === "priceRange") setPriceRange(value);
    if (name === "sort") setSort(value);

    onFilterChange({
      search,
      brand,
      category,
      priceRange,
      sort: name === "sort" ? value : sort,
    });
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search by product name"
          className="border p-2 rounded mb-4 w-full"
        />
      </div>
      <div className="p-4 grid md:grid-cols-2 gap-4">
        <>
          <div className="mb-4">
            <label className="block mb-2">Brand:</label>
            <input
              type="text"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              placeholder="Brand Name"
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Category:</label>
            <input
              type="text"
              name="category"
              value={category}
              onChange={handleFilterChange}
              placeholder="Category Name"
              className="border p-2 rounded w-full"
            />
          </div>
        </>

        <>
          <div className="mb-4">
            <label className="block mb-2">Price Range:</label>
            <input
              type="text"
              name="priceRange"
              value={priceRange}
              onChange={handleFilterChange}
              placeholder="MinPrice-MaxPrice"
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Sort By:</label>
            <select
              name="sort"
              value={sort}
              onChange={handleFilterChange}
              className="border p-2 rounded w-full"
            >
              <option value="">Select</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="dateAsc">Date Added: Oldest First</option>
              <option value="dateDesc">Date Added: Newest First</option>
            </select>
          </div>
        </>
      </div>
    </>
  );
};

export default ProductFilters;
