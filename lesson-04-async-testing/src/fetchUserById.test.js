import { fetchUserById } from "./fetchUserById.js";

// Задание 2: протестируйте успех (resolves.toEqual) и отклонение (rejects.toThrow).
// Для страховки от забытого await можно добавить expect.assertions(1).

describe("fetchUserById", () => {
  test("resolves with the matching user when the id exists", async() => {
    expect.assertions(1)
    await expect(fetchUserById(1)).resolves.toEqual({id: 1, name: "Аня"})
  })

  test("rejects with an error when the id does not exist", async () => {
    expect.assertions(1)
    await expect(fetchUserById(999)).rejects.toThrow("User not found")
  })
})

