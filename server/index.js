const express = require('express');
const {
  getAllPets,
  getPet,
  createPet,
  updatePet,
  deletePet,
} = require('./controllers/petControllers');
const {
  getAllOwners,
  getOwner,
  createOwner,
  updateOwner,
  deleteOwner,
} = require('./controllers/ownerControllers');
const logRoutes = require('./middleware/logRoutes');

const app = express();
app.use(express.json());
app.use(logRoutes);

app.get('/api/pets/', getAllPets);
app.get('/api/pets/:pet_id', getPet);
app.post('/api/pets/', createPet);
app.patch('/api/pets/:pet_id', updatePet);
app.delete('/api/pets/:pet_id', deletePet);

app.get('/api/owners/', getAllOwners);
app.get('/api/owners/:owner_id', getOwner);
app.post('/api/owners/', createOwner);
app.patch('/api/owners/:owner_id', updateOwner);
app.delete('/api/owners/:owner_id', deleteOwner);

// Error-handling middleware — must have exactly four parameters
const handleError = (err, req, res, next) => {
  console.error(err);
  res.status(500).send({ message: `Internal Server Error` });
};

app.use(handleError);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
