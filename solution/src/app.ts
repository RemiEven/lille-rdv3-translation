import express from "express";
import { getTranslations } from "./repositories/translation.js";
import { getProduct } from "./repositories/products.js";
import { mapAttributesToDescription } from "./map-translations.js";

const app = express();

app.use(express.json());

app.use("/products/:productId", async (req, res) => {
  const { productId } = req.params;
  const language = req.query.language || "en";
  const product = await getProduct(productId as string);

  const attributes = product.attributes ?? {};
  const keys = [
    product.name,
    ...Object.entries(attributes).flatMap(([key, value]) => [
      key.toUpperCase(),
      value,
    ]),
  ];
  const translations = await getTranslations(language as string, keys);

  const translatedProduct = {
    id: productId,
    name: translations.find((t) => t.key === product.name.toUpperCase())?.label ?? "",
    description: mapAttributesToDescription(attributes, translations),
  };

  res.json(translatedProduct);
});

export default app;
