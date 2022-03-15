import { Router } from 'express'
import UserController from '../controllers/UserController'

const router = Router()

router.get('/getAllUsers', UserController.getAllUsers)

export default router