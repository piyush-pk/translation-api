const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/v1/index.js');
const httpStatus = require('http-status');
const { MESSAGE } = require('./constants/message.constants.js');

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(httpStatus.OK).json({message: MESSAGE.API_GATEWAY_WORKING});
})

app.use('/translate', router);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
