export const validateUserData = value =>
  typeof value === 'object' &&
  typeof value.userId === 'number' &&
  ['admin', 'customer'].includes(value.userRole)

export const isValidEmail = value => /^\w{2,}@\w{2,}\.\w{2,}$/.test(value)

export const isValidPassword = value => /^[A-Za-z0-9]+$/.test(value)

export const isLetters = value => /^[A-Za-z]+$/.test(value.trim())

export const isNumber = value => /^[0-9]+$/.test(value.trim())

export const isValidAddress = value =>
  /^[0-9]+ [A-Za-z 0-9]+$/.test(value.trim())

export const validateLogin = user => {
  if (!isValidEmail(user.email) || user.email.length > 40) {
    return { isValid: false, error: { msg: 'Invalid Email', prop: 'email' } }
  }
  if (user.password.length < 6) {
    return {
      isValid: false,
      error: {
        msg: 'Password is 6 characters minimum',
        prop: 'password'
      }
    }
  }
  if (!isValidPassword(user.password)) {
    return {
      isValid: false,
      error: {
        msg: 'Password should be alphanumeric only',
        prop: 'password'
      }
    }
  }
  return { isValid: true }
}

export const validateSignup = user => {
  if (!isLetters(user.firstName)) {
    return {
      isValid: false,
      error: { msg: 'Invalid first name', prop: 'firstName' }
    }
  } else if (user.firstName.length > 40) {
    return {
      isValid: false,
      error: { msg: 'first name is too long', prop: 'firstName' }
    }
  } else if (!isLetters(user.lastName)) {
    return {
      isValid: false,
      error: { msg: 'Invalid last name', prop: 'lastName' }
    }
  } else if (user.lastName.length > 40) {
    return {
      isValid: false,
      error: { msg: 'last name is too long', prop: 'lastName' }
    }
  } else if (!isValidEmail(user.email) || user.email.length > 40) {
    return { isValid: false, error: { msg: 'Invalid Email', prop: 'email' } }
  } else if (user.password.length < 6) {
    return {
      isValid: false,
      error: {
        msg: 'Password is 6 characters minimum',
        prop: 'password'
      }
    }
  } else if (!isValidPassword(user.password)) {
    return {
      isValid: false,
      error: {
        msg: 'Password should be alphanumeric only',
        prop: 'password'
      }
    }
  }
  return { isValid: true }
}

export const validateRecipientDetails = recipient => {
  if (!isLetters(recipient.recipientName.replace(/\s+/, ''))) {
    return { isValid: false, error: 'Invalid name' }
  } else if (recipient.recipientName.length > 80) {
    return { isValid: false, error: 'Name is 80 characters maximum' }
  } else if (!isValidAddress(recipient.recipientAddress)) {
    return { isValid: false, error: 'Invalid address' }
  } else if (recipient.recipientAddress.length > 120) {
    return { isValid: false, error: 'Address in 120 characters maximum' }
  } else if (!isNumber(recipient.recipientPhone)) {
    return { isValid: false, error: 'Invalid Phone number' }
  }
  return { isValid: true }
}
