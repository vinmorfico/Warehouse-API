import supertest from 'supertest';
import createServer from '../../src/server';

const app = createServer();

describe('GET /users - get all users', () => {
  it('should return all users', async () => {
    const res = await supertest(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body[0].hasOwnProperty('id')).toBeTruthy();
    expect(!Number.isNaN(res.body.id)).toBeTruthy();
    expect(res.body[0].hasOwnProperty('name')).toBeTruthy();
    expect(res.body[0].hasOwnProperty('login')).toBeTruthy();
    expect(res.body[0].hasOwnProperty('password')).toBeTruthy();
    expect(res.body[0].hasOwnProperty('refreshToken')).toBeTruthy();
  });
});

describe('GET /users/:id - get users by id', () => {
  it('should return  user', async () => {
    const id = 2;
    const res = await supertest(app).get('/api/users/' + id);
    expect(res.statusCode).toEqual(200);
    expect(typeof res.body === 'object').toBeTruthy();
    expect(res.body.hasOwnProperty('id')).toBeTruthy();
    expect(!Number.isNaN(res.body.id)).toBeTruthy();
    expect(res.body.hasOwnProperty('name')).toBeTruthy();
    expect(res.body.hasOwnProperty('login')).toBeTruthy();
    expect(res.body.hasOwnProperty('password')).toBeTruthy();
    expect(res.body.hasOwnProperty('refreshToken')).toBeTruthy();
    expect(res.body.hasOwnProperty('products')).toBeTruthy();
    expect(Array.isArray(res.body['products'])).toBeTruthy();
  });
});