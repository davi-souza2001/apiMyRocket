import { Router } from 'express'
import PostController from '../controllers/PostsController'

const router = Router()

router.get('/getAllPosts', PostController.getAllPosts)
router.post('/publicPost', PostController.publicPost)
router.post('/giveLike', PostController.giveLike)

export default router