import supertest from 'supertest';
import createServer from '../../src/server';
import generateToken from '../helpers/auth-for-routes';

const token = generateToken();
const app = createServer();

describe('GET /invalidURL', () => {
  it("should return message 'Not Found'", async () => {
    const res = await supertest(app)
      .get('/api/invalidURL')
      .set('authorization', token);
    expect(res.statusCode).toEqual(404);
    expect(res.body.message).toBe('Not Found');
  });
});

describe('GET /users/:id - get users by id', () => {
  it('should return message "Invalid request"', async () => {
    const id = 'first';
    const res = await supertest(app)
      .get('/api/users/' + id)
      .set('authorization', token);
    expect(res.statusCode).toEqual(422);
    expect(res.body.message).toBe('Invalid request');
  });
});
