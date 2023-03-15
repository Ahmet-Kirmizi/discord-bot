const { SlashCommandBuilder } = require("@discordjs/builders");

// variables

// display the current time
module.exports = {
  data: new SlashCommandBuilder()
    .setName("time")
    .setDescription("replies with the current time"),
  async execute(interaction) {
    var today = new Date();
    var time =
      "current time is: " +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds();
    await interaction.reply(time);
  },
};
