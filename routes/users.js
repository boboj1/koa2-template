const Router = require('koa-router')
const router = new Router({ prefix: '/users' })
const UserCtr = require('../controller/user')
const { handlePassword } = require('../middleware/password')

router.post('/login', handlePassword, UserCtr.login)

module.exports = router
