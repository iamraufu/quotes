document.getElementById('header').innerHTML = `
<h1>Inspirational Quotes</h1>
<a href="https://github.com/iamraufu"><img src="image/g.png" id="github"></a>
`;

document.getElementById('container').innerHTML = `
<button onclick="getQuote()" id="btn">Click To Get Quotes</button>
<div id="quotes"></div>
`;

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