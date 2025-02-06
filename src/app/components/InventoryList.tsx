import React from 'react';

const InventoryList: React.FC = () => {
  const inventory = [
    { id: 'P001', name: 'Laptop', stock: 20 },
    { id: 'P002', name: 'Smartphone', stock: 50 },
  ];

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">Inventory List</h2>
      <ul>
        {inventory.map(item => (
          <li key={item.id} className="border-b py-2">
            {item.name} - Stock: {item.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;