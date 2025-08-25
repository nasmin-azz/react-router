import React from "react";
import { Link } from "react-router";
import ProductDetail from "./ProductDetail";

const HomePage = () => {
  const products = [
    {
      id: 1,
      name: "Classic Jacket",
      price: "50$",
      img: "/src/images/jacket.jpg",
    },
    {
      id: 2,
      name: "Stylish Shoes",
      price: "70$",
      img: "/src/images/shoes.jpg",
    },
    { id: 3, name: "Trendy Bag", price: "30$", img: "/src/images/bag.jpg" },
  ];
  return (
    <div>
      <h1>Our New MiniShop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {products.map((item) => (
          <div>
            <img className="h-48" src={item.img} alt="" />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <Link to={`/ProductDetail/${item.id}`}>View Detail</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
