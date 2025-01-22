'use client';

import React from 'react';
import { useEffect } from 'react';
import { products } from '@/data/productdetail';
import ProductCard from '@/components/cards/ProductCard';
import SideNav from '@/components/section/SideNav';

useEffect(() => {
  document.title = 'Admin |Dashboard';
}, []);
export default function Dashboard() {
  return (
    <div className="flex">
      <SideNav /> {/* Sidebar on the left */}
      <div className="flex-1 bg-black min-h-screen p-8 ml-6"> {/* Content area */}
        <h2 className="text-3xl font-semibold text-center mb-6">Product Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
