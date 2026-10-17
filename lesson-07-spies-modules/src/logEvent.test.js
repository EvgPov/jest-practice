import { logEvent } from "./logEvent.js";

describe("logEvent", () => {
  test("logs the event name to console", () => {
    // arrange
    const spy = jest.spyOn(console, "log").mockImplementation(() => {})
      
    // act
    const result = logEvent("click")

    // assert
    expect(spy).toHaveBeenCalledWith("Event: click")
    expect(result).toBe(true)

    spy.mockRestore()
  })
})