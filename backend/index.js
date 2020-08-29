const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const recordsRouter = require('./routers/recordsRoutes');
const path = require('path');
const dotenv = require('dotenv');

//initialize the enviroment variables
dotenv.config();

//initialize and configure default settings
const app = express();
app.use(cors());
app.use(express.json());
//Setup Routes
app.use("/instant/records", recordsRouter);

//Connection config
const { DB_CONNECTION } = process.env;
mongoose.connect(
  DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      connectedToMongoDB = false;
      console.error(`Error - ${err}`);
    }
  }
);

//Connection 
const { connection } = mongoose;
connection.once('open', () => {
    connectedToMongoDB = true;
    const APP_PORT = process.env.PORT;
    app.listen(APP_PORT, () => {
      console.log(`Server on port ${APP_PORT}`);
    });
  });