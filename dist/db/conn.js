"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

async function main(){
    await _mongoose2.default.connect(process.env.MONGO_CONNECT)
    console.log('Conect to Mongoose')
}

main().catch((err) => console.log(`Erro in mongodb: ${err}`))

exports. default = _mongoose2.default