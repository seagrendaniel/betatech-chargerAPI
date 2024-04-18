import express from 'express';
import { createCharger, getCharger, getAllChargers, updateCharger, deleteCharger } from '../controllers/ChargerController';

const router = express.Router();

const API_KEY = '86t239r2nsdv'

const authenticate = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const apiKey = req.headers['x-api-key']
  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({error: 'Unauthorized to perform this action'})
  }
  next()
}
// Get a charger by ID
router.get('/chargers/:id', getCharger);

// Get all chargers
router.get('/chargers', getAllChargers);


// authenticate middleware protects all routes defined below it (TO CONFIRM VIA TESTING)
router.use(authenticate)

// Create a new charger
router.post('/chargers', createCharger);


// Update a charger by ID
router.put('/chargers/:id', updateCharger);

// Delete a charger by ID
router.delete('/chargers/:id', deleteCharger);

export default router;
