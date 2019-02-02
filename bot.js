const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("541219725280280602")
setInterval(function() {
channel.send(`Lol2`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
