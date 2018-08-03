/*
if you add the dollar sign while talking stock boy bot will return a 
stock view for that information and a link to open the stock on robinhood
  - get information from iex
  - 

*/

const Bot = require('node-telegram-bot-api');

let stockboy;
const token = process.env.TELEGRAM_BOT_TOKEN;
const useWebHook = process.env.NODE_ENV === 'production';
const { getStocksBySymbols } = require('./fetchers/stocks');

if (useWebHook) {
  stockboy = new Bot(token);
  stockboy.setWebhook(`${process.env.APP_ENDPOINT}/${token}`);
} else {
  stockboy = new Bot(token, { polling: true });
}

const regExs = {
  stockSymbol: /\$[a-zA-Z]{1,4}/g
};

const commands = {};

const triggers = {
  stockSymbolsInMessage: {
    trigger: regExs.stockSymbol,
    handler: msg => {
      const symbols = msg.text
        .match(regExs.stockSymbol)
        .map(s => s.replace('$', ''));

      getStocksBySymbols(symbols, ['quote', 'news']).then(data => {
        console.log(data);
        return data;
      });
    }
  }
};

// Object.entries(triggers).forEach(t => {
//   const { trigger, handler } = t[1];

stockboy.onText(/\$[a-zA-Z]{1,4}/g, msg => {
  const symbols = msg.text
    .match(regExs.stockSymbol)
    .map(s => s.replace('$', ''));

  getStocksBySymbols(symbols, ['quote', 'news']).then(data => {
    console.log(data);
    return data;
  });
});
// });
