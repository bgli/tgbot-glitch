const Telegraf = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)

// Set Webhook
bot.telegram.setWebhook('https://domainmu.glitch.me/webhook')


// Start builtin Webhook
bot.startWebhook('/webhook', null, 3000)

// Listener
bot.on('text', (ctx) => ctx.reply('Hello Human')
