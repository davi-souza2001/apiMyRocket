"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

var _Posts = require('../models/Posts'); var _Posts2 = _interopRequireDefault(_Posts);

 class UserController {
    static async getAllPosts(req, res) {
        const allPosts = await _Posts2.default.find()

        if (allPosts) {
            res.status(200).json(allPosts)
            return
        } else {
            res.status(200).json({ message: 'Nenhum post cadastrado' })
            return
        }
    }

    static async publicPost(req, res) {
        const email = req.body.email
        const post = req.body.post
        const tech = req.body.tech
        const likes = req.body.likes

        const searchUser = await _User2.default.findOne({ email })

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

        const postNew = new (0, _Posts2.default)({
            email,
            post,
            tech,
            likes,
            userName: searchUser.name,
            userNick: searchUser.nickname,
            userPhoto: searchUser.photo,
            idUnic: Math.random()
        })

        const newUser = searchUser
        newUser.gas = newUser.gas - 1

        try {
            if (newUser.gas >= 0) {
                const newPost = await postNew.save()
                await _User2.default.findOneAndUpdate(
                    { _id: newUser._id },
                    { $set: newUser },
                    { new: true }
                )
                res.status(200).json({ message: "Tudo certo !" })
            } else {
                res.status(404).json({ message: 'Sem gasolina!' })
            }
        } catch (error) {
            res.status(500).json({ message: 'Error ' + error })
        }
    }

    static async giveLike(req, res) {
        const idPost = req.body.idPost
        const emailUser = req.body.emailUser
        let emailAlreadyGiveLike = false

        const postExists = await _Posts2.default.findOne({ _id: idPost })
        const newPost = postExists

        newPost.likes.map((like) => {
            if (like === emailUser) {
                emailAlreadyGiveLike = true
            }
        })

        if (emailAlreadyGiveLike) {
            newPost.likes.map((like, index) => {
                if (like === emailUser) {
                    newPost.likes.splice(index, 1);
                }
            })
        } else {
            newPost.likes.push(emailUser)
            console.log(newPost.likes)
        }

        try {
            if (postExists) {
                await _Posts2.default.findOneAndUpdate(
                    { _id: idPost },
                    { $set: newPost },
                    { new: true }
                )
                res.status(200).json({ message: 'Tudo certo!' })
            } else {
                res.status(404).json({ message: 'Post não existe' })
            }
        } catch (error) {
            res.status(500).json({ message: 'Error ' + error })
        }
    }
} exports.default = UserController;