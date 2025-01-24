import quotes from "./data/quotes.js"
import Quote from "./Quote.js"
import { generateRandomInt } from "./utils/math.js"

class RandomQuote {
	static getRandomQuote() {
		const randomIndex = generateRandomInt(quotes.length)
		const { id, text, author } = quotes[randomIndex]
		return new Quote(id, text, author)
	}
}

export default RandomQuote
