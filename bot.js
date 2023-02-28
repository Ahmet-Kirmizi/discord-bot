const {Client, Intents} = require("discord.js");
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "MESSAGE_CONTENT"], partials: ["CHANNEL"] });

client.on("ready", () =>{
    console.log("The AI bot is online"); //message when bot is online
});
client.on("messageCreate", (messageCreate) => {
    if (messageCreate.content.substring(0, 1) === "!") {
        messageCreate.channel.send("Hello from AI bot"); //reply if message has "!" as first character
    }
});

const { token } = require('./config.json');

client.login(token);
