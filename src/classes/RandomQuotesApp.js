import RandomQuote from "./RandomQuote.js"

class RandomQuotesApp {
	constructor() {
		this.randomQuoteBtn = document.getElementById("random-quote-btn")
		this.randomQuoteAPIBtn = document.getElementById("random-quote-api-btn")
		this.quoteTextElement = document.getElementById("quote-text")
		this.quoteAuthorElement = document.getElementById("quote-author")
		this.currentQuote = null

		this.init()
	}

	displayCurrentQuote() {
		this.quoteTextElement.textContent = this.currentQuote.formatText()
		this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor()
	}

	getRandomQuote() {
		const randomQuote = RandomQuote.getRandomQuote()
		this.currentQuote = randomQuote
		this.displayCurrentQuote()
	}

	async getRandomQuoteViaAPI() {
		try {
			const quote = await RandomQuote.getRandomQuoteViaAPI()
			this.currentQuote = quote
			this.displayCurrentQuote()
		} catch (e) {
			throw new Error(e)
		}
	}

	init() {
		this.randomQuoteBtn.addEventListener("click", () => this.getRandomQuote())
		this.randomQuoteAPIBtn.addEventListener("click", () => this.getRandomQuoteViaAPI())
	}
}

export default RandomQuotesApp
