import React from "react";
import { Link, useParams } from "react-router";

const ProductDetail = () => {
  let { id } = useParams();  // اینجا مثلا میشه "5"
  console.log(id);

  const products = [
    {
      id: 1,
      name: "Classic Jacket📌",
      description: "A stylish classic jacket.",
      price: "50$",
      img: "/src/images/jacket.jpg",
    },
    {
      id: 2,
      name: "Stylish Shoes📌",
      description: "Comfortable and trendy shoes.",
      price: "70$",
      img: "/src/images/shoes.jpg",
    },
    {
      id: 3,
      name: "Trendy Bag📌",
      description: "A trendy bag to carry everything you need.",
      price: "30$",
      img: "/src/images/bag.jpg",
    },
  ];

  let product=products.find((item) => {
    return item.id == id;
  });


  return (
    <div>
      <img className="h-48" src={product.img} alt="" />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <Link to="/">Back to HomePage</Link>
    </div>
  );
};

export default ProductDetail;
