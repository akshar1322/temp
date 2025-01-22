// components/cards/ProductCard.js
'use client'; // This makes the component a Client Component

import React from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation for routing

export default function ProductCard({ product }) {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div className="bg-gray-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-lg font-bold text-gray-900 mt-4">{product.price}</p>

      <div className="mt-4 text-sm text-gray-700">
        <p><strong>Weight:</strong> {product.specifications.weight}</p>
        <p><strong>Dimensions:</strong> {product.specifications.dimensions}</p>
        <p><strong>Color:</strong> {product.specifications.color}</p>
      </div>

      <button
        onClick={handleViewDetails}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none"
      >
        View Details
      </button>
    </div>
  );
}
