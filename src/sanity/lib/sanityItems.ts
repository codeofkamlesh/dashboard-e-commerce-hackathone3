import { createClient, groq } from 'next-sanity';

const client = createClient({
  projectId: '9nvdcuhb', // Replace with your actual Sanity project ID
  dataset: 'production',
  apiVersion: '2024-12-28',
  useCdn: false,
});

export const fetchInventory = async () => {
  const query = groq`*[_type == "products"]{
    _id,
    title,
    inventory,
    price,
    description,
    image
  }`;

  const products = await client.fetch(query);
  return products;
};

// export async function fetchOrders() {
//   return await client.fetch(`*[_type == "orders"]`);
// }

// export async function fetchShipments() {
//   return await client.fetch(`*[_type == "shipment"]`);
// }
