const UserService = require('../service/user')
const { response, responseLogin } = require('../utils/response')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/globalVar')

class UserController {
  /**
   * 登录
   * @param {*} ctx 
   */
  async login (ctx) {
    const data = ctx.request.body
    const res = await UserService.find(data)
    const token = jwt.sign(res[0], JWT_SECRET)
    ctx.body = responseLogin(res, 0, 'ok', token)
  }
}

module.exports = new UserController()