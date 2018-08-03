const { getStocksBySymbols } = require("../fetchers/stocks");
const { stockShell } = require("../views/stocks");
const { renderQuotes } = require("../views/stocks");
const { getRandomInsult } = require("../util/insults");

const regExs = {
  stockSymbol: /\$[a-zA-Z]{1,4}/g
};

module.exports = {
  stockSymbolsInMessage: stockboy => ({
    trigger: regExs.stockSymbol,
    handler: async ctx => {
      try {
        const symbols = ctx.update.message.text
          .match(regExs.stockSymbol)
          .map(s => s.replace("$", ""));

        const stocksData = await getStocksBySymbols(symbols, ["quote", "news"]);
        const html = renderQuotes(stocksData);
        console.log(html);
        if (!html) {
          console.log(html);
          const failReply = `[INVALID SYMBOL]\n  "${getRandomInsult()}" - 👦`;
          return ctx.reply(failReply);
        }

        return ctx.replyWithHTML(html);
      } catch (e) {
        console.log(e);
      }
    }
  })
};
