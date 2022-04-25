"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _conn = require('../db/conn'); var _conn2 = _interopRequireDefault(_conn);
const Schema = _conn2.default.Schema

const Post = _conn2.default.model(
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
        },
        userName: {
            type: String,
            required: true
        },
        userNick: {
            type: String,
            required: true
        },
        userPhoto: {
            type: String,
            required: true
        },
        idUnic: {
            type: Number,
            required: true
        }   
    }, { timestamps: true })
)

exports. default = Post