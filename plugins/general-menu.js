//Make & Help By
//Johannes & Papah-Chan
import jimp from 'jimp'
import fs from 'fs'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
//*****************FOTO USER*********************
let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
 try {
 	pp = await conn.profilePictureUrl(m.sender, 'image')
} catch (e) {

  } finally {
}

let tags = {}
const defaultMenu = {
  before: `\n> Date: %date\n> Time: %time \n> Runtime: %uptime\n%readmore`,
  header: '*❏═┅═━–〈 %category*',
  body: '┊› %cmd %islimit %isPremium',
  footer: '',
  after: '',
}

try {
    let name = m.pushName || conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Jakarta'
    })
    let time = d.toLocaleTimeString(locale, { timeZone: 'Asia/Jakarta' })
    time = time.replace(/[.]/g, ':')
    let _uptime
    if (process.send) {
      process.send('uptime')
      _uptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
      let vn = './media/tante-tante.mp3'
    let uptime = clockString(_uptime)
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? 'Ⓛ' : '')
                .replace(/%isPremium/g, menu.premium ? 'Ⓟ' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.sendFile(m.chat, bzz, 'bzz.opus', null, m, true)
    let template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
			         templateMessage: {
             hydratedTemplate: {
                 hydratedContentText: text.trim(),
                 hydratedFooterText: 'Made By ZakY\nMy Guru',
                 "headerType": "DOCUMENT", 
                 "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ah9LXq1Z_XnRLzlVnZSt6_yWxC6mp20xTpZRSJxc7TUP.enc",
            "mimetype": "application/pdf",
            "title": "johannes.pdf",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "99999999999999",
            "pageCount": 99999999999999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "Marin-MD Bot WhatsApp",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7118-24/35150115_287008086621545_8250021012380583765_n.enc?ccb=11-4&oh=6f0f730e5224c054969c276a6276a920&oe=61A21F46",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": await (await require('node-fetch')(pp)).buffer(),},
                 hydratedButtons: [{
                     urlButton: {
                         displayText: 'MY WEB',
               url: 'https://youtube.com/channel/UC3zScvuQfMxqiTC5x_JUEng'
             }

           },
             {
             urlButton: {
               displayText: 'MY GROUP',
               url: 'https://chat.whatsapp.com/GngfXIF8XmgHf9Gm7MQFps'
             }

           },
           {
            quickReplyButton: {
              displayText: 'Owner',
              id: '.owner',
            }

          },
              {
            quickReplyButton: {
              displayText: 'SC',
              id: '.sc',
                     }
                 }
                 ]
             }
         }
     }), { userJid: m.sender, quoted: m});
     //conn.reply(m.chat, text.trim(), m)
     return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['m']
handler.tags = ['general']
handler.command = /^(m)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}