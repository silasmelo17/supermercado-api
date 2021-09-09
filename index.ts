
require('dotenv').config();

import express from 'express';

const app = express();

import routes from '@Routes/index'



app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use( '/api', routes);



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});