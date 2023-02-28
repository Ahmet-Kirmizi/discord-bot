const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
      'GUILDS',           // Required to listen for server events
      'GUILD_MESSAGES'    // Required to listen for message events
    ]
  });
const prefix = '!';
const token = 'MTA3ODMxNDY0MDQzOTc3MTEzNg.GM35-r.STbxrH0H_Nm66PbAf146iM4uEdHszm6DHDdavU';

client.on('ready', () => {
  console.log('Bot is ready!');
});

client.on('messageCreate', messageCreate => {
  if (!messageCreate.content.startsWith(prefix) || messageCreate.author.bot) return;

  const args = messageCreate.content.slice(prefix.length).trim().split(' ');
  console.log(args);
  const command = args.shift().toLowerCase();

  if (command === 'hello') {
    messageCreate.channel.send(`Hello, ${messageCreate.author}!`);
  } else if (command === 'roll') {
    const number = Math.floor(Math.random() * 6) + 1;
    messageCreate.channel.send(`${message.author} rolled a ${number}!`);
  }
});

client.login(token);
