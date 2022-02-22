const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/globalVar')
const { responseError } = require('../utils/response')

const authToken = async (ctx, next) => {
  const { authorization } = ctx.request.header
  if (!authorization) {
    return ctx.body = responseError('请携带token', 10127)
  }
  const token = authorization.replace('Bearer ', '')
  try {
    jwt.verify(token, JWT_SECRET)
  } catch (error) {
    switch (error.name) {
      case 'TokenExpiredError':
        return ctx.body = responseError('token已失效', 10127)
      case 'JsonWebTokenError':
        return ctx.body = responseError('无效的token', 10127)
    }
  }
  await next()
}

module.exports = {
  authToken
}