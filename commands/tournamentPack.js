const {
  SlashCommandBuilder,
  EmbedBuilder,
  AttachmentBuilder,
  TextDisplayBuilder,
} = require("discord.js");

const file = new AttachmentBuilder("assets/Clash on the Clyde Event Pack.pdf");

// const bcpLink = new TextDisplayBuilder().setContent(
//   "[Best Coast Pairings Link] (https://www.bestcoastpairings.com/event/g34QKVwGBW5N)"
// );

// const builtFile = new FileBuilder().setURL("assets/TournamentPack2025.pdf");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tournament_pack")
    .setDescription("Clash on the Clyde Tournament Pack 2025"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Clash on the Clyde 2025 Tournament Pack")
      .setDescription("Missions and info for the 2025 event")
      .setColor("Purple")
      .addFields(
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
      files: [file],
      ephemeral: true,
    });
  },
};
