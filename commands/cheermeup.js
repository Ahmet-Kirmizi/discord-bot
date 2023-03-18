const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder().setName("cheermeup").setDescription("replies with a happy message to set your mood up"),
    async execute(interaction) {
        await interaction.reply(`You are a beautiful person inside and out ${interaction.member.user.username}! Keep up the good work!`);
    },
};