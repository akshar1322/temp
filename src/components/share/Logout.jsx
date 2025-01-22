import React from 'react';
import { useRouter } from 'next/navigation'; 

export default function Logout() {
  const router = useRouter();

  const handleLogout = () => {

    router.push('/login');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Logout</h2>
        <button
          onClick={handleLogout}
          className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
