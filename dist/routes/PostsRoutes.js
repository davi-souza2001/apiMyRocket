"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _PostsController = require('../controllers/PostsController'); var _PostsController2 = _interopRequireDefault(_PostsController);

const router = _express.Router.call(void 0, )

router.get('/getAllPosts', _PostsController2.default.getAllPosts)
router.post('/publicPost', _PostsController2.default.publicPost)
router.post('/giveLike', _PostsController2.default.giveLike)

exports. default = router