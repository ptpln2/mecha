const fs = require('fs');
const path = require('path');

exports.run = {
usage: ['delplugin'],
hidden: ['dp'],
use: 'path',
category: 'owner',
async: async (m, { func, mecha, plugins }) => {
if (!m.text) return m.reply(`Format salah!\nContoh : *${m.cmd} special/ping*`);
try {
let cmd = fs.existsSync(path.join(process.cwd(), 'plugins', `${m.text}.js`))
if (!cmd) return m.reply(`Plugin '${m.text}' tidak ditemukan!\n\n${Object.keys(plugins).map(item => item?.replace('plugins/', '')).join('\n')}`);
await fs.unlinkSync(path.join(process.cwd(), 'plugins', `${m.text}.js`));
mecha.sendReact(m.chat, '✅', m.key)
} catch (e) {
mecha.sendReact(m.chat, '❌', m.key)
}
},
owner: true
}