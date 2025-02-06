import { urlFor } from "@/sanity/lib/image";
import { fetchInventory } from "@/sanity/lib/sanityItems";
import Image from "next/image";
interface Product {
  _id: string;
  title: string;
  inventory: number;
  image: string;
}

const InventoryPage = async () => {
  const inventory = await fetchInventory();

  console.log("Fetched Inventory Data:", inventory); // Debugging Log

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <div className="flex justify-between font-extrabold font-sarif p-4 underline underline-offset-4 text-[20px] font-sans">
      <h2>Product Name</h2>
      <h2>Available Quantity</h2>
      <h2>Image</h2>
      </div>
      <ul>
        {inventory.length > 0 ? (
          inventory.map((product: Product) => (
            <li key={product._id}>
              <div className="flex w-[full] justify-between items-center mb-2 p-2 bg-stone-100">
              <p className="w-[40%]">{product.title}</p>
              <span className="w-[20%] text-center ">{product.inventory} </span>
              <span className="w-[40%] flex justify-end">{product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  width={100}
                  height={100}
                  alt={product.title}
                />
              )}
              </span>
              </div>
            </li>
          ))
        ) : (
          <p>No inventory items found.</p>
        )}
      </ul>
    </div>
  );
};

export default InventoryPage;
