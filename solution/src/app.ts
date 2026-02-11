import express from "express";
import { getTranslations } from "./translation.js";
import { getProduct } from "./products.js";

const app = express();

app.use(express.json());

// Routes
app.use("/products/:productId", async (req, res) => {
  const { productId } = req.params;
  const language = req.query.language || "en";
  const product = await getProduct(productId as string);

  const attributes = product.attributes ?? {};
  const keys = [
    product.name,
    ...Object.values(attributes),
    ...Object.keys(attributes).map((key) => key.toUpperCase()),
  ];
  const translations = await getTranslations(language as string, keys);

  const translatedProduct = {
    id: productId,
    name: translations[product.name],
    description: Object.keys(attributes).map(
      (attribute) =>
        `${translations[attribute.toUpperCase()]}: ${translations[attributes[attribute] as string]}`,
    ),
  };

  res.json(translatedProduct);
});

export default app;
