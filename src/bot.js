const axios = require("axios");
const Telegraf = require("telegraf");
const express = require("express");
const controller = require("./controller");

const PORT = 3000;
const stockboy = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
const app = express();

if (process.env.NODE_ENV === "production") {
  const setWebhookURI = `https://api.telegram.org/bot${
    process.env.TELEGRAM_BOT_TOKEN
  }/setWebhook?url=${process.env.NOW_URL}`;

  axios
    .get(setWebhookURI)
    .then(({ data }) => {
      if (data.ok) {
        setTimeout(() => {
          stockboy.telegram.setWebhook(`${process.env.NOW_URL}/stockboy`);
          app.use(stockboy.webhookCallback("/stockboy"));
          controller(stockboy);
        }, 5000);
      }
    })
    .catch(err => {
      throw new Error(err);
    });
} else {
  stockboy.startPolling();
  controller(stockboy);
}

app.get("/health", (req, res) => {
  return res.json({ NOW_URL: process.env.NOW_URL });
});

app.listen(PORT, err => {
  if (err) {
    throw new Error(err);
  }

  console.log(`\n  Stockboy at your service on port ${PORT} 👦 \n`);
});
