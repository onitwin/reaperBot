const {
  SlashCommandBuilder,
  EmbedBuilder,
  AttachmentBuilder,
  TextDisplayBuilder,
} = require("discord.js");

const file = new AttachmentBuilder("assets/Clash on the Clyde Event Pack.pdf");

const file2 = new AttachmentBuilder("assets/cotc.jpeg");

// const bcpLink = new TextDisplayBuilder().setContent(
//   "[Best Coast Pairings Link] (https://www.bestcoastpairings.com/event/g34QKVwGBW5N)"
// );

// const builtFile = new FileBuilder().setURL("assets/TournamentPack2025.pdf");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("events")
    .setDescription("Clash on the Clyde Tournament Pack 2025"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Clash on the Clyde 2025 Tournament Pack")
      .setDescription("Missions and info for the 2025 event")
      .setThumbnail("attachment://cotc.jpeg")
      .setColor("Purple")
      .addFields(
        { name: "Date of Event", value: "25/10/2025" },
        { name: "Time of Event", value: "08:30 - 20:00" },
        {
          name: "Best Coast Pairings Link",
          value: "https://www.bestcoastpairings.com/event/g34QKVwGBW5N",
        },
        {
          name: "Eventbright Link",
          value:
            "https://www.eventbrite.co.uk/e/clash-on-the-clyde-warhammer-40k-tournament-tickets-1383714771129",
        }
      );
    //can add multiple embeds to embed object
    interaction.reply({
      embeds: [embed],
      files: [file, file2],
      ephemeral: true,
    });
  },
};
