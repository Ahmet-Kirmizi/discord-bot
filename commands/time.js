const { SlashCommandBuilder } = require("@discordjs/builders");

// variables
var today = new Date();
var time = "current time is: " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


// display the current time
module.exports = {
  data: new SlashCommandBuilder()
    .setName('time')
    .setDescription('replies with the current time'),
    async execute(interaction){
      await interaction.reply(time);
    }
};
