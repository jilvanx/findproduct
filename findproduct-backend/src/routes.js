import { Router } from 'express';

import SearchController from './app/controllers/SearchController';

const routes = new Router();

/**
 * route /search
 */
routes.get('/search', SearchController.index);

/**
 * block others routes
 */
routes.use((req, res) => {
  res.status(400).json({ error: 'Bad Request' });
});

export default routes;
