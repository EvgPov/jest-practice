// Задание 3 к Лекции 5. Спецификация — в README.md этой папки.
export function getDiscount(total) {
  if (total < 1000) return 0
  if (total >= 1000 && total < 2000) return 5
  if (total >= 2000 && total < 5000) return 10
  if (total >= 5000) return 20
}
