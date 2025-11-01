const {
  SlashCommandBuilder,
  EmbedBuilder,
  AttachmentBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  MessageFlags,
} = require("discord.js");

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

const round4 = new EmbedBuilder()
  .setTitle("Mission 4 placeholder")
  .setDescription("Description for mission 4 placeholder")
  .setColor("Purple")
  .addFields(
    { name: "Mission Format", value: "WTC" },
    { name: "Round", value: "Four" },
    {
      name: "Mission",
      value: "Scorched Earth",
    },
    {
      name: "Deployment Map",
      value: "Tipping Point",
    }
  );

const round5 = new EmbedBuilder()
  .setTitle("Mission 5 placeholder")
  .setDescription("Description for mission 5 placeholder")
  .setColor("Purple")
  .addFields(
    { name: "Mission Format", value: "WTC" },
    { name: "Round", value: "Five" },
    {
      name: "Mission",
      value: "Scorched Earth",
    },
    {
      name: "Deployment Map",
      value: "Tipping Point",
    }
  );

const baseEmbed = new EmbedBuilder()
  .setTitle("MISSIONS")
  .setDescription("Missions for Celtic Cup 2025")
  .setThumbnail("attachment://celticCupLogo.jpg")
  .setColor("Purple")
  .addFields({ name: "Select a round", value: "Select round 1-5" });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("missions")
    .setDescription("View Missions"),
  async execute(interaction) {
    const response = await interaction.reply({
      embeds: [baseEmbed],
      files: [celticCupLogo],
      components: [buttonRow],
      flags: MessageFlags.Ephemeral,
      withResponse: true,
    });

    const collectorFilter = (i) => i.user.id === interaction.user.id;
    try {
      const confirmation =
        await response.resource.message.awaitMessageComponent({
          filter: collectorFilter,
          time: 60_000,
        });

      if (confirmation.customId === "round 1") {
        await confirmation.update({
          embeds: [round1],
          components: [],
        });
      } else if (confirmation.customId === "round 2") {
        await confirmation.update({
          embeds: [round2],
          components: [],
        });
      } else if (confirmation.customId === "round 3") {
        await confirmation.update({
          embeds: [round3],
          components: [],
        });
      } else if (confirmation.customId === "round 4") {
        await confirmation.update({
          embeds: [round4],
          components: [],
        });
      } else if (confirmation.customId === "round 5") {
        await confirmation.update({
          embeds: [round5],
          components: [],
        });
      }
    } catch {
      await interaction.editReply({
        content: "Confirmation not received within 1 minute, cancelling",
        components: [],
      });
    }
  },
};

// files: [coclogo, celticCupLogo]
