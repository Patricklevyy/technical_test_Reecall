// Importez express et axios
import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const apiKey = 'pat-na1-e9a27d01-43f8-4e0c-b158-192a5d0cf71c';

// Middleware pour parser les données JSON
app.use(express.json());

// Endpoint pour récupérer la liste des compagnies
app.get('/', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`https://api.hubspot.com/crm/v3/objects/companies`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Une erreur est survenue lors de la récupération des compagnies." });
  }
});

// Endpoint pour récupérer une compagnie par son ID
app.get('/:id', async (req: Request, res: Response) => {
  const companyId = req.params.id;
  try {
    const response = await axios.get(`https://api.hubspot.com/crm/v3/objects/companies/${companyId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Une erreur est survenue lors de la récupération de la compagnie par ID." });
  }
});

// Endpoint pour créer une nouvelle compagnie
app.post('/', async (req: Request, res: Response) => {
  const newCompanyData = req.body;
  try {
    const response = await axios.post(`https://api.hubspot.com/crm/v3/objects/companies`, newCompanyData, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Une erreur est survenue lors de la création d'une nouvelle compagnie." });
  }
});

// Endpoint pour mettre à jour une compagnie existante
app.put('/:id', async (req: Request, res: Response) => {
  const companyId = req.params.id;
  const updatedCompanyData = req.body;
  try {
    const response = await axios.put(`https://api.hubspot.com/crm/v3/objects/companies/${companyId}`, updatedCompanyData, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Une erreur est survenue lors de la mise à jour de la compagnie." });
  }
});

// Endpoint pour supprimer une compagnie
app.delete('/:id', async (req: Request, res: Response) => {
  const companyId = req.params.id;
  try {
    const response = await axios.delete(`https://api.hubspot.com/crm/v3/objects/companies/${companyId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Une erreur est survenue lors de la suppression de la compagnie." });
  }
});

export default app;
