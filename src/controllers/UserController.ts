import { Request, Response } from 'express'
import User from '../models/User'

export default class UserController {
    static async getAllUsers(req: Request, res: Response) {
        const allUsers = await User.find()

        if(allUsers) {
            res.status(200).json(allUsers)
            return
        } else{
            res.status(200).json({message: 'Nenhum usuário cadastrado'})
            return
        }
    }

    static async register(req: Request, res: Response) {
        const name = req.body.name
        const nickname = req.body.nickname
        const email = req.body.email
        const description = req.body.description
        const password = req.body.password
        const linkedin = req.body.linkedin
        const github = req.body.github
        const youtube = req.body.youtube
        const instagram = req.body.instagram

        //validations
        if (!name) {
            res.status(422).json({ message: 'O nome é obrigatório' })
            return
        }
        if (!nickname) {
            res.status(422).json({ message: 'O seu nick é obrigatório' })
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
        if (!password) {
            res.status(422).json({ message: 'A senha é obrigatória' })
            return
        }

        //check if user exists
        const userExists = await User.findOne({ email: email })

        if (userExists) {
            res.status(422).json({ message: "Email já cadastrado !" })
            return
        }

        // // create password
        // const salt = await bcrypt.genSalt(10)
        // const passwordHash = await bcrypt.hash(password, salt)

        //create user
        const user = new User({
            name,
            email,
            password,
            nickname,
            description
        })

        try {
            const newUser = await user.save()
            res.status(200).json({ message: "Tudo certo !", newUser })
        } catch (error) {
            res.status(500).json({ message: 'Error ' + error })
        }
    }
}