import config from '../../config.cjs';
import moment from 'moment-timezone';

//𝐠𝐞𝐭𝐔𝐩𝐭𝐢𝐦𝐞

const uptimeSeconds = process.uptime();
const hours = Math.floor(uptimeSeconds / 3600);
const minutes = Math.floor((uptimeSeconds % 3600) / 60);
const seconds = Math.floor(uptimeSeconds % 60);

const menu = async (m, sock) => {
  const prefix = config.PREFIX;
  const mode = config.MODE;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const pushName = m.pushName || '𝐔𝐒𝐄𝐑';

  // Get current time and date
  const realTime = moment().tz("Asia/Karachi").format("HH:mm:ss");
  const realDate = moment().tz("Asia/Karachi").format("DD/MM/YYYY");

  let pushwish = "";
  if (realTime < "05:00:00") {
    pushwish = `𝙶𝙾𝙾𝙳 𝙽𝙸𝙶𝙷𝚃 🌌`;
  } else if (realTime < "12:00:00") {
    pushwish = `𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶 🌄`;
  } else if (realTime < "17:00:00") {
    pushwish = `𝙶𝙾𝙾𝙳 𝙰𝙵𝚃𝙴𝚁𝙽𝙾𝙾𝙽 🌅`;
  } else if (realTime < "20:00:00") {
    pushwish = `𝙶𝙾𝙾𝙳 𝙴𝚅𝙴𝙽𝙸𝙽𝙶 🌃`;
  } else {
    pushwish = `𝙶𝙾𝙾𝙳 𝙽𝙸𝙶𝙷𝚃 🌌`;
  }

  const sendCommandMessage = async (messageContent, quotedMsg = m) => {
    await sock.sendMessage(
      m.from,
      {
        text: messageContent,
        contextInfo: {
          isForwarded: true,
          forwardingScore: 999,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363290715861418@newsletter',
            newsletterName: "𝐩𝐨𝐩𝐤𝐢𝐝",
            serverMessageId: -1,
          },
          externalAdReply: {
            title: "🩷𝐩𝐨𝐩𝐤𝐢𝐝🩷",
            body: pushName,
            thumbnailUrl: 'https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp',
            sourceUrl: 'https://github.com/Popkiddevs/POPKID-XTECH',
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      },
      { quoted: quotedMsg }
    );
  };

  if (cmd === "menu") {
    const responseText = `╭───❍ *🎩𝐏𝐎𝐏𝐊𝐈𝐃🎩* ❍───╮  
│ 👤 *𝐔𝐒𝐄𝐑:* *${pushName}* \n│ ${pushwish}  
│ 🌐 *𝐌𝐎𝐃𝐄:* *${mode}*  
│ ⏰ *𝐓𝐈𝐌𝐄:* *${realTime}🇵🇰*  
│ 📅 *𝐃𝐀𝐓𝐄:* *${realDate}*  
│ 🤖 *𝐔𝐏𝐓𝐈𝐌𝐄:* *${hours}/${minutes}/${seconds}*
╰───────────────❍  

*📌 𝐌𝐄𝐍𝐔 𝐎𝐏𝐓𝐈𝐎𝐍𝐒:*  
1️⃣ 🕌 *𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐌𝐞𝐧𝐮*
2️⃣ ⬇️ *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮*
3️⃣ 🩷 *𝐀𝐢 𝐌𝐞𝐧𝐮*
4️⃣ 👥 *𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮*
5️⃣ 😇 *𝐋𝐨𝐠𝐨 𝐌𝐞𝐧𝐮*
6️⃣ ❤️‍🩹 *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮*
7️⃣ 💟 *𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮*
8️⃣ 🎁 *𝐄𝐱𝐭𝐫𝐚 𝐌𝐞𝐧𝐮* 
9️⃣ 🔍 *𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮*

➤ *Reply with a number (1-9) to select a menu.*  

*🎩𝐏𝐎𝐏𝐊𝐈𝐃 𝐗𝐓𝐄𝐂𝐇 𝐏𝐑𝐎𝐉𝐄𝐂𝐓𝐒🎩*`;

    const sentMessage = await sock.sendMessage(m.from, { text: responseText }, { quoted: m });

    sock.ev.on('messages.upsert', async (event) => {
      const receivedMessage = event.messages[0];
      if (!receivedMessage?.message?.extendedTextMessage) return;

      const receivedText = receivedMessage.message.extendedTextMessage.text.trim();
      if (receivedMessage.message.extendedTextMessage.contextInfo?.stanzaId !== sentMessage.key.id) return;

      let menuResponse = ``;
      switch (receivedText) {
        case "1":
          menuResponse = `╭───❍「 *💝𝐏𝐎𝐏𝐊𝐈𝐃💝* 」
│ 🧑‍💻 *𝐔𝐒𝐄𝐑:* ${pushName} ${pushwish}
│ 🌐 *𝐌𝐎𝐃𝐄:* *${mode}*
│ ⏰ *𝐓𝐈𝐌𝐄:* *${realTime}🇵🇰*
│ 📅 *𝐃𝐀𝐓𝐄:* *${realDate}*
│ 🤖 *𝐔𝐏𝐓𝐈𝐌𝐄:* *${hours}/${minutes}/${seconds}*
╰───────────❍
 ╭───❍「 *𝐈𝐒𝐋𝐀𝐌𝐈𝐂 𝐌𝐄𝐍𝐔* 」
*│* 🤎 *${prefix}𝐒𝐮𝐫𝐚𝐡𝐀𝐮𝐝𝐢𝐨*
*│* 🤎 *${prefix}𝐒𝐮𝐫𝐚𝐡𝐔𝐫𝐝𝐮*
*│* 🤎 *${prefix}𝐒𝐮𝐫𝐚𝐡𝐀𝐫𝐛𝐢𝐜*
*│* 🤎 *${prefix}𝐒𝐮𝐫𝐚𝐡𝐄𝐧𝐠*
*│* 🤎 *${prefix}𝐏𝐫𝐚𝐲𝐞𝐫𝐓𝐢𝐦𝐞*
*│* 🤎 *${prefix}𝐏𝐓𝐢𝐦𝐞*
*│* 🤎 *${prefix}𝐒𝐁𝐮𝐤𝐡𝐚𝐫𝐢*
 ╰───────────❍\n\n*_𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐏𝐎𝐏𝐊𝐈𝐃_*`;
          break;
        case "2":
          menuResponse = `╭───❍「 *😇𝐏𝐎𝐏𝐊𝐈𝐃😇* 」
│ 🧑‍💻 *𝐔𝐒𝐄𝐑:* *${pushName}* *${pushwish}*
│ 🌐 *𝐌𝐎𝐃𝐄:* *${mode}*
│ ⏰ *𝐓𝐈𝐌𝐄:* *${realTime}🇵🇰*
│ 📅 *𝐃𝐀𝐓𝐄*: *${realDate}* 
│ 🤖 *𝐔𝐏𝐓𝐈𝐌𝐄:* *${hours}/${minutes}/${seconds}*
╰───────────❍
 ╭───❍「 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔 」
*│* 💙 *${prefix}𝐒𝐨𝐧𝐠*
*│* 💙 *${prefix}𝐒𝐨𝐧𝐠2*
*│* 💙 *${prefix}𝐒𝐨𝐧𝐠3*
*│* 💙 *${prefix}𝐕𝐢𝐝𝐞𝐨*
*│* 💙 *${prefix}𝐕𝐢𝐝𝐞𝐨2*
*│* 💙 *${prefix}𝐕𝐢𝐝𝐞𝐨3*
*│* 💙 *${prefix}𝐅𝐁*
*│* 💙 *${prefix}𝐅𝐁2*
*│* 💙 *${prefix}𝐈𝐧𝐬𝐭𝐚*
*│* 💙 *${prefix}𝐈𝐧𝐬𝐭𝐚*
*│* 💙 *${prefix}𝐓𝐢𝐤𝐓𝐨𝐤*
*│* 💙 *${prefix}𝐓𝐢𝐤𝐓𝐨𝐤2*
*│* 💙 *${prefix}𝐓𝐢𝐤𝐬*
*│* 💙 *${prefix}𝐒𝐧𝐚𝐜𝐤*
*│* 💙 *${prefix}𝐓𝐰𝐞𝐞𝐓*
*│* 💙 *${prefix}𝐀𝐩𝐤*
╰───────────❍\n\n*_𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐏𝐎𝐏𝐊𝐈𝐃_*`;
          break;
        case "3":
          menuResponse = `╭───❍「 *🤎𝐏𝐎𝐏𝐊𝐈𝐃🤎* 」
│ 🧑‍💻 *𝐔𝐒𝐄𝐑:* *${pushName} ${pushwish}*
│ 🌐 *𝐌𝐎𝐃𝐄:* *${mode}*
│ ⏰ *𝐓𝐈𝐌𝐄:* *${realTime}🇵🇰*
│ 📅 *𝐃𝐀𝐓𝐄: *${realDate}*  
│ 🤖 *𝐔𝐏𝐓𝐈𝐌𝐄* : *${hours}/${minutes}/${seconds}*
╰───────────❍
 ╭───❍「 *𝐀𝐈 𝐌𝐄𝐍𝐔* 」
*│* 🩵 *${prefix}𝐀𝐈*
*│* 🩵 *${prefix}𝐆𝐏𝐓*
*│* 🩵 *${prefix}𝐁𝐥𝐚𝐜𝐤𝐁𝐨𝐱*
*│* 🩵 *${prefix}𝐈𝐦𝐚𝐠𝐢𝐧𝐞*
*│* 🩵 *${prefix}𝐈𝐦𝐚𝐠𝐢𝐧𝐞2*
*│* 🩵 *${prefix}𝐈𝐦𝐚𝐠𝐢𝐧𝐞3*
 ╰───────────❍\n\n*_𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐏𝐎𝐏𝐊𝐈𝐃_*
`;
          break;
        case "4":
          menuResponse = `╭───❍「 *💖𝐏𝐎𝐏𝐊𝐈𝐃💖* 」
│ 🧑‍💻 *𝐔𝐒𝐄𝐑:* *${pushName} ${pushwish}*
│ 🌐 *𝐌𝐎𝐃𝐄:* *${mode}*
│ ⏰ *𝐓𝐈𝐌𝐄:* *${realTime}🇵🇰*
│ 📅 *𝐃𝐀𝐓𝐄:* *${realDate}*  
│ 🤖 *𝐔𝐏𝐓𝐈𝐌𝐄:* *${hours}/${minutes}/${seconds}*
╰───────────❍
 ╭───❍「 *𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔* 」
*│* 💮 *${prefix}𝐓𝐚𝐠𝐀𝐥𝐥*
*│* 💮 *${prefix}𝐇𝐢𝐝𝐞𝐓𝐚𝐠*
*│* 💮 *${prefix}𝐎𝐩𝐞𝐧*
*│* 💮 *${prefix}𝐂𝐥𝐨𝐬𝐞*
*│* 💮 *${prefix}𝐀𝐝𝐝*
*│* 💮 *${prefix}𝐈𝐧𝐯𝐢𝐭𝐞*
*│* 💮 *${prefix}𝐊𝐢𝐜𝐊*
*│* 💮 *${prefix}𝐃𝐢𝐬*
*│* 💮 *${prefix}𝐀𝐧𝐭𝐢𝐋𝐢𝐧𝐤*
 ╰───────────❍\n\n*_𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐏𝐎𝐏𝐊𝐈𝐃_*`;
          break;
        case "5":
          menuResponse = `╭───❍「 *🧊𝐏𝐎𝐏𝐊𝐈𝐃🧊* 」
│ 🧑‍💻 *𝐔𝐒𝐄𝐑:* *${pushName} ${pushwish}*
│ 🌐 *𝐌𝐎𝐃𝐄:* *${mode}*
│ ⏰ *𝐓𝐈𝐌𝐄:* *${realTime}🇵🇰*
│ 📅 *𝐃𝐀𝐓𝐄:* *${realDate}*  
│ 🤖 *𝐔𝐏𝐓𝐈𝐌𝐄:* *${hours}/${minutes}/${seconds}*
╰───────────❍
 ╭───❍「 *𝐋𝐎𝐆𝐎 𝐌𝐄𝐍𝐔* 」
*│* 💙 *${prefix}𝐋𝐨𝐆𝐨*
*│* 💙 *${prefix}𝐆𝐥𝐨𝐬𝐬𝐲𝐒𝐢𝐥𝐯𝐞𝐫*
*│* 💙 *${prefix}𝐖𝐫𝐢𝐭𝐞𝐓𝐞𝐱𝐭*
*│* 💙 *${prefix}𝐁𝐥𝐚𝐜𝐤𝐏𝐢𝐧𝐤𝐋𝐨𝐠𝐨*
*│* 💙 *${prefix}𝐆𝐥𝐢𝐭𝐜𝐡𝐓𝐞𝐱𝐭*
*│* 💙 *${prefix}𝐀𝐝𝐯𝐚𝐧𝐜𝐞𝐝𝐆𝐥𝐨𝐰*
*│* 💙 *${prefix}𝐓𝐲𝐩𝐨𝐆𝐫𝐚𝐩𝐡𝐲𝐓𝐞𝐱𝐭*
*│* 💙 *${prefix}𝐏𝐢𝐱𝐞𝐥𝐆𝐥𝐢𝐭𝐜𝐡*
*│* 💙 *${prefix}𝐍𝐞𝐨𝐧𝐆𝐥𝐢𝐭𝐜𝐡*
*│* 💙 *${prefix}𝐃𝐞𝐥𝐞𝐭𝐢𝐧𝐠𝐓𝐞𝐱𝐭*
*│* 💙 *${prefix}𝐁𝐥𝐚𝐜𝐤𝐏𝐢𝐧𝐤𝐒𝐭𝐲𝐥𝐞*
*│* 💙 *${prefix}𝐆𝐥𝐨𝐰𝐢𝐧𝐠𝐓𝐞𝐱𝐭*
*│* 💙 *${prefix}𝐔𝐧𝐝𝐞𝐫𝐖𝐚𝐭𝐞𝐫*
*│* 💙 *${prefix}𝐋𝐨𝐠𝐨𝐌𝐚𝐤𝐞𝐫*
*│* 💙 *${prefix}𝐂𝐚𝐫𝐭𝐨𝐨𝐧𝐒𝐭𝐲𝐥𝐞*
*│* 💙 *${prefix}𝐏𝐚𝐩𝐞𝐫𝐂𝐮𝐭*
*│* 💙 *${prefix}𝐌𝐮𝐥𝐭𝐢𝐂𝐨𝐥𝐨𝐫𝐞𝐝*
*│* 💙 *${prefix}𝐄𝐟𝐟𝐞𝐜𝐭𝐂𝐥𝐨𝐮𝐝𝐬*
*│* 💙 *${prefix}𝐆𝐫𝐚𝐝𝐢𝐞𝐧𝐭𝐓𝐞𝐱𝐭*
 ╰───────────❍\n\n*_𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐏𝐎𝐏𝐊𝐈𝐃_*`;
          break;
        case "6":
          menuResponse = `╭───❍「 *🧋𝐏𝐎𝐏𝐊𝐈𝐃🧋* 」
│ 🧑‍💻 *𝐔𝐒𝐄𝐑:* *${pushName} ${pushwish}*
│ 🌐 *𝐌𝐎𝐃𝐄:* *${mode}*
│ ⏰ *𝐓𝐈𝐌𝐄:* *${realTime}🇵🇰*
│ 📅 *𝐃𝐀𝐓𝐄:* *${realDate}* 
│ 🤖 *𝐔𝐏𝐓𝐈𝐌𝐄:* *${hours}/${minutes}/${seconds}*
╰───────────❍
 ╭───❍「 *𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔* 」
*│* 🧊 *${prefix}𝐀𝐥𝐥𝐯𝐚𝐫*
*│* 🧊 *${prefix}𝐀𝐝𝐝𝐕𝐚𝐫*
*│* 🧊 *${prefix}𝐄𝐝𝐢𝐭𝐕𝐚𝐫*
*│* 🧊 *${prefix}𝐑𝐞𝐬𝐭𝐚𝐫𝐭*
*│* 🧊 *${prefix}𝐉𝐨𝐢𝐧*
*│* 🧊 *${prefix}𝐋𝐞𝐟𝐭*
*│* 🧊 *${prefix}𝐁𝐥𝐨𝐜𝐤*
*│* 🧊 *${prefix}𝐔𝐧𝐁𝐥𝐨𝐜𝐤*
 ╰───────────❍\n\n*_𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐏𝐎𝐏𝐊𝐈𝐃_*`;
          break;
        case "7":
          menuResponse = `╭───❍「 *❣️𝐏𝐎𝐏𝐊𝐈𝐃❣️* 」
│ 🧑‍💻 *𝐔𝐒𝐄𝐑:* *${pushName} ${pushwish}*
│ 🌐 *𝐌𝐎𝐃𝐄:* *${mode}*
│ ⏰ *𝐓𝐈𝐌𝐄:* *${realTime}🇵🇰*
│ 📅 *𝐃𝐀𝐓𝐄:* *${realDate}* 
│ 🤖 *𝐔𝐏𝐓𝐈𝐌𝐄:* *${hours}/${minutes}/${seconds}*
╰───────────❍
 ╭───❍「 *𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔* 」
*│* 🥏 *${prefix}𝐏𝐢𝐧𝐠*
*│* 🥏 *${prefix}𝐀𝐥𝐢𝐯𝐞*
*│* 🥏 *${prefix}𝐔𝐩𝐓𝐢𝐦𝐞*
*│* 🥏 *${prefix}𝐑𝐞𝐩𝐨*
*│* 🥏 *${prefix}𝐀𝐛𝐨𝐮𝐭*
 ╰───────────❍\n\n*_𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐏𝐎𝐏𝐊𝐈𝐃_*`;
          break;
        case "8":
          menuResponse = `╭───❍「 *⛔𝐏𝐎𝐏𝐊𝐈𝐃⛔* 」
│ 🧑‍💻 *𝐔𝐒𝐄𝐑:* *${pushName} ${pushwish}*
│ 🌐 *𝐌𝐎𝐃𝐄:* *${mode}*
│ ⏰ *𝐓𝐈𝐌𝐄:* *${realTime}🇵🇰*
│ 📅 *𝐃𝐀𝐓𝐄:* *${realDate}*  
│ 🤖 *𝐔𝐏𝐓𝐈𝐌𝐄:* *${hours}/${minutes}/${seconds}*
╰───────────❍
 ╭───❍「 *𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔* 」
*│* 🧋 *${prefix}𝐅𝐞𝐭𝐜𝐡*
*│* 🧋 *${prefix}𝐒𝐡𝐨𝐫𝐭𝐞𝐧*
*│* 🧋 *${prefix}𝐓𝐭𝐬*
*│* 🧋 *${prefix}𝐓𝐬𝐭𝐚𝐥𝐤*
*│* 🧋 *${prefix}𝐍𝐩𝐦*
*│* 🧋 *${prefix}𝐆𝐢𝐭𝐒𝐭𝐚𝐥𝐤*
 ╰───────────❍\n\n*_𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐏𝐎𝐏𝐊𝐈𝐃_*`;
          break;
        case "9":
          menuResponse = `╭───❍「 *🧊𝐏𝐎𝐏𝐊𝐈𝐃🧊* 」
│ 🧑‍💻 *𝐔𝐒𝐄𝐑:* *${pushName} ${pushwish}*
│ 🌐 *𝐌𝐎𝐃𝐄:* *${mode}*
│ ⏰ *𝐓𝐈𝐌𝐄:* *${realTime}🇵🇰*
│ 📅 *𝐃𝐀𝐓𝐄:* *${realDate}*  
│ 🤖 *𝐔𝐏𝐓𝐈𝐌𝐄:* *${hours}/${minutes}/${seconds}*
╰───────────❍
 ╭───❍「 *𝐒𝐄𝐀𝐑𝐂𝐇 𝐌𝐄𝐍𝐔* 」
*│* 🩷 *${prefix}𝐘𝐓𝐒*
*│* 🩷 *${prefix}𝐒𝐬𝐩𝐨𝐭𝐢𝐟𝐲*
*│* 🩷 *${prefix}𝐋𝐲𝐫𝐢𝐜𝐬*
*│* 🩷 *${prefix}𝐏𝐥𝐚𝐲𝐬𝐭𝐨𝐫𝐞*
 ╰───────────❍\n\n*_𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐏𝐎𝐏𝐊𝐈𝐃_*`;
          break;
        default:
          menuResponse = "*❌ 𝐈𝐍𝐕𝐀𝐋𝐈𝐃 𝐂𝐇𝐎𝐈𝐂𝐄. 𝐏𝐋𝐄𝐀𝐒𝐄 𝐑𝐄𝐏𝐋𝐘 𝐖𝐈𝐓𝐇 1 𝐓𝐎 9.*";
      }

      await sendCommandMessage(menuResponse, receivedMessage);
    });
  }
};

export default menu;
