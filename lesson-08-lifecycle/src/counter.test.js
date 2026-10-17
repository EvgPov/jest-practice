import { createCounter } from "./counter.js";

describe("createCounter", () => {
  let counter;

  // arrange
  beforeEach(() => {
    counter = createCounter();
  })

  test("value is 1 after one increment", () => {
    // act
    counter.increment();

    // assert
    expect(counter.value).toBe(1);
  })

  test("value is 2 after two increments", () => {
    // act
    counter.increment();
    counter.increment();

    // assert
    expect(counter.value).toBe(2);
  })

  test("resets value to 0 after increments", () => {
    // arrange
    counter.increment();
    counter.increment();

    // act
    counter.reset();

    // assert
    expect(counter.value).toBe(0);
  })
})