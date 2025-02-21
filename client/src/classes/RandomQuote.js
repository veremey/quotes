import quotes from "../data/quotes.js"
import Quote from "./Quote.js"
import MathUtils from "../utils/math.js"
import { config } from "../../config.js"

class RandomQuote {
	static getRandomQuote() {
		const randomIndex = MathUtils.generateRandomInt(quotes.length)
		const { id, text, author } = quotes[randomIndex]
		return new Quote(id, text, author)
	}

	static async getRandomQuoteViaPublicAPI() {
		const url = `${config.PUBLIC_API_URL}/random`
		const options = {
			headers: { "Content-Type": "application/json" },
		}

		try {
			const response = await fetch(url, options)
			const quote = await response.json()
			const { _id: id, content: text, author } = quote

			return new Quote(id, text, author)
		} catch (error) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}
	}

	static async getRandomQuoteViaOwnAPI() {
		const url = config.OWN_API_URL + "/quotes/random-single"
		const options = { headers: { "Content-Type": "application/json" } }
		try {
			const response = await fetch(url, options)
			const quote = await response.json()
			const { id, text, author } = quote
			return new Quote(id, text, author)
		} catch (error) {
			console.error(error)
		}
	}
}

export default RandomQuote
