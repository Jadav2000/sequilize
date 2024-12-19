const express = require('express');
const dotenv = require('dotenv');
const { ConnectDb } = require('./DB/db');
const userroute = require('./routes/user');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


ConnectDb();


app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.use('/user', userroute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
