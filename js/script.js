/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/* Create quotes array, to hold all quote objects
Quote and source are required on all objects, citation and year only on 1 */

var quotes = [
  {
    quote: "More and more often, we all make silent calculations about who is entitled to what rights, and who is not.",
    source: "Matt Taibbi",
    citation: "The Divide",
    year: "2014"
  },
  {
    quote: "He suggested a new definition of the nerd: a person who knows his own mind well enough to mistrust it.",
    source: "Michael Lewis",
    citation: "The Undoing Project",
    year: "2016"
  },
  {
    quote: "To be fully alive, fully human, and completely awake is to be continually thrown out of the nest.",
    source: "Pema Chodron",
    citation: "When Things Fall Apart",
    year: "1996"
  },
  {
    quote: "We're all building our world, right now, in real time. Let's build it better.",
    source: "Lindy West",
    citation: "Shrill: Notes from a Loud Woman",
    year: "2016"
  },
  {
    quote: "It is a mark of great spiritual laziness to take the world we inherit as a given.",
    source: "Ethan Nichtern",
    citation: "The Road Home",
    year: "2015"
  },
  {
    quote: "I take this very scientific attitude that everything you’ve learned is just provisional, that it’s always open to recantation, refutation, or questioning.",
    source: "Aaron Swartz"
  }
];

// Check to make sure my array is rendering as expected
console.log(quotes);

/* Set up function to generate a random number based on the number of quotes. */

function getRandomQuote() {
  // Generate random number using total number of available quotes
  var randomNumber = Math.floor(Math.random() * quotes.length);
  // Use the random number to return a random quote
  return quotes[randomNumber];
}

/* Build a function to translate quote object into the provided HTML template */

function printQuote() {

  // Run the getRandomQuote function to return the random quote
  var selectedQuote = getRandomQuote();

  // Set up a variable to hold the HTML to be injected into the template
  var randomQuoteHTML = '';

  // Concatenate the HTML to be used in the template
  randomQuoteHTML ='<p class="quote">' + selectedQuote.quote + '</p>';
  randomQuoteHTML +='<p class="source">' + selectedQuote.source;

  // Since our only required properties are quote and source, check that the citation exists before rendering
  if(selectedQuote.citation){
    randomQuoteHTML += '<span class="citation">'+ selectedQuote.citation +'</span>';
  }

  // Since our only required properties are quote and source, check that the year exists before rendering
  if(selectedQuote.year){
    randomQuoteHTML += '<span class="year">'+ selectedQuote.year+'</span>';
  }

  // Close my paragrap
  randomQuoteHTML += '</p>';
  
  // Add concatenated markup to the wrapper #quote-box
  document.getElementById('quote-box').innerHTML = randomQuoteHTML;
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.