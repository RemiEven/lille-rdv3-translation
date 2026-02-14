import { describe, it, expect } from "vitest";
import { mapAttributesToDescription } from "./map-translations.js";
import type { Attributes } from "./map-translations.js";
import type { Translation } from "./repositories/translation.js";

describe("mapAttributesToDescription", () => {
  it("returns an empty array if there are no attributes", () => {
    const attributes: Attributes = {};
    const translations: Array<Translation> = [{ label: "", lang: "", key: "" }];

    const result = mapAttributesToDescription(attributes, translations);

    expect(result).toEqual([]);
  });

  it("returns an empty array if there are no translations", () => {
    const attributes: Attributes = {
      color: "red",
    };
    const translations: Array<Translation> = [];

    const result = mapAttributesToDescription(attributes, translations);

    expect(result).toEqual([]);
  });

  it("translates two attributes when available but the last one", () => {
    const attributes: Attributes = {
      color: "RED",
      size: "MEDIUM",
      port: "HDMI",
    };

    const translations: Array<Translation> = [
      { key: "COLOR", lang: "", label: "couleur" },
      { key: "RED", lang: "", label: "rouge" },
      { key: "SIZE", lang: "", label: "taille" },
      { key: "MEDIUM", lang: "", label: "moyen" },
    ];

    const result = mapAttributesToDescription(attributes, translations);

    expect(result).toEqual(["couleur: rouge", "taille: moyen", ""]);
  });
});
