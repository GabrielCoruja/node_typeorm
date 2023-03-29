import app from './app';
import { AppDataSource } from './database/config/data-source';

const PORT = process.env.PORT || 3000;

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => console.log(`Running on port ${PORT}`));

}).catch(console.log);
