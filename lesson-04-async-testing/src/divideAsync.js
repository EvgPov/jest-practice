// Задание 1 к Лекции 4. Спецификация — в README.md этой папки.
export async function divideAsync(a, b) {
  await new Promise((resolve) => setTimeout(resolve, 50));

  if ( b === 0) throw new Error("Division by zero");
  return a / b 
}