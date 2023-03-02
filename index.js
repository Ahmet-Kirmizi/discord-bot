const { Client, Intents, Collection } = require("discord.js");
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "MESSAGE_CONTENT"],
  partials: ["CHANNEL"],
});
const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// list of all commands
const commands = [];
client.commands = new Collection();

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);

  client.commands.set(command.data.name, command);
  commands.push(command.data.toJSON());
}

client.on("ready", () => {
  const guild_ids = client.guilds.cache.map((guild) => guild.id);
  const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);
  for (const guildID of guild_ids) {
    rest
      .put(Routes.applicationGuildCommands(client.user.id, guild_ids), {
        body: commands,
      })
      .then(() =>
        console.log(
          "Successfully registered application commands for guildid: " +
            guild_ids
        )
      )
      .catch(console.error);
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
    });
  }
});

client.login(process.env.TOKEN);
