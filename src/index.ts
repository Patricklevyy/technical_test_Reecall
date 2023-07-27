// importer express
import express, { Request, Response } from 'express';

import companiesApp from './companies';
import contactsApp from './contacts';
import ticketsApp from './tickets';
import transactionsApp from './transactions';

const app = express();

// Montage des sous-applications
app.use('/companies', companiesApp);
app.use('/contacts', contactsApp);
app.use('/tickets', ticketsApp);
app.use('/deals', transactionsApp);

const port = 3000;
app.listen(port, () => {
  console.log(`App listening on the port http://localhost:${port}`);
});
