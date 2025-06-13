import React from "react";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Mouse",
      category: "Electronics",
      price: 799.99,
      inStock: true,
      createdAt: "2024-06-01T10:00:00Z",
    },
    {
      id: 2,
      name: "Bluetooth Headphones",
      category: "Electronics",
      price: 1499.0,
      inStock: false,
      createdAt: "2024-06-02T12:30:00Z",
    },
    {
      id: 3,
      name: "Office Chair",
      category: "Furniture",
      price: 3299.5,
      inStock: true,
      createdAt: "2024-05-28T09:15:00Z",
    },
    {
      id: 4,
      name: "Gaming Keyboard",
      category: "Electronics",
      price: 1999.0,
      inStock: true,
      createdAt: "2024-05-25T11:20:00Z",
    },
    {
      id: 5,
      name: "Water Bottle",
      category: "Kitchen",
      price: 299.0,
      inStock: true,
      createdAt: "2024-05-18T08:45:00Z",
    },
    {
      id: 6,
      name: "Smart Watch",
      category: "Wearables",
      price: 4999.0,
      inStock: false,
      createdAt: "2024-04-30T13:00:00Z",
    },
    {
      id: 7,
      name: "LED Monitor",
      category: "Electronics",
      price: 8499.99,
      inStock: true,
      createdAt: "2024-04-20T10:40:00Z",
    },
    {
      id: 8,
      name: "Desk Lamp",
      category: "Furniture",
      price: 899.0,
      inStock: true,
      createdAt: "2024-04-10T17:30:00Z",
    },
    {
      id: 9,
      name: "Coffee Mug",
      category: "Kitchen",
      price: 199.0,
      inStock: false,
      createdAt: "2024-03-29T14:05:00Z",
    },
    {
      id: 10,
      name: "Laptop Stand",
      category: "Accessories",
      price: 1599.0,
      inStock: true,
      createdAt: "2024-03-15T16:55:00Z",
    },
  ];

  return <div>
    {
        products.map( ({id,name,category,price,inStock,createdAt})=>(
            <ul key={Math.random()}>
                <li>Id : {id}</li>
                <li > Name : {name}</li>
                <li> Price : {price}</li>
                <li> Category : {category}</li>
                <li> Price : {price}</li>
                <li> Stock : {inStock?"Shock is Available" : "Shock is not Available"}</li>
                <li> Created : {createdAt}</li>
            </ul>
        )
    )
    }
    </div>;
};

export default ProductList;
