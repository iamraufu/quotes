function getQuote() {
    document.getElementById('quotes').innerText = "";
    fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = quotes => {
    document.getElementById('btn').style.display = "none"
    quotes.forEach(quote => {
        const quotesContainer = document.getElementById('quotes');
        const quotesP = document.createElement('p')
        quotesP.innerHTML = `
        <P class="quote">${quote.text}
        <small id="author">- ${quote.author}</small></p>
    `
        quotesContainer.appendChild(quotesP);
    });
}