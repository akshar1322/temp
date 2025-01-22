'use client';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, message } from 'antd';
import { products } from '@/data/productdetail'; // Assuming the products data is here

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from localStorage
  useEffect(() => {
    document.title = 'ProdctCard';
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  // Handle remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    message.success('Item removed from cart');
  };

  return (
    <div className="bg-black text-white  min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Your Cart</h2>
        {cartItems.length === 0 ? (
          <div className="text-center">Your cart is empty.</div>
        ) : (
          <Row gutter={16}>
            {cartItems.map((item) => (
              <Col span={8} key={item.id}>
                <Card
                  hoverable
                  cover={<img alt={item.name} src={item.image} />}
                  actions={[
                    <Button onClick={() => removeFromCart(item.id)} type="link">
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

export default CartPage;
