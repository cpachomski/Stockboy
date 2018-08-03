require("dotenv").config();
const axios = require("axios");

const deleteUrl = token => `https://api.telegram.org/bot${token}/deleteWebhook`;

console.log("DELETING WEBHOOK");
axios
  .get(deleteUrl(process.env.TELEGRAM_BOT_TOKEN))
  .then(res => {
    console.log("WEBHOOK DELETED");
    return;
  })
  .catch(e => {
    throw new Error(e);
  });
