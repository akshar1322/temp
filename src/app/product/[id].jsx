// pages/product/[id].jsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { products } from '@/data/productdetail'; // Ensure this path is correct

const ProductDetail = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const { id } = router.query; // Get product ID from the URL

  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Fetch product details when the id changes
  useEffect(() => {
    if (id) {
      const foundProduct = products.find((prod) => prod.id === id);
      setProduct(foundProduct);
    }
    setIsClient(true);
  }, [id]);

  if (!isClient) {
    return null; // Optionally show a loading spinner
  }

  if (!product) {
    return <div className="text-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    setCart([...cart, product]);
    alert('Product added to cart');
  };

  const handleAddToWishlist = () => {
    setWishlist([...wishlist, product]);
    alert('Product added to wishlist');
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">{product.name}</h2>
        <div className="flex justify-center items-center space-x-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-1/2 h-auto object-cover rounded-lg shadow-lg"
          />
          <div className="w-1/2">
            <h3 className="text-xl font-semibold mb-4">Product Details</h3>
            <p className="mb-4">{product.description}</p>
            <ul className="mb-4">
              <li><strong>Price:</strong> ${product.price}</li>
              <li><strong>Category:</strong> {product.category}</li>
            </ul>
            <div className="space-x-4">
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Add to Cart
              </button>
              <button
                onClick={handleAddToWishlist}
                className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
