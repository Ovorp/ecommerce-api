const products = require('./products.json');

const getProducts = (req, res) => {
  let { price } = req.query;
  const filteredProductsByValue = products.filter(
    (val) => val.price >= parseInt(price)
  );

  res
    .status(200)
    .json(
      filteredProductsByValue.length > 0 ? filteredProductsByValue : products
    );
};

module.exports = getProducts;
