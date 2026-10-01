import { fetchAveragePostsPerUser } from "./fetchAveragePostsPerUser.js";

describe ("fetchAveragePostsPerUser", () => {
  test("resolves with the average posts count for a matching company", async() => {
    expect.assertions(1)
    await expect(fetchAveragePostsPerUser("Romaguera")).resolves.toBe(10)
  })

  test("resolves with the average posts count for a matching company when awaited directly", async() => {
    const result = await fetchAveragePostsPerUser("Romaguera")
    expect(result).toBe(10)
  })

  test("resolves with the average posts count for a matching company when the promise is returned via then", () => {
    expect.assertions(1)
    return fetchAveragePostsPerUser("Romaguera").then((result) => {
      expect(result).toBe(10)
    })
  })

//------------------Error-------------

  test("rejects with an error when dividing by zero", async() => {
    expect.assertions(1)
    await expect(fetchAveragePostsPerUser("Non-existent")).rejects.toThrow("Division by zero: no matching users found")
  })

  test("throws an error when dividing by zero (try/catch with await)", async() => {
    expect.assertions(1)
    try {
      await fetchAveragePostsPerUser("Non-existent")
    } catch (error) {  
      expect(error.message).toBe("Division by zero: no matching users found")
    }  
  })

  test("throws an error when dividing by zero (catch)", () => {
    expect.assertions(1)
    return fetchAveragePostsPerUser("Non-existent").catch((error) => {
      expect(error.message).toBe("Division by zero: no matching users found")
    })
  })  
})
