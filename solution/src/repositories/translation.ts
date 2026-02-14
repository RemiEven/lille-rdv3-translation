import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:1080",
  headers: {
    "x-api-key": "T1234",
  },
});

export const getTranslation = async (
  lang: string,
  key: string,
): Promise<Translation> => {
  const response = await client.get<Translation>("/translations", {
    params: { lang, key },
  });

  return response.data;
};

export const getTranslations = async (
  lang: string,
  keys: Array<string>,
): Promise<Array<Translation>> => {
  return Promise.all(keys.map((key) => getTranslation(lang, key)));
};

export type Translation = {
  key: string;
  lang: string;
  label: string;
};
