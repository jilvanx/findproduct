import request from 'supertest';
import app from '../../src/app';

describe('Search', () => {
  it('should be have products', async () => {
    const response = await request(app)
      .get('/search').query({
        terms: 'Teste'
      })

    expect(response.body).toHaveProperty('products') 
  });
});