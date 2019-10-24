import { Router } from 'express';

import SearchController from './app/controllers/SearchController';

const routes = new Router();

/**
 * route /
 */
routes.get('/', (req, res) => {
  res.status(400).json({ error: 'Bad Request' });
});
routes.post('/', (req, res) => {
  res.status(400).json({ error: 'Bad Request' });
});
routes.put('/', (req, res) => {
  res.status(400).json({ error: 'Bad Request' });
});
routes.patch('/', (req, res) => {
  res.status(400).json({ error: 'Bad Request' });
});
routes.delete('/', (req, res) => {
  res.status(400).json({ error: 'Bad Request' });
});

/**
 * route /search
 */
routes.get('/search', SearchController.index);
routes.post('/search', (req, res) => {
  res.status(400).json({ error: 'Bad Request' });
});
routes.put('/search', (req, res) => {
  res.status(400).json({ error: 'Bad Request' });
});
routes.patch('/search', (req, res) => {
  res.status(400).json({ error: 'Bad Request' });
});
routes.delete('/search', (req, res) => {
  res.status(400).json({ error: 'Bad Request' });
});

export default routes;
