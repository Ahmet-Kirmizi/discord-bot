const { SlashCommandBuilder } = require("@discordjs/builders");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("newstr")
    .setDescription("Get the latest news from turkiye!"),
  async execute(interaction) {
    fetch(
      "https://newsdata.io/api/1/news?apikey=pub_191180c90e2c4e8d0e24038ce8f70e2a58066&country=tr"
    )
      .then((response) => response.json())
      .then((json) =>
        interaction.reply(
          json.results[getRandomInt(3)].title +
            " " +
            " details:" +
            json.results[getRandomInt(3)].content +
            " " +
            " link:" +
            json.results[getRandomInt(3)].link
        )
      )
      .catch((error) => console.error(error));
  },
};
