const quotes = [
  { quote: "Focus your energy.", author: "- Michael Saylor - " },
  { quote: "Guard your time.", author: "- Michael Saylor - " },
  { quote: "Train your mind.", author: "- Michael Saylor - " },
  { quote: "Train your body.", author: "- Michael Saylor - " },
  { quote: "Think for yourself.", author: "- Michael Saylor - " },
  { quote: "Curate your friends.", author: "- Michael Saylor - " },
  { quote: "Curate your environment.", author: "- Michael Saylor - " },
  { quote: "Keep your promises.", author: "- Michael Saylor - " },
  { quote: "Stay cheerful and constructive.", author: "- Michael Saylor - " },
  { quote: "Upgrade the world.", author: "- Michael Saylor - " },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// console.log(typeof todaysQuote); object임.

// quote.innerText = todaysQuote["quote"];
quote.innerText = todaysQuote.quote;
// author.innerText = todaysQuote["author"];
author.innerText = todaysQuote.author;
