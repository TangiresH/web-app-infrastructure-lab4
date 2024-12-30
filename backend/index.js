const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'database',
  database: 'lab4db',
  password: 'postgres',
  port: 5432,
});

app.use(express.json());

app.get('/clients', async (req, res) => {
  const result = await pool.query('SELECT * FROM clients');
  res.json(result.rows);
});

app.get('/orders', async (req, res) => {
  const result = await pool.query('SELECT * FROM orders');
  res.json(result.rows);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});