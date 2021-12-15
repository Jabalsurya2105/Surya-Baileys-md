/*
 * Create By Dika Ardnt.
 * Contact Me on wa.me/6288292024190
 * Follow https://github.com/DikaArdnt
   
 * Recode By Surya
 * Contact Me on wa.me/62895415497664
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '2bcaf378a3f0',
}

// Other
global.ownername = 'Surya'
global.owner = ['62895415497664']
global.packname = 'Created By Surya ❤️️'
global.author = '62895415497664'
global.sessionName = 'SuryaMd'
global.prefa = ['','!','.','🐦','🐤','🗿','🤤']
global.sp = '⭔'
global.mess = {
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    done: 'Done',
    wait: '```Loading...```',
}
global.thumb = fs.readFileSync('./lib/surya.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
