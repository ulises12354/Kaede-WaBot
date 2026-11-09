import db from '#db'

export default {
  command: ['del', 'delete'],
  category: 'grupo',
  run: async ({ msg, sock, usedPrefix, command, isAdmins, isBotAdmins }) => {
    try {
      if (!msg.quoted) {
        return msg.reply('《✧》 Responde al mensaje que quieres borrar.');
      }

      if (!msg.isGroup) {
        await sock.sendMessage(msg.chat, { delete: msg.quoted.key });
        return;
      }

      const chat = db.getChat(msg.chat)
      const quotedId = msg.quoted?.id;
      if (typeof chat.wimage === 'string') {
        chat.wimage = JSON.parse(chat.wimage || '{}');
      }

      if (quotedId && chat?.rolls?.[quotedId] || quotedId && chat?.wimage?.[quotedId]) {
        return msg.reply('《✧》 No puedes eliminar el mensaje citado.');
      }

      const botId = sock.user.id.split(':')[0] + '@s.whatsapp.net'
      const quotedSender = msg.quoted.sender;

      if (quotedSender === sock.user.lid.split(':')[0] + '@lid' || quotedSender === botId) {
        await sock.sendMessage(msg.chat, { delete: { remoteJid: msg.chat, fromMe: true, id: quotedId }});
        return;
      }

      if (!isAdmins) {
        return msg.reply('《✧》 Necesitas ser admin para borrar mensajes de otros.');
      }

      if (!isBotAdmins) {
        return msg.reply('《✧》 El bot necesita ser admin para borrar mensajes.');
      }

      await sock.sendMessage(msg.chat, {
        delete: msg.quoted.key
      });

    } catch (e) {
      msg.reply(`> Ocurrió un error al ejecutar *${usedPrefix + command}*.\n> [Error: *${e.message}*]`);
    }
  }
};