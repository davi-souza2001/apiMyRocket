import { Request, Response } from 'express'
import Post from '../models/Posts'

export default class UserController {
    static async getAllPosts(req: Request, res: Response) {
        const allPosts = await Post.find()

        if (allPosts) {
            res.status(200).json(allPosts)
            return
        } else {
            res.status(200).json({ message: 'Nenhum post cadastrado' })
            return
        }
    }
}