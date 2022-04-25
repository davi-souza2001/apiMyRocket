"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _conn = require('../db/conn'); var _conn2 = _interopRequireDefault(_conn);
const Schema = _conn2.default.Schema

const User = _conn2.default.model(
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
        photo: {
            type: String,
        },
        email: {
            type: String,
            required: true
        },
        gas: {
            type: Number,
        }
    }, { timestamps: true })
)

exports. default = User