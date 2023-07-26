// importer express et axios
import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const apiKey = 'pat-na1-e9a27d01-43f8-4e0c-b158-192a5d0cf71c';

// Middleware pour parser les données du type JSON
app.use(express.json());

// Récupération de la liste des contacts
app.get('/contacts', async (req: Request, res: Response) => {
    try {
      const response = await axios.get(
        'https://api.hubspot.com/crm/v3/objects/contacts',
        {
          headers: {
            Authorization: `Bearer ${apiKey}`
          }
        }
      );
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error when retrieving contacts.' });
    }
});

// Récupération d'un contact spécifique par son ID
app.get('/contacts/:id', async (req: Request, res: Response) => {
    const contactId = req.params.id;
    try {
      const response = await axios.get(
        `https://api.hubspot.com/crm/v3/objects/contacts/${contactId}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`
          }
        }
      );
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error when retrieving contact by id.' });
    }
});

// Création d'un nouveau contact
app.post('/contacts', async (req: Request, res: Response) => {
    const newContact = req.body;
    try {
      const response = await axios.post(
        'https://api.hubspot.com/crm/v3/objects/contacts',
        newContact,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`
          }
        }
      );
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error during contact creation.' });
    }
});

// Mise à jour d'un contact existant
app.put('/contacts/:id', async (req: Request, res: Response) => {
    const contactId = req.params.id;
    const updatedContact = req.body;
    try {
      const response = await axios.put(
        `https://api.hubspot.com/crm/v3/objects/contacts/${contactId}`,
        updatedContact,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`
          }
        }
      );
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error while updating contact.' });
    }
});

// Suppression d'un contact
app.delete('/contacts/:id', async (req: Request, res: Response) => {
    const contactId = req.params.id;
    try {
      const response = await axios.delete(
        `https://api.hubspot.com/crm/v3/objects/contacts/${contactId}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`
          }
        }
      );
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error while deleting contact.' });
    }
});

const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
