import { saveAll } from "./saveAll.js";

describe("saveAll", () => {
  // arrange
  const save = jest.fn()
  const storage = { save }

  beforeEach(() => {  
    save.mockClear()
  })

  test("calls save once for one item", () => {
    // act
    saveAll(storage, ["orange"])

    // assert
    expect(save).toHaveBeenCalledTimes(1);
  })
  
  test("calls save twice for two items", () => {
    // act
    saveAll(storage, ["orange", "banana"])

    // assert
    expect(save).toHaveBeenCalledTimes(2);
  })
})

