import { getRate } from "./currency.js";

export function convertToRub(amount, code) {
  return amount * getRate(code)
}
