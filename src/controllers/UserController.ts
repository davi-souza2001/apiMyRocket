import { Request, Response } from 'express'
import User from '../models/User'

import Client from '../data/client'

export default class UserController {
    static async getAllUsers(req: Request, res: Response) {
        const allUsers = await User.find()

        if (allUsers) {
            res.status(200).json(allUsers)
            return
        } else {
            res.status(200).json({ message: 'Nenhum usuário cadastrado' })
            return
        }
    }

    static async register(req: Request, res: Response) {
        const name = req.body.name
        const nickname = req.body.nickname
        const seniority = req.body.seniority
        const area = req.body.area
        const comumone = req.body.comumone
        const email = req.body.email
        const description = req.body.description
        const github = req.body.github

        let comumtwo = req.body.comumtwo
        let comumthree = req.body.comumthree
        let linkedin = req.body.linkedin
        let youtube = req.body.youtube
        let instagram = req.body.instagram
        let photo = req.body.photo

        //validations
        if (!name) {
            res.status(422).json({ message: 'O nome é obrigatório' })
            return
        }
        if (!nickname) {
            res.status(422).json({ message: 'O seu nick é obrigatório' })
            return
        }
        if (!seniority) {
            res.status(422).json({ message: 'Sua senioridade é obrigatória' })
            return
        }
        if (!area) {
            res.status(422).json({ message: 'Sua area é obrigatória' })
            return
        }
        if (!comumone) {
            res.status(422).json({ message: 'Escolha pelo menos uma comunidade!' })
            return
        }
        if (!description) {
            res.status(422).json({ message: 'Sua descrição é obrigatória' })
            return
        }
        if (!email) {
            res.status(422).json({ message: 'O email é obrigatório' })
            return
        }
        if (!github) {
            res.status(422).json({ message: 'Seu Github é obrigatório' })
            return
        }

        if (!comumtwo) {
            comumtwo = ""
        }
        if (!comumthree) {
            comumthree = ""
        }
        if (!linkedin) {
            linkedin = ""
        }
        if (!youtube) {
            youtube = ""
        }
        if (!instagram) {
            instagram = ""
        }
        if (!photo) {
            photo = ""
        }

        //check if user exists
        const userExists = await User.findOne({ email: email })

        if (userExists) {
            res.status(422).json({ message: "Email já cadastrado !" })
            return
        }

        //create user
        const user = new User({
            name,
            nickname,
            seniority,
            area,
            comumone,
            comumtwo,
            comumthree,
            description,
            email,
            github,
            linkedin,
            youtube,
            instagram,
            photo,
            gas: 15
        })

        try {
            const newUser = await user.save()
            res.status(200).json({ message: "Tudo certo !", newUser })
        } catch (error) {
            res.status(500).json({ message: 'Error ' + error })
        }
    }

    static async checkLoginUser(req: Request, res: Response) {
        const emailUser = req.body.emailuser

        const searchUser = await User.findOne({ email: emailUser })

        if (searchUser) {
            res.status(200).json(searchUser)
            return
        } else {
            res.status(404).json({ error: 'Usuário not found' })
            return
        }
    }

    static async searchUser(req: Request, res: Response) {
        const userSearch = req.body.usersearch

        const userExists = await User.findOne({ nickname: userSearch })

        if (userExists) {
            res.status(200).json(userExists)
            return
        } else {
            res.status(404).json({ error: 'Usuário not found' })
            return
        }
    }

    static async getGithubUser(req: Request, res: Response) {
        const emailUser = req.body.emailuser

        const searchUser = await User.findOne({ email: emailUser })

        // /davi-souza2001/repos
        if (searchUser) {
            const gitHubUser = searchUser.github
            const gitHubUserRepos = await Client.get(`/${gitHubUser}/repos`)
            .then((repos) => repos.data)
            .catch((err) => console.log(err))

            res.status(200).json(gitHubUserRepos)
            return
        } else {
            res.status(404).json({ error: 'Usuário not found' })
            return
        }
    }

    static async editUser(req: Request, res: Response) {
        const idUserSend = req.params.id

        const name = req.body.name
        const nickname = req.body.nickname
        const seniority = req.body.seniority
        const area = req.body.area
        const comumone = req.body.comumone
        const email = req.body.email
        const description = req.body.description
        const github = req.body.github
        const gas = req.body.gas

        let comumtwo = req.body.comumtwo
        let comumthree = req.body.comumthree
        let linkedin = req.body.linkedin
        let youtube = req.body.youtube
        let instagram = req.body.instagram
        let photo = req.body.photo

        //validations
        if (!name) {
            res.status(422).json({ message: 'O nome é obrigatório' })
            return
        }
        if (!nickname) {
            res.status(422).json({ message: 'O seu nick é obrigatório' })
            return
        }
        if (!seniority) {
            res.status(422).json({ message: 'Sua senioridade é obrigatória' })
            return
        }
        if (!area) {
            res.status(422).json({ message: 'Sua area é obrigatória' })
            return
        }
        if (!comumone) {
            res.status(422).json({ message: 'Escolha pelo menos uma comunidade!' })
            return
        }
        if (!description) {
            res.status(422).json({ message: 'Sua descrição é obrigatória' })
            return
        }
        if (!email) {
            res.status(422).json({ message: 'O email é obrigatório' })
            return
        }
        if (!github) {
            res.status(422).json({ message: 'Seu Github é obrigatório' })
            return
        }
        if (!comumtwo) {
            comumtwo = ""
        }
        if (!comumthree) {
            comumthree = ""
        }
        if (!linkedin) {
            linkedin = ""
        }
        if (!youtube) {
            youtube = ""
        }
        if (!instagram) {
            instagram = ""
        }

        const userSend = {
            idUserSend,
            name,
            nickname,
            seniority,
            area,
            comumone,
            comumtwo,
            comumthree,
            description,
            email,
            github,
            linkedin,
            youtube,
            instagram,
            photo,
            gas
        }

        // Check if user exists
        const userExists = await User.findOne({ email })

        if (!userExists) {
            res.status(404).json({ message: 'Usuário não encontrado' })
            return
        }

        try {
            await User.findOneAndUpdate(
                { _id: idUserSend },
                { $set: userSend },
                { new: true }
            )

            res.status(200).json({
                message: 'Usuário atualizado com sucesso'
            })
            return
        } catch (error) {
            res.status(500).json({ message: error })
            return
        }
    }
}