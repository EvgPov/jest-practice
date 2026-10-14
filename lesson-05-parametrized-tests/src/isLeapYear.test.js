import { isLeapYear } from "./isLeapYear.js";

// Задание 1: покройте функцию через test.each в форме МАССИВА МАССИВОВ.

test.each([[2000], [2016], [2020], [2024]])("check leap year %d", (year) => {
  expect(isLeapYear(year)).toBe(true)
})

test.each([[1900], [2021], [2023], [2100]])("check non-leap year %d", (year) => {
  expect(isLeapYear(year)).toBe(false)
})