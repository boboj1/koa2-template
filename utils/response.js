module.exports = {
  response: (data = {}, code = 0, message = 'ok') => {
    return {
      code,
      data,
      message
    }
  },
  responseLogin: (data = {}, code = 0, message = 'ok', token = '') => {
    return {
      code,
      data,
      message,
      token
    }
  },
  responseError: (error = '服务器异常', code = 500) => {
    return {
      code,
      error
    }
  }
}