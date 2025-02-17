const express = require("express")
const cors = require("cors")
const quotes = require("./data/quotes")
const app = express()
const PORT = 3000

function getRandomQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length)
	return quotes[randomIndex]
}

app.use(cors())
app.get("/quotes/random-single", (req, res) => {
	const randomQuote = getRandomQuote()
	res.json(randomQuote)
})

app.listen(PORT, () => {
	console.log(`Example app on port ${PORT}`)
})
