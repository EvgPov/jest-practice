import { convertToRub } from "./convert.js";
import { getRate } from "./currency.js";

jest.mock("./currency.js")

describe("convertToRub", () => {
  test("converts the amount at the exchange rate from the module", () => {
    // arrange
    getRate.mockReturnValue(90)

    // act
    const amountRub = convertToRub(2, "USD")

    // assert
    expect(amountRub).toBe(180)
    expect(getRate).toHaveBeenCalledWith("USD")
  })

  test("rethrows the error when getRate fails", () => {
    // arrange
    getRate.mockImplementation(() => { throw new Error("no connection") })

    // act + assert
    expect(() => convertToRub(2, "USD")).toThrow("no connection")
  })
})
