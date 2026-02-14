import axios from "axios";

const client = axios.create({
  baseURL: 'http://localhost:1081'
});

export const getProduct = async (id: string): Promise<Product> => {
  const response = await client.get<Product>(`/products/${id}`);

  return response.data;
};

type Product = {
  id: string;
  name: string;
  attributes?: { [key: string]: string };
};
