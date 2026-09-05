import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create an instance of the Express application
const app = express();
const port = process.env.PORT || 5000;

// Enable cors middleware
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});