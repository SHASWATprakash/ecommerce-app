"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get<Product[]>("https://your-backend.vercel.app/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
