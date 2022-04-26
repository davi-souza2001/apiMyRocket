"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
const dot = _dotenv2.default.config()

var _UserRoutes = require('./routes/UserRoutes'); var _UserRoutes2 = _interopRequireDefault(_UserRoutes);
var _PostsRoutes = require('./routes/PostsRoutes'); var _PostsRoutes2 = _interopRequireDefault(_PostsRoutes);

const app = _express2.default.call(void 0, )

app.use(_express2.default.json())
app.use(_cors2.default.call(void 0, ))

app.use('/users', _UserRoutes2.default)
app.use('/posts', _PostsRoutes2.default)

exports.app = app;