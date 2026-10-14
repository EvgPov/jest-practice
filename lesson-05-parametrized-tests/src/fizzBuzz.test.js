import { fizzBuzz } from "./fizzBuzz.js";

// Задание 2: покройте функцию через test.each .

describe("fizzBuzz: tagged template literal", () => {
  test.each`
    n     | expected
    ${3}  | ${"Fizz"}
    ${5}  | ${"Buzz"}
    ${15} | ${"FizzBuzz"}
    ${1} | ${"1"}
  `("fizzBuzz($n) → $expected", ({n, expected}) => {
    expect(fizzBuzz(n)).toBe(expected)
  })
})

describe("fizzBuzz: array of objects", () => {
  test.each([
    { n: 24, expected: "Fizz" },
    { n: 55, expected: "Buzz" },
    { n: 75, expected: "FizzBuzz" },
    { n: 7, expected: "7" },
  ])("fizzBuzz($n) -> $expected", ({n, expected}) => {
    expect(fizzBuzz(n)).toBe(expected)
  })
})