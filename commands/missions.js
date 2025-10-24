const {
  SlashCommandBuilder,
  EmbedBuilder,
  AttachmentBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");

// const cocpdf = new AttachmentBuilder(
//   "assets/Clash on the Clyde Event Pack.pdf"
// );

// const celticCupPack = new AttachmentBuilder(
//   "assets/Celtic Cup 2025 Event Pack.pdf"
// );

const coclogo = new AttachmentBuilder("assets/cotc.jpeg");

const celticCupLogo = new AttachmentBuilder("assets/celticCupLogo.jpg");

const r1btn = new ButtonBuilder()
  .setCustomId("round 1")
  .setLabel("Round 1")
  .setStyle(ButtonStyle.Primary);

const r2btn = new ButtonBuilder()
  .setCustomId("round 2")
  .setLabel("Round 2")
  .setStyle(ButtonStyle.Primary);

const r3btn = new ButtonBuilder()
  .setCustomId("round 3")
  .setLabel("Round 3")
  .setStyle(ButtonStyle.Primary);

const r4btn = new ButtonBuilder()
  .setCustomId("round 4")
  .setLabel("Round 4")
  .setStyle(ButtonStyle.Primary);

const r5btn = new ButtonBuilder()
  .setCustomId("round 5")
  .setLabel("Round 5")
  .setStyle(ButtonStyle.Primary);

const buttonRow = new ActionRowBuilder().addComponents(
  r1btn,
  r2btn,
  r3btn,
  r4btn,
  r5btn
);

// const bcpLink = new TextDisplayBuilder().setContent(
//   "[Best Coast Pairings Link] (https://www.bestcoastpairings.com/event/g34QKVwGBW5N)"
// );

// const builtFile = new FileBuilder().setURL("assets/TournamentPack2025.pdf");

const round1 = new EmbedBuilder()
  .setTitle("Mission 1 placeholder")
  .setDescription("Description for mission 1 placeholder")
  .setColor("Purple")
  .addFields(
    { name: "Mission Format", value: "WTC" },
    { name: "Round", value: "One" },
    {
      name: "Mission",
      value: "Terraform",
    },
    {
      name: "Deployment Map",
      value: "Crucible of Battle",
    }
  );

const round2 = new EmbedBuilder()
  .setTitle("Mission 2 placeholder")
  .setDescription("Description for mission 2 placeholder")
  .setColor("Purple")
  .addFields(
    { name: "Mission Format", value: "WTC" },
    { name: "Round", value: "Two" },
    {
      name: "Mission",
      value: "Lynchpin",
    },
    {
      name: "Deployment Map",
      value: "Search and Destroy",
    }
  );

const round3 = new EmbedBuilder()
  .setTitle("Mission 3 placeholder")
  .setDescription("Description for mission 3 placeholder")
  .setColor("Purple")
  .addFields(
    { name: "Mission Format", value: "WTC" },
    { name: "Round", value: "Two" },
    {
      name: "Mission",
      value: "Scorched Earth",
    },
    {
      name: "Deployment Map",
      value: "Tipping Point",
    }
  );

module.exports = {
  data: new SlashCommandBuilder()
    .setName("missions")
    .setDescription("View Missions"),
  async execute(interaction) {
    const baseEmbed = new EmbedBuilder()
      .setTitle("Base Embed")
      .setDescription("This will all be replaced")
      .setThumbnail("attachment://celticCupLogo.jpg")
      .setColor("Purple")
      .addFields({ name: "Select a round", value: "Select round 1-5" });
    //can add multiple embeds to embed object
    interaction.reply({
      embeds: [baseEmbed],
      files: [celticCupLogo],
      components: [buttonRow],
      ephemeral: true,
    });
  },
};

// files: [coclogo, celticCupLogo],
//  .addFields(
//         { name: "Date of Event", value: "23/11/2025" },
//         { name: "Time of Event", value: "09:00 AM" },
//         {
//           name: "Best Coast Pairings Link",
//           value: "https://www.bestcoastpairings.com/event/vzvEQEu88Oqf",
//         },
//         {
//           name: "Direct Link to Event Pack",
//           value:
//             "https://drive.google.com/file/d/1dI4fW9NnjaGuzliIDVTpSHjNDNlDM_7w/view?usp=drivesdk",
//         }
//       );
