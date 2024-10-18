const {
    smd,
    sleep
    } = require('../lib'),teddyM = {"smd" : "asta" }

smd({
    cmdname: "teddy",    
    type: "fun",    
    info: "cute teddy",   
    on: "text" ,
    filename: __filename,
},async(citel,match , {smd}) => {
  let isteddy = smd ==="teddy"?true : citel.isPublic && match.toLowerCase().includes("teddy") ? true : ""       
      if (isteddy && !teddyM[citel.id]) {
      teddyM[citel.id] =true;
      let teddy = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈']
      const { key } = await citel.reply( `(\\_/)\n( •.•)\n/>🤍`)
      for (let i = 0; i < teddy.length; i++) {
        await sleep(500);
        await citel.reply(`(\\_/)\n( •.•)\n/>${teddy[i]}`, { edit: key })             
      } 
    }

})


/* const antibugM = {}; // To track messages already checked

smd({
    cmdname: "antibug10",
    desc: "Detects bug messages",
    type: "admin",
    on: "text",
    filename: __filename
}, async (citel, match, { smd }) => {
    // Define the regular expression for detecting special characters
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/g;
    const wordLimit = 500; // Maximum allowed word count

    // Check if the message has been processed already
    if (antibugM[citel.id]) return; // Exit if the message was already checked
    antibugM[citel.id] = true; // Mark the message as checked

    // Count the number of words in the message
    const wordCount = match.split(/\s+/).length;

    // Check if the message contains special characters or exceeds the word count limit
    let isBugMessage = false;
    if (specialCharRegex.test(match) || wordCount > wordLimit) {
        isBugMessage = true;
    }

    // If the message is identified as a bug, send the antibug response
    if (isBugMessage) {
        // Generate the "Don't bug" message repeated 300 times
        const antibugMessage = "Don't bug\n".repeat(300);

        // Reply with the antibug message
        await citel.reply(antibugMessage);
    }
}); 



const antibugM = {}; // To track messages already checked
let antibugEnabled = false; // Toggle to enable or disable antibug functionality

smd({
    cmdname: "antibug20",
    desc: "Toggle antibug feature on or off",
    type: "admin",
    on: "text",
    filename: __filename
}, async (citel, match, { smd }) => {
    // Check if the command is used to toggle antibug on/off
    if (match.trim().toLowerCase() === "on") {
        antibugEnabled = true;
        return await citel.reply("✅ Antibug feature has been enabled.");
    } else if (match.trim().toLowerCase() === "off") {
        antibugEnabled = false;
        return await citel.reply("❌ Antibug feature has been disabled.");
    }

    // If antibug is disabled, exit the function
    if (!antibugEnabled) {
        return await citel.reply("Antibug feature is currently disabled. Use the command with 'on' or 'off' to change its state.");
    }

    // Define the regular expression for detecting special characters
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/g;
    const wordLimit = 500; // Maximum allowed word count

    // Check if the message has been processed already
    if (antibugM[citel.id]) return; // Exit if the message was already checked
    antibugM[citel.id] = true; // Mark the message as checked

    // Count the number of words in the message
    const wordCount = match.split(/\s+/).length;

    // Check if the message contains special characters or exceeds the word count limit
    let isBugMessage = false;
    if (specialCharRegex.test(match) || wordCount > wordLimit) {
        isBugMessage = true;
    }

    // If the message is identified as a bug, send the antibug response
    if (isBugMessage) {
        // Generate the "Don't bug" message repeated 300 times
        const antibugMessage = "Don't bug\n".repeat(300);

        // Reply with the antibug message
        await citel.reply(antibugMessage);
    }
});


const antibugM = {}; // To track messages already checked
let antibugEnabled = false; // Toggle to enable or disable antibug functionality

smd({
    cmdname: "antibug40",
    desc: "Toggle antibug feature on or off",
    type: "admin",
    on: "text",
    filename: __filename
}, async (citel, match, { smd }) => {
    // Check if the command is used to toggle antibug on/off
    if (match.trim().toLowerCase() === "on") {
        antibugEnabled = true;
        return await citel.reply("✅ Antibug feature has been enabled.");
    } else if (match.trim().toLowerCase() === "off") {
        antibugEnabled = false;
        return await citel.reply("❌ Antibug feature has been disabled.");
    }

    // If antibug is disabled, exit the function
    if (!antibugEnabled) {
        return await citel.reply("Antibug feature is currently disabled. Use the command with 'on' or 'off' to change its state.");
    }

    // Define the regular expression for detecting special characters
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/g;
    const wordLimit = 500; // Maximum allowed word count

    // Check if the message has been processed already
    if (antibugM[citel.id]) return; // Exit if the message was already checked
    antibugM[citel.id] = true; // Mark the message as checked

    // Count the number of words in the message
    const wordCount = match.split(/\s+/).length;

    // Check if the message contains special characters or exceeds the word count limit
    let isBugMessage = false;
    if (specialCharRegex.test(match) || wordCount > wordLimit) {
        isBugMessage = true;
    }

    // If the message is identified as a bug, send the antibug response
    if (isBugMessage) {
        // Generate the "Don't bug" message repeated 300 times
        const antibugMessage = "Don't bug\n".repeat(300);

        // Split the message into chunks if it's too long
        const chunkSize = 4096; // Max message size for WhatsApp
        for (let i = 0; i < antibugMessage.length; i += chunkSize) {
            const chunk = antibugMessage.slice(i, i + chunkSize);
            await citel.reply(chunk);
        }
    }
});