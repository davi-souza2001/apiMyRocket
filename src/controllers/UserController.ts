import { Request, Response } from 'express'

export default class UserController{
    static async getAllUsers (req: Request, res: Response){
        res.status(200).json({message: "Alo alo alo"})
        return
    }
}