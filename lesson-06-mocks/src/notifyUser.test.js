import { notifyUser } from "./notifyUser.js";

describe("notifyUser", () => {
  test("calls mailer.send once with user email and text", () => {
    // arrange
    const send = jest.fn()
    const mailer = { send: send }
    const user = {
      id: 1,
      name: "John",
      email: "john@mail.com",
    }
    const text = "Your order has been shipped"

    // act
    notifyUser(mailer, user, text)

    // assert
    expect(send).toHaveBeenCalledTimes(1)
    expect(send).toHaveBeenCalledWith("john@mail.com", text)
  })

  test("throws an error and does not call mailer.send when user has no email", () => {
    // arrange
    const send = jest.fn()
    const mailer = { send: send }
    const user = {
      id: 1,
      name: "John",
    }
    const text = "Your order has been shipped"

    // act + assert
    expect(() => notifyUser(mailer, user, text)).toThrow("User has no email")
    expect(send).not.toHaveBeenCalled()
  })
})
