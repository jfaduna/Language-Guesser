const franc = require("franc")
const langs = require("langs")
const input = process.argv[2]
const langCode = franc(input)
if (langCode === 'und') {
    console.log("Language cannot be guessed. Try different sample text.")
} else {
    const language = langs.where("3", langCode)
    console.log("Best Guess: " + language.name)
}
