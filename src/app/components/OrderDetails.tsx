import React from 'react';

interface OrderDetailsProps {
  orderId: string;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ orderId }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">Order Details</h2>
      <p>Order ID: {orderId}</p>
      <p>Customer: John Doe</p>
      <p>Status: Shipped</p>
      <p>Total: $100</p>
    </div>
  );
};

export default OrderDetails;
