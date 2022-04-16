import request from 'supertest';
import { app } from '../app';

describe('Tests for api', () => {
    it('Server open', async () => {
        const response = await request(app).get('/posts/getAllPosts');
        console.log(response.status);
    });
});

describe('Tests for users', () => {
    it('work with objects', async () => {
        const obj = { name: 'John', mail: 'asdasd@gmail.com' }
        expect(obj).toHaveProperty('name')
    });
});