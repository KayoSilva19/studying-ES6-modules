export const toDay = Date.now()

export const double = number => number * 2

function messageDefault(userName) {
  let message = `Olá ${userName}`
  return message
}

export default messageDefault