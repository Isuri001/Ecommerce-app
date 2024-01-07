import express from 'express'
import {registerController , loginController } from '../controllers/authController.js'

//route object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', registerController)

//LOGIN || POST
router.post('/login', loginController)

export default router