// Import d'express et d'axios
import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const apiKey = 'pat-na1-e9a27d01-43f8-4e0c-b158-192a5d0cf71c';

// Middleware pour parser les données JSON
app.use(express.json());

// Récuparation de la liste des transactions
app.get('/', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`https://api.hubspot.com/crm/v3/objects/deals`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while retrieving the deals." });
  }
});

// Récupération d'une transaction spécifique par son ID
app.get('/:id', async (req: Request, res: Response) => {
  const dealsId = req.params.id;
  try {
    const response = await axios.get(`https://api.hubspot.com/crm/v3/objects/deals/${dealsId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred when retrieving the transaction by ID." });
  }
});

// Création d'une nouvelle transaction
app.post('/', async (req: Request, res: Response) => {
  const newDeal = {
      properties: {
        dealname: req.body.properties.dealname,
        amount: req.body.properties.amount,
        dealstage: req.body.properties.dealstage,
        date: req.body.properties.date,
        pipeline: req.body.properties.pipeline
      }
  }
  try {
    const response = await axios.post(`https://api.hubspot.com/crm/v3/objects/deals`, newDeal, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred when creating a new transaction." });
  }
});

// Mise à jour d'une transaction existante
app.put('/:id', async (req: Request, res: Response) => {
  const dealsId = req.params.id;
  const updatedDealsData = req.body;
  try {
    const response = await axios.put(`https://api.hubspot.com/crm/v3/objects/deals/${dealsId}`, updatedDealsData, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating the deal." });
  }
});

// Suppression d'une transaction
app.delete('/:id', async (req: Request, res: Response) => {
  const dealsId = req.params.id;
  try {
    const response = await axios.delete(`https://api.hubspot.com/crm/v3/objects/deals/${dealsId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred when deleting the deal." });
  }
});

export default app;
