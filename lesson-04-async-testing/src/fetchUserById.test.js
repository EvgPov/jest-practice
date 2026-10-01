import { fetchUserById } from "./fetchUserById.js";

describe("fetchUserById", () => {

  // Успех через resolves
  test("resolves with the matching user when the id exists", async() => {
    expect.assertions(1)
    await expect(fetchUserById(1)).resolves.toMatchObject({ id: 1, name: "Leanne Graham" })
  })

  // Успех через .then()
  test("returns the matching user when the promise is returned via then", () => {
    expect.assertions(1)
    return fetchUserById(1).then((result) => {
      expect(result).toMatchObject({ id: 1, name: "Leanne Graham" })
    })
  })

  // Успех через await напрямую
  test("returns the matching user when awaited directly", async() => {
    const result = await fetchUserById(1)
    expect(result).toMatchObject({ id: 1, name: "Leanne Graham" })
  })

//------------------Error-------------

  // Ошибка через rejects
  test("rejects with an error when the id does not exist", async () => {
    expect.assertions(1)
    await expect(fetchUserById(999)).rejects.toThrow("User not found")
  })

  // Ошибка через try/catch
  test("throws an error when the id does not exist (try/catch)", async() => {
    expect.assertions(1)
    try {
      await fetchUserById(999)
    } catch (error) {
      expect(error.message).toBe("User not found")
    }
  })

  // Ошибка через .catch()
  test("throws an error when the id does not exist (catch)", () => {
    expect.assertions(1)
    return fetchUserById(999).catch((error) => {
      expect(error.message).toBe("User not found")
    })
  })
})

