import {
  getCountryCode,
  getCountryDataList,
  getCountryData,
  getEmojiFlag,
} from "../src";

test("get country code with given country name", () => {
  const result = getCountryCode("pakistan");
  expect(result).toBe("PK");
});
