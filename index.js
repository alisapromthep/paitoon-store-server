const express = require('express');
const cors = require('cors');
const inventoryRouter = require('./routes/inventory');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use('/inventory', inventoryRouter);

app.listen(PORT, ()=>{
    console.log(`🚨 Server listening on port ${PORT}`)
});

