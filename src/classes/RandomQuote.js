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
		fetch(url).then((res) => {
			// return res.json()
			console.log(res)
			console.log(res.ok)
			console.log(res.headers)
			console.log(res.body)
		})
	}
}

export default RandomQuote
