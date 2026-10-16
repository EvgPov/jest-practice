import { getUserName } from "./getUserName.js";

describe("getUserName", () => {
  test("returns the name of the found user", () => {
    // arrange
    const user = {
      id: 1,
      name: "Tomas",
    }
    const repo = { findById:jest.fn().mockReturnValue(user) }

    // act
    const name = getUserName(repo, 1)

    // assert
    expect(name).toBe("Tomas")
    expect(repo.findById).toHaveBeenCalledWith(1)
  })

  test("returns Anonymous when the user is not found", () => {
    // arrange
    const repo = { findById: jest.fn().mockReturnValue(undefined) }

    // act
    const name = getUserName(repo, 999)

    // assert
    expect(name).toBe("Anonymous")
  })

  test("returns Anonymous when the user has no name", () => {
    // arrange
    const repo = { findById: jest.fn().mockReturnValue({}) }

    // act
    const name = getUserName(repo, 2)

    // assert
    expect(name).toBe("Anonymous")
  })
})
