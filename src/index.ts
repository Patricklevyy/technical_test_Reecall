// importer express
import express, { Request, Response } from 'express';

import companiesApp from './companies';
import contactsApp from './contacts';

const app = express();

app.use('/companies', companiesApp);
app.use('/contacts', contactsApp);

const port = 3000;
app.listen(port, () => {
  console.log(`App listening on the port http://localhost:${port}`);
});
