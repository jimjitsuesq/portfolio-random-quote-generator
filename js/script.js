const quotes = [
  {
    quote: "Everythings's got to end sometime. Otherwise, nothing would ever get started.", 
    source: 'The Eleventh Doctor (Matt Smith)', 
    citation: 'A Christmas Carol', 
    year: '2010', 
    tags: 'Wisdom' 
  },
  {
    quote: "You're not gonna make the world any better by shouting at it!",
    source: 'Wilfred Mott (Bernard Cribbins)', 
    citation: 'Turn Left', 
    year: '2008', 
    tags: 'Wisdom' 
  },
  {
    quote: "Good men don't need rules.", 
    source: 'The Eleventh Doctor (Matt Smith)', 
    citation: 'A Good Man Goes to War', 
    year: '2011', 
    tags: 'Wisdom' 
  },
  {
    quote: "The way I see it, every life is a pile of good things and... bad things. The good things don't always soften the bad things, but vice versa, the bad things don't necessarily spoil the good things or make them unimportant.", 
    source: 'The Eleventh Doctor (Matt Smith)', 
    citation: 'Vincent and the Doctor', 
    year: '2010', 
    tags: 'Wisdom' 
  },
  {
    quote: "One may tolerate a world of demons for the sake of an angel.", 
    source: 'Reinette Poisson (Sophia Myles)', 
    citation: 'The Girl in the Fireplace', 
    year: '2006', 
    tags: 'Wisdom' 
  },
  {
    quote: "If we're going to die, let's die looking like a Peruvian folk band.", 
    source: 'Amy Pond (Karen Gillan)', 
    citation: "Amy's Choice", 
    year: '2010', 
    tags: 'Humorous' 
  },
  {
    quote: "Great men are forged in fire. It is the privilege of lesser men to light the flame.", 
    source: 'The War Doctor (William Hurt)', 
    citation: 'The Day of the Doctor', 
    year: '2013', 
    tags: 'Inspirational' 
  },
  {
    quote: "Some people live more in twenty years than others do in eighty. It's not the time that matters. It's the person.", 
    source: 'The Tenth Doctor (David Tennant)', 
    citation: 'Journey to the Centre of the TARDIS', 
    year: '2013', 
    tags: 'Wisdom' 
  },
  {
    quote: "I'm sorry. I'm so sorry.",
    source: 'The Tenth Doctor (David Tennant)',
    tags: 'Memorable',
  },
  {
    quote: "What! What? What.",
    source: 'The Tenth Doctor (David Tennant)',
    tags: 'Humorous',
  }
];

/***
 * `getRandomQuote` function: Randomly chooses one of the quotes and returns that object.
***/

function getRandomQuote(arr) {
  let randomX = Math.floor(Math.random() * arr.length);
  return arr[randomX];
}

function randomBackgroundColor() {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
  return randomRGB;
}

/***
 * `printQuote` function. Calls the getRandomQuote function to return each part of the object with HTML formatting and returns the formatted HTML.  Also randomly sets a new background color each time the quote is changed.
***/

function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let html = '' 
  html += `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`
  if (randomQuote.citation !== undefined) {
    html += `
    <span class="citation">${randomQuote.citation}</span>`
    if (randomQuote.year !== undefined) {
    html += `
    <span class="year">${randomQuote.year}, ${randomQuote.tags} Quote</span></p>`
    }
  } else {
    html += `
    , ${randomQuote.tags} Quote</p>`
  };
  document.body.style.backgroundColor = randomBackgroundColor(); 
  document.getElementById('quote-box').innerHTML = html;
  return;
};
printQuote();

/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 *  Reload Page Every 10 Seconds
***/

// function reloadPage () {
//   window.location.reload();
// }
//setInterval(reloadPage, 10000);