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
        seniority:{
            type: String,
            required: true
        },
        area:{
            type: String,
            required: true
        },
        comumone:{
            type: String,
            required: true
        },
        comumtwo:{
            type: String
        },
        comumthree:{
            type: String
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
        email: {
            type: String,
            required: true
        }
    }, { timestamps: true })
)

export default  User