"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

const router = _express.Router.call(void 0, )

router.get('/getAllUsers', _UserController2.default.getAllUsers)
router.post('/getGitHubUser', _UserController2.default.getGithubUser)
router.post('/register', _UserController2.default.register)
router.post('/checkuser', _UserController2.default.checkLoginUser)
router.post('/searchuserByNickName', _UserController2.default.searchUserByNickName)
router.post('/searchuserByComum', _UserController2.default.searchUserByComum)
router.patch('/edituser/:id', _UserController2.default.editUser)

exports. default = router