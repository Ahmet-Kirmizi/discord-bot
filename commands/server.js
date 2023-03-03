const {SlashCommandBuilder} = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder().setName('server').setDescription('provides info about the server'),
    async execute(interaction){
        await interaction.reply(`this server's name is ${interaction.guild.name} and has ${interaction.guild.memberCount} members`);
}
}
