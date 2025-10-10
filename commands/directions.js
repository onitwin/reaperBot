const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Events,
  AttachmentBuilder,
} = require("discord.js");

const button = new ActionRowBuilder().addComponents(
  new ButtonBuilder()
    .setLabel("Google Maps!")
    .setStyle(ButtonStyle.Link)
    .setURL("https://maps.app.goo.gl/cJ3r12BncA3YxfeU6")
);

const file = new AttachmentBuilder("assets/reaperLogo.jpg");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("directions")
    .setDescription("Directions for Reaper Wargaming"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("How to find us!")
      .setDescription("Find is on Google Maps at the link below ")
      .setColor("Purple")
      .setThumbnail("attachment://reaperLogo.jpg")
      .addFields(
        {
          name: "what3words location",
          value: "clever.envy.smiles",
          inline: false,
        },
        {
          name: "Address",
          value: "4a, 12 Orton Pl, Glasgow G51 2HF",
          inline: false,
        }
      );

    interaction.reply({
      embeds: [embed],
      components: [button],
      files: [file],
      ephemeral: true,
    });
  },
};
