import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Welcome to ArGo Store & Delivery!</h1>
      <div className="space-x-4">
        <Link to="/grocery" className="underline text-blue-700">Shop Groceries</Link>
        <Link to="/cart" className="underline text-blue-700">View Cart</Link>
      </div>
      <p className="mt-8">Explore categories above. Everything is clickable.</p>
    </div>
  );
}
