import { divideAsync } from "./divideAsync.js";

// Задание 1: протестируйте асинхронную функцию через async/await и resolves/rejects.
// Не забудьте await перед expect(...).resolves / .rejects!
describe ("divideAsync", () => {
  test("resolves with the correct quotient", async() => {
    expect.assertions(1)
    await expect(divideAsync(10, 2)).resolves.toBe(5)
  })

  test("rejects with an error when dividing by zero", async() => {
    expect.assertions(1)
    await expect(divideAsync(4, 0)).rejects.toThrow("Division by zero")
  })
})
