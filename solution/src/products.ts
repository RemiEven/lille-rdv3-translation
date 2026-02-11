import axios from "axios";

type product = {
  id: string;
  name: string;
  attributes?: { [key: string]: string };
};

export const getProduct = async (id: string): Promise<product> => {
  const url = `http://localhost:1081/products/${id}`;
  return (await axios.get(url)).data;
};
