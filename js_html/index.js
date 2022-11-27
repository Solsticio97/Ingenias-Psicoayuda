//fetch the quotes from the API
const getQuotes = async () => {
  const apiUrl = "https://apimocha.com/frasediaria/getall";
  try {
    const response = await fetch(apiUrl);
    quotes = (await response.json()).results;
    //pick a random quote from the array
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    //display the quote
    displayQuote(quote);

  } catch (error) {
    // Catch Error Here
  }
};

//display the quote
const displayQuote = (quote) => {
    const quoteText = document.createElement("p");
    var text = document.createTextNode(quote.quote);
    quoteText.appendChild(text);
    quoteText.classList.add("quote-text");
    let quoteAuthor = document.createElement("p");
    var text = document.createTextNode(quote.from ? quote.from : "Desconocido");
    quoteAuthor.appendChild(text);
    quoteText.classList.add("quote-author");

    const element = document.getElementById("quote");
    element.appendChild(quoteText);
    element.appendChild(quoteAuthor);
};

// On Load
getQuotes();
