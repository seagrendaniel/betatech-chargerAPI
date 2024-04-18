import express from 'express';
import chargerRoutes from './routes/ChargerRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', chargerRoutes);

// Initialize server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
