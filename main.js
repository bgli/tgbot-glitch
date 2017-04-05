const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
const appName = process.env.PROJECT_NAME
const appPort = process.env.PORT

// Set Webhook
bot.telegram.setWebhook(`https://${appName}.glitch.me/webhook`)


// Start builtin Webhook
bot.startWebhook('/webhook', null, appPort)

// Listener
bot.on('text', (ctx) => ctx.reply('Hello Human'))
