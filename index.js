const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
const app = express();
// this brings in the data from the products json file

app.get('/api/products', getProducts);

// gets a product by a id number
app.get('/api/products/:id', getProduct);

app.listen(5050, () => console.log('This is working on port 5050'));
