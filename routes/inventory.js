const express = require('express');
const router = express.Router();
const knexfile = require('../knexfile');

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: 'paitoon_store',
        charset: 'utf8',
    },
    useNullAsDefault: true
});


router.get('/all', (req, res)=>{
    console.log('getting inventories')
    knex('pt_products')
    .select('*')
    .then((data)=>{
        console.log(data);
        res.status(200).json(data);
    })
    .catch((err)=> {
        console.log(err)
        res.status(500).json({error: 'Internal error'});
    })

})

module.exports = router;
