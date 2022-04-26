"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _supertest = require('supertest'); var _supertest2 = _interopRequireDefault(_supertest);
var _app = require('../app');

describe('Tests for api', () => {
    it('Server open', async () => {
        const response = await _supertest2.default.call(void 0, _app.app).get('/posts/getAllPosts');
        console.log(response.status);
    });
});

describe('Tests for users', () => {
    it('work with objects', async () => {
        const obj = { name: 'John', mail: 'asdasd@gmail.com' }
        expect(obj).toHaveProperty('name')
    });
});