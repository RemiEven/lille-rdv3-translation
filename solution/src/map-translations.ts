import { getTranslation } from "./repositories/translation.js";
import type { Translation } from "./repositories/translation.js";

export type Attributes = { [k: string]: string };

export function mapAttributesToDescription(
  attributes: Attributes,
  translations: Array<Translation>,
): Array<string> {
  if (translations.length === 0) {
    return [];
  }

  return Object.entries(attributes).map(
    ([attributeKey, attributeValue], index) => {
      const translatedKey = translations.find(
        (t) => t.key === attributeKey.toUpperCase(),
      );
      const translatedValue = translations.find(
        (t) => t.key === attributeValue,
      );

      return !!translatedKey && !!translatedValue
        ? `${translatedKey.label}: ${translatedValue.label}`
        : "";
    },
  );
}
