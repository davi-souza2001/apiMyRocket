import mongoose from '../db/conn'
const Schema = mongoose.Schema

const User = mongoose.model(
    'User',
    new Schema({
        name: {
            type: String,
            required: true
        },
        nickname:{
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        linkedin: {
            type: String,
        },
        github: {
            type: String,
        },
        youtube: {
            type: String,
        },
        instagram: {
            type: String,
        },
        password: {
            type: String,
            required: true
        }
    }, { timestamps: true })
)

export default  User