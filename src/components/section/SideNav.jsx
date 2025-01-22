// components/SideNav.js
'use client'; // Mark this component as client-side to use hooks

import React from 'react';
import { useRouter } from 'next/navigation'; // Using next/navigation for routing

const SideNav = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Logic to log out (you can clear the user session, tokens, etc.)
    // Redirect to home or login page
    router.push('/login');
  };

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Admin Panel</h2>
      <ul className="space-y-4">
        <li>
          <button
            onClick={() => router.push('/dashboard')}
            className="w-full text-left p-2 hover:bg-gray-700 rounded-md"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="w-full text-left p-2 hover:bg-gray-700 rounded-md"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
