export function notifyUser(mailer, user, text) {
  if (!user.email) throw new Error("User has no email")
  mailer.send(user.email, text)
  return true
}
