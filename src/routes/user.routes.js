const userRoutes = require('express').Router()


const {getAllUsers, postNewUser, loginUser, logoutUser} = require('../controller/user.controller')


userRoutes.get('/', getAllUsers)

userRoutes.post('/', postNewUser)

userRoutes.post('/login', loginUser)

userRoutes.post('/logut',logoutUser)

module.exports = userRoutes