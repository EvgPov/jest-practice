export function createCounter() {
  let count = 0

  return {
    increment() {
      count += 1;
      return count;
    },
    reset() {
      count = 0;
      return count;
    },
    get value() {
      return count;
    }
  }
}
