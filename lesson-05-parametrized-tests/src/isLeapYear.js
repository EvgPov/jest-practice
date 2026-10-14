// Задание 1 к Лекции 5. Спецификация — в README.md этой папки.
export function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}
