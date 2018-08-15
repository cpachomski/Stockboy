const triggers = require("./stock");

const initBotListeners = stockboy => {
  Object.entries(triggers).forEach(t => {
    const { trigger, handler } = t[1](stockboy);

    stockboy.hears(trigger, handler);
  });
};

module.exports = {
  initBotListeners
};
