import db from '#db'

const pickRandom = list => list[Math.floor(Math.random() * list.length)]
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export default {
  command: ['doxear', 'doxxeo', 'doxeo'],
  category: 'fun',
  run: async ({ sock, msg, command, usedPrefix }) => {
    try {
      let userId = msg.mentionedJid?.[0] || msg.quoted ? msg.quoted?.sender : null

      if (!userId) {
        return msg.reply('❀ Por favor, menciona o responde a un usuario.')
      }
      if (userId === global.owner[0] + '@s.whatsapp.net') return msg.reply('《✧》 No puedes *doxear* al creador del bot.')
      let userName = db.getUser(userId)?.name || await sock.getName(userId).catch(() => userId.split('@')[0])

      let start = `ꕥ *Iniciando doxeo*...`

      let boost = `*${pickRandom(['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'])}%*`
      let boost2 = `*${pickRandom(['21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'])}%*`
      let boost3 = `*${pickRandom(['41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'])}%*`
      let boost4 = `*${pickRandom(['61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80'])}%*`
      let boost5 = `*${pickRandom(['81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100'])}%*`

      const { key } = await sock.sendMessage(msg.chat, { text: start }, { quoted: msg })

      await delay(1000)
      await sock.sendMessage(msg.chat, { text: boost, edit: key })

      await delay(1000)
      await sock.sendMessage(msg.chat, { text: boost2, edit: key })

      await delay(1000)
      await sock.sendMessage(msg.chat, { text: boost3, edit: key })

      await delay(1000)
      await sock.sendMessage(msg.chat, { text: boost4, edit: key })

      await delay(1000)
      await sock.sendMessage(msg.chat, { text: boost5, edit: key })

      let doxeo = `❀ *Persona doxeada*\n\n✦ ${new Date().toLocaleDateString()}\n✧ ${new Date().toLocaleTimeString()}\n\n✰ Resultados:\n\n*Nombre:* ${userName}\n*Ip:* 92.28.211.234\n*N:* 43 7462\n*W:* 12.4893\n*SS NUMBER:* 6979191519182016\n*IPV6:* fe80::5dcd::ef69::fb22::d9888%12\n*UPNP:* Enabled\n*DMZ:* 10.112.42.15\n*MAC:* 5A:78:3E:7E:00\n*ISP:* Ucom universal \n*DNS:* 8.8.8.8\n*ALT DNS:* 1.1.1.1 \n*DNS SUFFIX:* Dlink\n*WAN:* 100.23.10.15\n*WAN TYPE:* private nat\n*GATEWAY:* 192.168.0.1\n*SUBNET MASK:* 255.255.0.255\n*UDP OPEN PORTS:* 8080, 80\n*TCP OPEN PORTS:* 443\n*ROUTER VENDEDOR:* ERICCSON\n*DEVICE VENDEDOR:* WIN32-X\n*CONNECTION TYPE:* TPLINK COMPANY\n*ICMPHOPS:* 192.168.0.1, 192.168.1.1, 100.73.43.4\nhost-132.12.32.167.ucom.com\nhost-132.12.111.ucom.com\n36.134.67.189, 216.239.78.11\nSof02s32inf14.1e100.net\n*HTTP:* 192.168.3.1:433-->92.28.211.234:80\n*Http:* 192.168.625-->92.28.211.455:80\n*Http:* 192.168.817-->92.28.211.8:971\n*Upd:* 192.168.452-->92.28.211:7265288\n*Tcp:* 192.168.682-->92.28.211:62227.7\n*Tcp:* 192.168.725-->92.28.211:67wu2\n*Tcp:* 192.168.629-->92.28.211.167:8615\n*EXTERNAL MAC:* 6U:77:89:ER:O4\n*MODEM JUMPS:* 64`.trim()

      await sock.sendMessage(msg.chat, { text: doxeo, edit: key, mentions: [userId] }, { quoted: msg })

    } catch (e) {
      msg.reply(`> Error:\n${e.message}`)
    }
  }
}