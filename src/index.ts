// importer express et axios
import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const apiKey = 'pat-na1-e9a27d01-43f8-4e0c-b158-192a5d0cf71c';

// Middleware pour parser les données du type JSON
app.use(express.json());

// Récupération de la liste des contacts
app.get('/contacts', async (_req: Request, res: Response) => {
  try {
    const response = await axios.get(
      'https://api.hubspot.com/crm/v3/objects/contacts',
      {
        params: { hapikey: apiKey }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error when retrieving contacts.'});
  }
});
