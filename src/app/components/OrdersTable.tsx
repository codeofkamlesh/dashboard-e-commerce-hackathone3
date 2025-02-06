import React from 'react';

const OrdersTable: React.FC = () => {
  const orders = [
    { id: '001', customer: 'John Doe', status: 'Shipped', total: '$100' },
    { id: '002', customer: 'Jane Smith', status: 'Processing', total: '$200' },
  ];

  return (
    <table className="w-full bg-white shadow-md rounded-lg">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-3 text-left">Order ID</th>
          <th className="p-3 text-left">Customer</th>
          <th className="p-3 text-left">Status</th>
          <th className="p-3 text-left">Total</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id} className="border-t">
            <td className="p-3">{order.id}</td>
            <td className="p-3">{order.customer}</td>
            <td className="p-3">{order.status}</td>
            <td className="p-3">{order.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrdersTable;