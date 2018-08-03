const insults = [
  "Boooo!",
  "Wow! That was impressively wrong!",
  "The worst one today!",
  "n00b alert!",
  "lol",
  "u suk",
  "What is this...? Amateur hour!?",
  "Nice try.",
  "What if... you type an actual command the next time!",
  "Y u no speak computer???",
  "This is not Windows",
  "Perhaps you should leave the command line alone...",
  "error code: 1D10T",
  "Pro tip: type a valid command!",
  "(╯°□°）╯︵ ┻━┻",
  "Perhaps computers is not for you...",
  "This is why nobody likes you.",
  "Are you even trying?!",
  "Try using your brain the next time!",
  "Commands, random gibberish, who cares!",
  "Typing incorrect commands, eh?",
  "Are you always this stupid or are you making a special effort today?!",
  "Dropped on your head as a baby, eh?",
  "I don't know what makes you so stupid, but it really works.",
  "You are not as bad as people say, you are much, much worse.",
  "Two wrongs don't make a right, take your parents as an example.",
  "You must have been born on a highway because that's where most accidents happen.",
  "If ignorance is bliss, you must be the happiest person on earth.",
  "If shit was music, you'd be an orchestra."
];

const getRandomInsult = () =>
  insults[Math.floor(Math.random() * insults.length)];

module.exports = {
  insults,
  getRandomInsult
};
