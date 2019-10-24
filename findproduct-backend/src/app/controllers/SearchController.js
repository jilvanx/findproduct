import Database from '../../database';

class SearchController {
  async index(req, res) {
    const database = Database.loadFile();

    const { terms } = req.query;

    if (!terms) {
      return res.status(400).json({ error: 'Bad Request' });
    }

    const found = { products: [] };
    database.products.forEach(item => {
      if (item.title.toLowerCase().includes(terms.toLowerCase())) {
        found.products.push(item);
      }
    });

    return res.json(found);
  }
}

export default new SearchController();
