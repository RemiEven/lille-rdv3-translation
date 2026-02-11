import axios from "axios";

export const getTranslation = async (
  lang: string,
  key: string,
): Promise<string> => {
  const url = `http://localhost:1080/translations?lang=${lang}&key=${key}`;
  return (
    await axios.get(url, {
      headers: {
        "x-api-key": "T1234",
      },
    })
  ).data?.label;
};

export const getTranslations = async (
  lang: string,
  keys: string[],
): Promise<{ [key: string]: string }> => {
  const translations = await Promise.all(
    keys.map((key) =>
      getTranslation(lang, key).then((label) => ({ key, label })),
    ),
  );
  return translations.reduce(
    (acc, { key, label }) => {
      acc[key] = label;
      return acc;
    },
    {} as { [key: string]: string },
  );
};
