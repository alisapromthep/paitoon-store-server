const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`🚨 Server listening on port ${PORT}`)
})