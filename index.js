const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/v1/index.js');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/translate', router);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
