
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 bg-purple-950 text-white h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <nav>
        <ul className="space-y-2">
          {/* <li>
            <Link
              href="/dashboard"
              className="block py-2 px-4 hover:bg-pink-700 rounded transition duration-200"
            >
              Dashboard
            </Link>
          </li> */}
          <li>
            <Link
              href="/dashboard/admin"
              className="block py-2 px-4 hover:bg-pink-700 rounded transition duration-200"
            >
              Admin
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/inventoryManager"
              className="block py-2 px-4 hover:bg-pink-700 rounded transition duration-200"
            >
              Inventory
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/orders"
              className="block py-2 px-4 hover:bg-pink-700 rounded transition duration-200"
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/shipmentManager"
              className="block py-2 px-4 hover:bg-pink-700 rounded transition duration-200"
            >
              Shipment
            </Link>
          </li>
          {/* <li>
            <Link
              href="/dashboard/damaged"
              className="block py-2 px-4 hover:bg-pink-700 rounded transition duration-200"
            >
              Damaged Products
            </Link>
          </li> */}

          {/* <li>
            <Link
              href="/dashboard/support"
              className="block py-2 px-4 hover:bg-gray-700 rounded transition duration-200"
            >
              Support
            </Link>
          </li> */}
          <li>
            <Link
              href="/login"
              className="block py-2 px-4 hover:bg-pink-700 rounded transition duration-200"
            >
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;