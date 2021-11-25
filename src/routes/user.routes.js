const userRoutes = require('express').Router()

const {getAllUsers, postNewUser, loginUser, logoutUser} = require('../controller/user.controller')
const { isAuth } = require('../shared/middleware/auth.middleware')


userRoutes.get('/',[isAuth], getAllUsers)

userRoutes.post('/register', postNewUser)

userRoutes.post('/login',[isAuth], loginUser)

userRoutes.post('/logut',[isAuth], logoutUser)

module.exports = userRoutes