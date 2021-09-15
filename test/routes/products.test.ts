import supertest from 'supertest';
import createServer from '../../src/server';

const app = createServer();

describe('POST /products - create new product', () => {
  it('should return new product', async () => {
    const post = {
      name: 'potato',
      description: 'very good',
      price: 7.99,
      amount_left: 356,
      category_id: 2,
      users_id: 1,
    };
    const res = await supertest(app).post('/api/products').send(post);
    expect(res.statusCode).toEqual(201);
    expect(typeof res.body === 'object').toBeTruthy();
    expect(res.body.hasOwnProperty('id')).toBeTruthy();
    expect(!Number.isNaN(res.body.id)).toBeTruthy();
    expect(res.body.hasOwnProperty('name')).toBeTruthy();
    expect(res.body.name).toBe(post.name);
    expect(res.body.hasOwnProperty('description')).toBeTruthy();
    expect(res.body.description).toBe(post.description);
    expect(res.body.hasOwnProperty('price')).toBeTruthy();
    expect(res.body.price).toBe(post.price);
    expect(res.body.hasOwnProperty('amount_left')).toBeTruthy();
    expect(res.body.amount_left).toBe(post.amount_left);
    expect(res.body.hasOwnProperty('category_id')).toBeTruthy();
    expect(res.body.category_id).toBe(post.category_id);
    expect(res.body.hasOwnProperty('users_id')).toBeTruthy();
    expect(res.body.users_id).toBe(post.users_id);
  });
});

describe('PUT /products/:id - update product by id', () => {
  it('should update product', async () => {
    const id = 3;
    const put = {
      description: 'bad',
      amount_left: 459,
    };
    const res = await supertest(app)
      .put('/api/products/' + id)
      .send(put);
    expect(res.statusCode).toEqual(200);
    expect(typeof res.body === 'object').toBeTruthy();
    expect(res.body.hasOwnProperty('id')).toBeTruthy();
    expect(!Number.isNaN(res.body.id)).toBeTruthy();
    expect(res.body.hasOwnProperty('description')).toBeTruthy();
    expect(res.body.description).toBe(put.description);
    expect(res.body.hasOwnProperty('price')).toBeTruthy();
    expect(res.body.hasOwnProperty('amount_left')).toBeTruthy();
    expect(res.body.amount_left).toBe(put.amount_left);
    expect(res.body.hasOwnProperty('category_id')).toBeTruthy();
    expect(res.body.hasOwnProperty('users_id')).toBeTruthy();
  });
});

describe('DELETE /products/:id - delete product by id', () => {
  it('should return message "deleted"', async () => {
    const id = 4;
    const res = await supertest(app).delete('/api/products/' + id);
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('deleted');
  });
});
