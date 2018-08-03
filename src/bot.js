const Telegraf = require("telegraf");
const express = require("express");
const controller = require("./controller");

const stockboy = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
const app = express();

if (process.env.NODE_ENV === "production") {
  stockboy.telegram.setWebhook(
    "https://silly-husky-24.localtunnel.me/stockboy"
  );
  app.use(stockboy.webhookCallback("/stockboy"));
} else {
  stockboy.startPolling();
}
controller(stockboy);

app.listen(process.env.PORT, err => {
  if (err) {
    throw new Error(err);
  }

  console.log(`\n  Stockboy at your service 👦\n`);
});
