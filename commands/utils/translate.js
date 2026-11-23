import translate from '@vitalets/google-translate-api'

export default {
  command: ['translate', 'trad', 'traducir'],
  category: 'utils',
  run: async ({ sock, msg, args, usedPrefix, command }) => {
    const defaultLang = 'es'
    if (!args[0] && !msg.quoted) return msg.reply('《✧》 Ingresa el idioma seguido del texto que quieras traducir.')
    let lang = args[0]
    let text = args.slice(1).join(' ') || msg.quoted?.body
    if ((lang || '').length !== 2) {
      lang = defaultLang
      text = args.join(' ') || msg.quoted?.body
    }
    try {
      await msg.react('🕒')
      const result = await translate(text, { to: lang, autoCorrect: true })
      await sock.sendMessage(msg.chat, { text: result.text }, { quoted: msg })
      await msg.react('✔️')
    } catch (e) {
      await msg.react('✖️')
      await msg.reply(`> An unexpected error occurred while executing command *${usedPrefix + command}*. Please try again or contact support if the issue persists.\n> [Error: *${e.message}*]`)
    }
  },
}