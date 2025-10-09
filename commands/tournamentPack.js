const {
  SlashCommandBuilder,
  EmbedBuilder,
  AttachmentBuilder,
} = require("discord.js");

const file = new AttachmentBuilder("assets/Clash on the Clyde Event Pack.pdf");

// const builtFile = new FileBuilder().setURL("assets/TournamentPack2025.pdf");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tournament_pack")
    .setDescription("Clash on the Clyde Tournament Pack 2025"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Clash on the Clyde 2025 Tournament Pack")
      .setDescription("Missions and info for the 2025 event")
      .setColor("Purple");

    interaction.reply({
      embeds: [embed],
      files: [file],
      ephemeral: true,
    });
  },
};
