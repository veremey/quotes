import quotes from "../data/quotes.js"
import Quote from "./Quote.js"
import MathUtils from "../utils/math.js"

class RandomQuote {
	static getRandomQuote() {
		const randomIndex = MathUtils.generateRandomInt(quotes.length)
		const { id, text, author } = quotes[randomIndex]
		return new Quote(id, text, author)
	}

	static async getRandomQuoteViaAPI() {
		try {
			const url = "https://api.quotable.io/random"
			const response = await fetch(url)
			const quote = await response.json()
			const { _id: id, content: text, author } = quote

			return new Quote(id, text, author)
		} catch (error) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}
	}
}

export default RandomQuote
