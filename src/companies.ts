// Import d'express et d'axios
import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const apiKey = 'pat-na1-e9a27d01-43f8-4e0c-b158-192a5d0cf71c';

// Middleware pour parser les données JSON
app.use(express.json());

// Récuparation de la liste des compagnies
app.get('/', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`https://api.hubspot.com/crm/v3/objects/companies`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while retrieving the companies." });
  }
});

// Récupération d'une compagnie par son ID
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
    res.status(500).json({ error: "An error occurred when retrieving the company by ID." });
  }
});

// Création d'une nouvelle compagnie
app.post('/', async (req: Request, res: Response) => {
  const newCompany = {
      properties: {
        name: req.body.properties.name,
        email: req.body.properties.email,
        phone: req.body.properties.phone,
        domain: req.body.properties.domain,
        address: {
          street: req.body.properties.street,
          city: req.body.properties.city,
          postalCode: req.body.properties.postalCode,
          country: req.body.properties.country,
        },
      }
  }
  try {
    const response = await axios.post(`https://api.hubspot.com/crm/v3/objects/companies`, newCompany, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred when creating a new company." });
  }
});

// Mise à jour une compagnie existante
app.put('/:id', async (req: Request, res: Response) => {
  const companyId = req.params.id;
  const updatedCompanyData = {
    properties: {
      name: req.body.properties.name,
      email: req.body.properties.email,
      phone: req.body.properties.phone,
      domain: req.body.properties.domain,
      address: {
        street: req.body.properties.street,
        city: req.body.properties.city,
        postalCode: req.body.properties.postalCode,
        country: req.body.properties.country,
      },
    }
  }
  try {
    const response = await axios.put(`https://api.hubspot.com/crm/v3/objects/companies/${companyId}`, updatedCompanyData, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating the company." });
  }
});

// Suppression d'une compagnie
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
    res.status(500).json({ error: "An error occurred when deleting the company." });
  }
});

export default app;
