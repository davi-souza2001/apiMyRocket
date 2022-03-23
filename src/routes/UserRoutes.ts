import { Router } from 'express'
import UserController from '../controllers/UserController'

const router = Router()

router.get('/getAllUsers', UserController.getAllUsers)
router.post('/register', UserController.register)
router.post('/checkuser', UserController.checkLoginUser)
router.post('/searchuser', UserController.searchUser)
router.patch('/edituser/:id', UserController.editUser)

export default router