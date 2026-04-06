const express = require('express');
const petRouter = require('./routes/petRouter');

const app = express();
app.use(express.json());

app.use('/api/pets', petRouter);

// Error-handling middleware — must have exactly four parameters
const handleError = (err, req, res, next) => {
  console.error(err);
  const status = err.status ?? 500;
  const message = err.message ?? 'Internal Server Error';
  res.status(status).json({ error: message });
};
app.use(handleError);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
