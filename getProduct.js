const products = require('./products.json');

const getProduct = (req, res) => {
  let { id } = req.params;
  let filteredProducts = products.filter((val) => val.id == id);

  filteredProducts
    ? res.status(200).json(filteredProducts)
    : res.status(500).send('Item not in list');
};

module.exports = getProduct;
