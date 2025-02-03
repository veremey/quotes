import quotes from "../data/quotes.js"
import Quote from "./Quote.js"
import MathUtils from "../utils/math.js"

class RandomQuote {
	static getRandomQuote() {
		const randomIndex = MathUtils.generateRandomInt(quotes.length)
		const { id, text, author } = quotes[randomIndex]
		return new Quote(id, text, author)
	}

	static getRandomQuoteViaAPI() {
		const url = "https://api.quotable.io/random"
		fetch(url)
			.then((res) => {
				return res.json()
			})
			.then((quote) => {
				console.log(quote)
				// const id = quote._id
				// const text = quote.content
				// const author = quote.author
				// the same ^^
				const { _id: id, content: text, author } = quote

				return new Quote(id, text, author)
			})
			.catch((error) => console.log("ERROR: ", error))
	}
}

export default RandomQuote
