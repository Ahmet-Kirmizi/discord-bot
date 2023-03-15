// variables
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("provides info about the server"),
  async execute(interaction) {
    const userID = interaction.member.id;
    console.log(interaction.guild.roles.cache.get("515174489747619853"));
    let myRole = interaction.guild.roles.cache.get(userID);
    let server = interaction.guild.id, 
    channel = interaction.channel.id 
    console.log(server, channel)
    await interaction.reply(
      `this server's name is ${interaction.guild.name} and has ${interaction.guild.memberCount} members and your role is ${myRole} and your username is ${interaction.member.user.username}`
    );
  },
};
