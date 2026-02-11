import {
  describe,
  expect,
  test,
  beforeAll,
  afterEach,
  afterAll,
} from "@jest/globals";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw"; // Import these helpers
import { getTranslations } from "./translation.js";

// 1. Define your handlers
const handlers = [
  http.get("http://localhost:1080/translations", ({ request }) => {
    const url = new URL(request.url);
    const lang = url.searchParams.get("lang");
    const key = url.searchParams.get("key");

    // 2. Mock logic for specific query params
    if (lang === "fr" && key === "SHIRT") {
      return HttpResponse.json({
        "key": "SHIRT",
        "lang": "fr",
        "label": "shirt"
      });
    } else if (lang === "fr" && key === "BOOTS") {
      return HttpResponse.json({
        "key": "BOOTS",
        "lang": "fr",
        "label": "bottes"
      });
    }

    // Default response or 404
    return new HttpResponse(null, { status: 404 });
  }),
];

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("zefqgty", () => {
  test("", async () => {
    const result = await getTranslations("fr", ["SHIRT", "BOOTS"]);

    expect(result).toEqual({"SHIRT": "shirt", "BOOTS": "bottes"});
  });
});
