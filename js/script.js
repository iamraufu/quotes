setInterval(() => { getData() }, 5000)

function getData() {
    fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(data => displayData(data))
}
const displayData = quotes => {
    quotes.forEach(quote => {
        const quotesContainer = document.getElementById('quotes');
        const quotesP = document.createElement('p')
        quotesDiv.innerHTML = `
        <h1>GET RANDOM QUOTES IN EVERY FIVE SECONDS</h1>
        <P>${quote.text}<br>
        - ${quote.author}</p>
    `
        quotesContainer.appendChild(quotesP)
    });
}