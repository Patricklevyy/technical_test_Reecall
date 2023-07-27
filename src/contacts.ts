// import d'express, d'axios et dotenv
import express, { Request, Response } from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const apiKey = process.env.ApiKey;

// Middleware pour parser les données du type JSON
app.use(express.json());

// Récupération de la liste des contacts
app.get('/', async (req: Request, res: Response) => {
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
app.get('/:id', async (req: Request, res: Response) => {
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
app.post('/', async (req: Request, res: Response) => {
  const newContact = {
      properties: {
        firstname: req.body.properties.firstname,
        lastname: req.body.properties.lastname,
        email: req.body.properties.email,
        phone: req.body.properties.phone
      }
  };
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
app.put('/:id', async (req: Request, res: Response) => {
  const contactId = req.params.id;
  const updatedContact = {
    properties: {
      firstname: req.body.properties.firstname,
      lastname: req.body.properties.lastname,
      email: req.body.properties.email,
      phone: req.body.properties.phone
    }
  };
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
      console.log("error");
      res.status(500).json({ error: 'Error while updating contact.' });
  }
});

// Suppression d'un contact
app.delete('/:id', async (req: Request, res: Response) => {
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

export default app;
