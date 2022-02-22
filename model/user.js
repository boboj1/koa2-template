const mongoose = require('mongoose')
const { getNowTime } = require('../utils/dateTime')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      default: getNowTime()
    },
    updatedAt: {
      type: String,
      default: getNowTime()
    }
  },
  {
    versionKey: false
  }
)

const User = mongoose.model('Users', userSchema, 'users')

module.exports = {
  User
}