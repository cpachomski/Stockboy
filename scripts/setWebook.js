require("dotenv").config();
const axios = require("axios");

const newWebookUrl = (token, endpoint) =>
  `https://api.telegram.org/bot${token}/setWebhook?url=${endpoint}/stockboy`;

console.log("SETTING NEW ENDPOINT", `${process.env.LOCALTUNNEL}/stockboy`);
axios
  .get(newWebookUrl(process.env.TELEGRAM_BOT_TOKEN, process.env.LOCALTUNNEL))
  .then(res => {
    console.log("ENDPOINT SET");
    return;
  })
  .catch(e => {
    throw new Error(e);
  });
