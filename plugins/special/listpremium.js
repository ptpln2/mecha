const fetch = require('node-fetch');

exports.run = {
usage: ['listpremium'],
hidden: ['listprem'],
category: 'special',
async: async (m, { func, mecha, setting }) => {
const data = Object.values(global.db.users).filter(v => v.premium)
if (data.length == 0) return m.reply('*Empty data.*')
let caption = '乂  *L I S T  P R E M I U M*\n'
caption += data.map((v, i) => `\n${i + 1}. @${v.jid.split('@')[0]}\n◦  Expire: ${v.expired.premium === 'PERMANENT' ? 'PERMANENT' : func.expireTime(v.expired.premium)}`).join('\n')
await (setting.fakereply ? mecha.sendMessageModify(m.chat, caption, m, {
title: global.header,
body: global.footer,
thumbnail: await (await fetch(setting.cover)).buffer(),
largeThumb: true,
expiration: m.expiration
}) : mecha.reply(m.chat, caption, m, {
expiration: m.expiration
}))
}
}