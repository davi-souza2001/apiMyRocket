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
        }
    }, { timestamps: true })
)

export default Post