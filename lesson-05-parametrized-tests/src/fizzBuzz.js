// Задание 2 к Лекции 5. Спецификация — в README.md этой папки.
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz"
  if (n % 3 === 0) return "Fizz"
  if (n % 5 === 0) return "Buzz"
  return String(n)
}
