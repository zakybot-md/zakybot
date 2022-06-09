let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*

*😈Link Gc Owner* : https://chat.whatsapp.com/FZEid847RlmJWNBMnSyXPI

*💌 Nama* : ZakY
*✉️ Nama Bot* : Zakybot-Md
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 10/02/2007
*🎨 Umur* : 16
*🧮 Kelas* : 1 sma
*🧩 Hobby* : Nonton Hanime, Chatting, Recode script bot
*💬 Sifat* : Baik, Gak pernah marah. 
*🗺️ Tinggal* : Indonesia, Pekanbaru, Riau, Kotatengah
*❤️ Suka* : warnah kuning & biru, Hanime, waifu, loli, trap, furry, kucing
*💔 Benci* : autis, anak epep, seleb, gaksuka orang songong

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : Private
*🇫  Facebook* : Zaky Gz
*🏮 Chanel Youtube* : Not
*🐈 Github:* Zakybot-Md

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler