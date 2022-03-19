import { Router } from 'express'
import PostController from '../controllers/PostsController'

const router = Router()

router.get('/getAllPosts', PostController.getAllPosts)

export default router