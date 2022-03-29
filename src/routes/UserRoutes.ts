import { Router } from 'express'
import UserController from '../controllers/UserController'

const router = Router()

router.get('/getAllUsers', UserController.getAllUsers)
router.post('/getGitHubUser', UserController.getGithubUser)
router.post('/register', UserController.register)
router.post('/checkuser', UserController.checkLoginUser)
router.post('/searchuserByNickName', UserController.searchUserByNickName)
router.post('/searchuserByComum', UserController.searchUserByComum)
router.patch('/edituser/:id', UserController.editUser)

export default router