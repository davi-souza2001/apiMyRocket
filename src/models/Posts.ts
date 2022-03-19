import mongoose from '../db/conn'
const Schema = mongoose.Schema

const Post = mongoose.model(
    'Post',
    new Schema({
        email: {
            type: String,
            required: true
        },
        post:{
            type: String,
            required: true
        },
        tech:{
            type: String,
            required: true
        },
        likes:{
            type: [String],
        }   
    }, { timestamps: true })
)

export default Post