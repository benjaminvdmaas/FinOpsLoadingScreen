document.addEventListener("DOMContentLoaded", () => {
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");
  
    const randomQuote = getRandomQuote();
    quoteText.textContent = randomQuote.text;
    quoteAuthor.textContent = `— ${randomQuote.author}`;
  
    // Optional: Add a fade-out effect after a few seconds
    setTimeout(() => {
      quoteText.style.opacity = 0;
      quoteAuthor.style.opacity = 0;
    }, 5000); // 5 seconds
  });
  