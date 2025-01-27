import quotes from "../data/quotes.js"
import MathUtils from "../utils/math.js"

function getRandomQuote() {
	return { ...quotes[MathUtils.generateRandomInt(quotes.length)] }
}

export { getRandomQuote }
