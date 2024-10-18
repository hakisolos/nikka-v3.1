const { smd } = require("../lib");
smd(
  {
    pattern: "save",
    desc: "Save whatsapp status",
    category: "whatsapp",
    filename: __filename,
    use: "< status >",
  },
  async (message) => {
    try {
      let mm =
        message.reply_message && message.reply_message.status
          ? message.reply_message
          : false;
      if (mm) {
        message.bot.forwardOrBroadCast(message.user, mm, {
          quoted: { key: mm.key, message: mm.message },
        });
      } else message.send("*reply to whatsapp status*");
    } catch (e) {
      await message.error(`${e}\n\ncommand : #(Status Saver)`, e, false);
    }
  }
);
const regexSend = new RegExp(
  `\\b(?:${["send", "share", "snd", "give", "save", "sendme", "forward"].join(
    "|"
  )})\\b`,
  "i"
);
smd({ on: "quoted" }, async (message, text) => {
  try {
    let mm = message.reply_message.status ? message.reply_message : false;
    if (mm && regexSend.test(text.toLowerCase())) {
      message.bot.forwardOrBroadCast(
        message.fromMe ? message.user : message.from,
        mm,
        { quoted: { key: mm.key, message: mm.message } }
      );
    }
  } catch (e) {
    console.log(e);
  }
});

global.waPresence =
  process.env.WAPRESENCE && process.env.WAPRESENCE === "online"
    ? "available"
    : process.env.WAPRESENCE || "";
global.api_smd = "https://api-smd.onrender.com";

let status = false,
  times = 0;
smd({ on: "main" }, async (message, text, { icmd }) => {
  try {
    if (!status) {
      try {
        status = true;
      } catch (e) {}
    }

    if (message.status) return;
    if (
      `${global.readmessagefrom}`.includes(message.senderNum) ||
      ["yes", "true", "ok", "sure"].includes(global.readmessage) ||
      (icmd && ["yes", "true", "ok", "sure"].includes(global.readcmds))
    )
      message.bot.readMessages([message.key]);
  } catch (e) {
    console.log(e);
  }
});

smd({ on: "text" }, async (message, text, { icmd }) => {
  try {
    if (
      ["unavailable", "available", "composing", "recording", "paused"].includes(
        waPresence
      )
    )
      message.bot.sendPresenceUpdate(waPresence, message.from);
    if (message.isAstro && !message.fromMe && !message.text.startsWith("$"))
      message.react("");
  } catch (e) {
    console.log(e);
  }
});

smd({ on: "status" }, async (message, text) => {
  try {
    if (
      `${global.read_status_from}`
        .split(",")
        .includes(message.key.participant.split("@")[0]) ||
      ["yes", "true", "ok", "sure"].includes(global.read_status) ||
      message.fromMe ||
      message.isAstro
    ) {
      await message.bot.readMessages([{ ...message.key, fromMe: false }]);
    }
    if (
      (`${global.save_status_from}`
        .split(",")
        .includes(message.key.participant.split("@")[0]) ||
        ["yes", "true", "ok", "sure"].includes(global.save_status)) &&
      !message.fromMe
    ) {
      await message.bot.forwardOrBroadCast(message.user, message, {
        quoted: { key: message.key, message: message.message },
      });
    }
  } catch (e) {
    console.log(e);
  }
});
smd(
  {
    cmdname: "alya",
    desc: "alya",
    react: "👑",
    type: "misc",
    filename: __filename,
  },
  async (m) => {
    try {
      await m.send(
        "https://i.imgur.com/r0J6Veo.jpeg",
        { caption: "*I AM QUEEN NIKKA 👑*" },
        "img",
        m
      );
    } catch (e) {
      m.error(`${e}\n\nCommand: alya`, e, false);
    }
  }
);
smd(
  {
    cmdname: "donate",
    desc: "Send donation details",
    type: "misc",
    react: "💰",
    filename: __filename,
  },
  async (m) => {
    try {
      await m.send(
        "https://i.imgur.com/DeJiOrr.jpeg",
        { caption: "*Support QUEEN NIKKA OPay Bank: OPay Digital Services Limited(OPay) palmpay Account: 9030576943 Name:  Nigeria Show Love*" },
        "img",
        m
      );
    } catch (e) {
      m.error(`${e}\n\nCommand: donate`, e, false);
    }
  }
);

/*
smd(
  {
    pattern: "p", 
    react: "⏳️", 
    desc: "Check the bot's latency and uptime", 
    category: "misc",
    filename: __filename,
  },
  async (m) => {
    try {
      const start = Date.now();

      // Calculate latency
      const latency = Date.now() - start;

      // Get the bot's uptime
      const uptime = runtime(process.uptime());

      // Prepare the final message with "Pong!", uptime, and latency
      const finalMessage = `
🤖 *Pong!*

*Latency:* ${latency}ms
*Uptime:* ${uptime}

== |🍀|Powered By Haki|🍀| ==
      `;

      // Send the image with the latency and uptime message as a caption
      await m.send(
        "https://f.uguu.se/wJBmDhzp.jpg", // Replace with your desired image URL
        { caption: finalMessage },
        "img",
        m
      );

    } catch (e) {
      m.error(`${e}\n\nCommand: ping`, e, false);
    }
  }
);



smd(
  {
    pattern: "p4", 
    react: "⏳️", 
    desc: "Check the bot's latency and uptime", 
    category: "misc",
    filename: __filename,
  },
  async (m) => {
    try {
      // Calculate the start time for latency measurement
      const start = Date.now();

      // Send the image first
      const imageUrl = "https://files.catbox.moe/bh2fpj.jpg"; // Image URL
      await m.send(
        imageUrl,
        { caption: "*Testing Ping...*" }, // Initial caption before ping response
        "img", // Specify that we are sending an image
        m // Context/message object for sending
      );

      // Calculate latency
      const latency = Date.now() - start;

      // Get the bot's uptime
      const uptime = runtime(process.uptime());

      // Prepare the final message with latency and uptime
      const finalMessage = `
🤖 *Pong!*

*Latency:* ${latency}ms
*Uptime:* ${uptime}

== |🍀|Powered By Haki|🍀| ==
      `;

      // Send the final message as a follow-up
      await m.send(finalMessage, { quoted: m });

    } catch (e) {
      m.error(`${e}\n\nCommand: ping`, e, false);
    }
  }
);

// smd(
  {
    pattern: "p6", 
    react: "⏳️", 
    desc: "Check the bot's latency and uptime", 
    category: "misc",
    filename: __filename,
  },
  async (m) => {
    try {
      const start = Date.now();

      // Calculate latency
      const latency = Date.now() - start;

      // Get the bot's uptime
      const uptime = runtime(process.uptime());

      // Prepare the final message with "Pong!", uptime, and latency
      const finalMessage = `
🤖 *Pong!*

*Latency:* ${latency}ms
*Uptime:* ${uptime}

== |🍀|Powered By Haki|🍀| ==
      `;

      // Send the image with the latency and uptime message as a caption
      await m.send(
        "https://files.catbox.moe/bh2fpj.jpg", // Replace with your desired image URL
        { caption: finalMessage },
        "img",
        m
      );

    } catch (e) {
      m.error(`${e}\n\nCommand: ping`, e, false);
    }
  }
);