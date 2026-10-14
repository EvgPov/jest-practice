import { getDiscount } from "./getDiscount.js";

test.each([
  { total: 500, expected: 0 },
  { total: 999, expected: 0 },
  { total: 1000, expected: 5 },
  { total: 1999, expected: 5 },
  { total: 2000, expected: 10 },
  { total: 4999, expected: 10 },
  { total: 5000, expected: 20 },
  { total: 7000, expected: 20 },
])("getDiscount($total) → $expected%", ({ total, expected }) => {
  expect(getDiscount(total)).toBe(expected)
})
