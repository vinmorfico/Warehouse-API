import supertest from 'supertest';
import createServer from '../../src/server';

const app = createServer();

describe('GET /invalidURL', () => {
  it("should return message 'Not Found'", async () => {
    const res = await supertest(app).get('/api/invalidURL');
    expect(res.statusCode).toEqual(404);
    expect(res.body.message).toBe('Not Found');
  });
});

describe('GET /users/:id - get users by id', () => {
  it('should return message "Invalid request"', async () => {
    const id = "first";
    const res = await supertest(app).get('/api/users/' + id);
    expect(res.statusCode).toEqual(422);
    expect(res.body.message).toBe('Invalid request');
  });
});
