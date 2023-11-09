const franc = require("franc")
const langs = require("langs")
const input = process.argv[2]
const langCode = franc(input)
if (langCode === 'und') {
    console.log("Sorry, Couldn't figure it out. Try different sample text.")
} else {
    const language = langs.where("3", langCode)
    console.log(language.name)
}
