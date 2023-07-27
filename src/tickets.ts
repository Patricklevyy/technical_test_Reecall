// Import d'express, d'axios et dotenv
import express, { Request, Response } from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const apiKey = process.env.ApiKey;

// Middleware pour parser les données JSON
app.use(express.json());

// Récuparation de la liste des tickets
app.get('/', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`https://api.hubspot.com/crm/v3/objects/tickets`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while retrieving the tickets." });
  }
});

// Récupération d'un ticket spécifique par son ID
app.get('/:id', async (req: Request, res: Response) => {
  const ticketId = req.params.id;
  try {
    const response = await axios.get(`https://api.hubspot.com/crm/v3/objects/tickets/${ticketId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred when retrieving the ticket by ID." });
  }
});

// Création d'un nouveau ticket
app.post('/', async (req: Request, res: Response) => {
  const newTicket = {
      properties: {
        title: req.body.properties.title,
        subject: req.body.properties.subject,
        priority: req.body.properties.priority,
        category: req.body.properties.category,
        content: req.body.properties.content,
        requester: req.body.properties.requester
      }
  }
  try {
    const response = await axios.post(`https://api.hubspot.com/crm/v3/objects/tickets`, newTicket, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred when creating a new ticket." });
  }
});

// Mise à jour d'un ticket existant
app.put('/:id', async (req: Request, res: Response) => {
  const ticketId = req.params.id;
  const updatedTicketData = {
        properties: {
          title: req.body.properties.title,
          subject: req.body.properties.subject,
          priority: req.body.properties.priority,
          category: req.body.properties.category,
          content: req.body.properties.content,
          requester: req.body.properties.requester
        }
    }
  try {
    const response = await axios.put(`https://api.hubspot.com/crm/v3/objects/tickets/${ticketId}`, updatedTicketData, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating the ticket." });
  }
});

// Suppression d'un ticket
app.delete('/:id', async (req: Request, res: Response) => {
  const ticketId = req.params.id;
  try {
    const response = await axios.delete(`https://api.hubspot.com/crm/v3/objects/tickets/${ticketId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred when deleting the ticket." });
  }
});

export default app;
