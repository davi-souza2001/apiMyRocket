import { Request, Response } from 'express'
import User from '../models/User'

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
        const likes = req.body.likes

        const searchUser = await User.findOne({ email })
        console.log(searchUser)

        if (!searchUser) {
            res.status(200).json({ message: 'Usuário precisar estar logado!' })
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
            tech,
            likes,
            userName: searchUser.name,
            userNick: searchUser.nickname,
            userPhoto: searchUser.photo,
            idUnic: Math.random()
        })

        try {
            const newPost = await postNew.save()
            res.status(200).json({ message: "Tudo certo !" })
        } catch (error) {
            res.status(500).json({ message: 'Error ' + error })
        }
    }
}