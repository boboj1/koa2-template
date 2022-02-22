const md5password = require('../utils/md5')

/**
 * 对密码加密
 * @param {*} ctx 
 * @param {*} next 
 */
const handlePassword = async (ctx,next) =>{
  let { password }  = ctx.request.body
  ctx.request.body.password = md5password(password)
  await next()
}

module.exports = {
  handlePassword
}
