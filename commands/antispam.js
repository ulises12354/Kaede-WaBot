
  import db from '#db';

export async function before({ msg, sock, groupMetadata, participants, isAdmins, isBotAdmins }) {
  if (!msg.isGroup || !msg.text) return
  const MAX_CHARS = 15000
  if (msg.text.length < MAX_CHARS) return
  if (!groupMetadata) return
  const botId = sock.user.id.split(':')[0] + '@s.whatsapp.net'
  const isSelf = db.getSettings(botId).self ?? false;
  if (isSelf) return
  const chat = db.getChat(msg.chat)
  const primaryBotId = chat?.primaryBot
  const isPrimary = !primaryBotId || primaryBotId === botId
  const userName = db.getUser(msg.sender)?.name || msg.pushName || 'Usuario'
  
  if (isAdmins || !isBotAdmins || !isPrimary) return

  await sock.sendMessage(msg.chat, { delete: { remoteJid: msg.chat, fromMe: false, id: msg.key.id, participant: msg.key.participant }})
  
  await sock.reply(msg.chat, `> ꕥ se ha eliminado a *${userName}* del grupo por protección contra spam. [Mensaje demasiado largo].`, null)
  await sock.groupParticipantsUpdate(msg.chat, [msg.sender], 'remove')
}