const fetch = require('node-fetch');

exports.run = {
usage: ['videogalau'],
hidden: ['vgalau', 'galau'],
category: 'quotes',
async: async (m, { func, mecha }) => {
let videogalau = await fetch('https://raw.githubusercontent.com/Jabalsurya2105/database/master/data/videogalau.json').then(response => response.json())
let result = videogalau.random()
await mecha.sendMessage(m.chat, {
video: {
url: result
},
caption: `Nih Video Galau nya..`,
mimetype: 'video/mp4'
}, {quoted: m, ephemeralExpiration: m.expiration})
},
limit: true
}