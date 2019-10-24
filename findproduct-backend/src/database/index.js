import path from 'path';
import fs from 'fs';

class Database {
  loadFile() {
    const file = path.resolve(__dirname, 'mock_system_search_core.json');
    const obj = JSON.parse(fs.readFileSync(file, 'utf8'));

    return obj;
  }
}

export default new Database();
