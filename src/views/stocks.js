const moment = require("moment");

const renderSymbol = s => `
    <b>${s.toUpperCase()}</b>
`;

const renderArticle = a => `
    <b>${a.source}</b> 
    <a href="${a.url}" style="font-size: 9px;">${a.headline}</a>
    <i>${moment(a.datetime).format("MM/DD/YYYY")}</i>
`;

const renderQuote = (s, q) => `
    <b> 🔔 ${s.toUpperCase()} 🔔 </b>
    <i>-------------------------------</i>
    <i>% Change: </i>       <b>${q.change}%</b>
    <i>Latest Quote:</i>   <b>$${q.latestPrice}</b>
    <i>Today's High:</i>   <b>$${q.high}</b>
    <i>Today's Low:</i>    <b>$${q.low}</b>
    <i>52 High:</i>           <b>$${q.week52High}</b>
    <i>52 Low:</i>            <b>$${q.week52Low}</b>    
    <i>Open:</i>               <b>$${q.open}</b>
    <i>Close:</i>               <b>$${q.close}</b>
    <i>-------------------------------</i>
`;

const renderQuotes = stocksData => {
  if (Object.keys(stocksData).length < 1) {
    return false;
  }

  let view = "<i>\n</i>";
  Object.entries(stocksData).forEach(stock => {
    const symbol = stock[0];
    const { quote } = stock[1];
    view += renderQuote(symbol, quote);
  });

  return view;
};

module.exports = {
  renderQuotes
};
