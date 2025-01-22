'use client';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, message } from 'antd';
import { products } from '@/data/productdetail'; // Assuming the products data is here

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Fetch wishlist items from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistItems(storedWishlist);
  }, []);

  // Handle remove item from wishlist
  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    message.success('Item removed from wishlist');
  };

  return (
    <div className="bg-black text-white  min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Your Wishlist</h2>
        {wishlistItems.length === 0 ? (
          <div className="text-center">Your wishlist is empty.</div>
        ) : (
          <Row gutter={16}>
            {wishlistItems.map((item) => (
              <Col span={8} key={item.id}>
                <Card
                  hoverable
                  cover={<img alt={item.name} src={item.image} />}
                  actions={[
                    <Button onClick={() => removeFromWishlist(item.id)} type="link">
                      Remove
                    </Button>,
                  ]}
                >
                  <Card.Meta title={item.name} description={`Price: $${item.price}`} />
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
