const express = require("express")
const quotes = require("./data/quotes")
const app = express()
const PORT = 3000

function getRandomQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length)

	return quotes[randomIndex]
}

app.get("/quotes/random-single", (req, res) => {
	console.log(req.headers["user-agent"])

	const randomQuote = getRandomQuote()
	res.json(randomQuote)
})

app.listen(PORT, () => {
	console.log(`Example app on port ${PORT}`)
})
