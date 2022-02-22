const { User } = require('../model/user')

class UserService {
  async create (data) {
    const res = await User.create(data)
    return res
  }
  async find (data) {
    const res = await User.find(data)
    return res
  }
}

module.exports = new UserService()