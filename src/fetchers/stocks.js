const axios = require('axios');
const { IEX_BASE_URI } = require('./config');

/**
 *
 * @param {array} symbols - Array of stock sympols
 * @param {array} types - ENUM : ["quote", "news", "chart"] => returns from IEX
 */
const getStocksBySymbols = async (symbols, types) => {
  try {
    const parsedSymbols = symbols.join(',');
    const parsedTypes = types.join(',');

    const stockData = await axios.get(
      `${IEX_BASE_URI}/stocks/markets/?${parsedSymbols}&types=${parsedTypes}`
    );

    return stockData;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  getStocksBySymbols
};
