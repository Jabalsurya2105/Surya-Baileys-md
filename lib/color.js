const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const SuryaLog = (text, color) => {
	return !color ? chalk.cyan('[SURYA] ') + chalk.green(text) : chalk.cyan('[SURYA] ') + chalk.keyword(color)(text)
}

module.exports = {
	color,
	bgcolor,
	SuryaLog
}
