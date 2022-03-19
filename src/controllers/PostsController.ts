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

    static async publicPost(req: Request, res: Response) {
        const email = req.body.email
        const post = req.body.post
        const tech = req.body.tech

        if (!email) {
            res.status(422).json({ message: 'Email é obrigatório' })
            return
        }
        if (!post) {
            res.status(422).json({ message: 'Escreva seu post!' })
            return
        }
        if (!tech) {
            res.status(422).json({ message: 'Seleciona a comunidade!' })
            return
        }

        const postNew = new Post({
            email,
            post,
            tech
        })

        try {
            const newPost = await postNew.save()
            res.status(200).json({ message: "Tudo certo !", newPost })
        } catch (error) {
            res.status(500).json({ message: 'Error ' + error })
        }
    }
}