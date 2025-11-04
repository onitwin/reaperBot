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

const terraformImage = new AttachmentBuilder(
  "https://i.postimg.cc/JzpxTgtb/terraform.jpg"
);

const linchpinImage = new AttachmentBuilder(
  "https://i.postimg.cc/d12CLHkT/linchpin.jpg"
);

const scorchedEarthImage = new AttachmentBuilder(
  "https://i.postimg.cc/4dkt4kds/scorched-Earth.jpg"
);

const hiddenSuppliesImage = new AttachmentBuilder(
  "https://i.postimg.cc/kG7b8QKL/hidden-Supplies.jpg"
);

const takeAndHoldImage = new AttachmentBuilder(
  "https://i.postimg.cc/g068PkGJ/take-And-Hold.jpg.jpg"
);

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
  .setTitle("Mission 1 Celtic Cup")
  .setDescription("Terraform")
  .setColor("Purple")
  .setThumbnail("attachment://https://i.postimg.cc/JzpxTgtb/terraform.jpg")
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
    },
    {
      name: "Layout Link",
      value: "https://i.postimg.cc/JzpxTgtb/terraform.jpg",
    }
  );

const round2 = new EmbedBuilder()
  .setTitle("Mission 2 Celtic Cup 2025")
  .setDescription("Lynchpin")
  .setColor("Purple")
  .setThumbnail("attachment://https://i.postimg.cc/d12CLHkT/linchpin.jpg")
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
    },
    {
      name: "Layout Link",
      value: "https://i.postimg.cc/d12CLHkT/linchpin.jpg",
    }
  );

const round3 = new EmbedBuilder()
  .setTitle("Mission 3 Celtic Cup 2025")
  .setDescription("Scorched Earth")
  .setColor("Purple")
  .setThumbnail("attachment://https://i.postimg.cc/4dkt4kds/scorched-Earth.jpg")
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
    },
    {
      name: "Layout Link",
      value: "https://i.postimg.cc/4dkt4kds/scorched-Earth.jpg",
    }
  );

const round4 = new EmbedBuilder()
  .setTitle("Mission 4 Celtic Cup 2025")
  .setDescription("Hidden Supplies")
  .setColor("Purple")
  .setThumbnail(
    "attachment://https://i.postimg.cc/kG7b8QKL/hidden-Supplies.jpg"
  )
  .addFields(
    { name: "Mission Format", value: "WTC" },
    { name: "Round", value: "Four" },
    {
      name: "Mission",
      value: "Hidden Supplies",
    },
    {
      name: "Deployment Map",
      value: "Search and Destroy",
    },
    {
      name: "Layout Link",
      value: "https://i.postimg.cc/kG7b8QKL/hidden-Supplies.jpg",
    }
  );

const round5 = new EmbedBuilder()
  .setTitle("Mission 5 Celtic Cup 2025")
  .setDescription("Take and Hold")
  .setColor("Purple")
  .setThumbnail("attachment://https://i.postimg.cc/g068PkGJ/take-And-Hold.jpg")
  .addFields(
    { name: "Mission Format", value: "WTC" },
    { name: "Round", value: "Five" },
    {
      name: "Mission",
      value: "Take And Hold",
    },
    {
      name: "Deployment Map",
      value: "Crucible of Battle",
    },
    {
      name: "Layout Link",
      value: "https://i.postimg.cc/g068PkGJ/take-And-Hold.jpg",
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
          files: [terraformImage],
          components: [],
        });
      } else if (confirmation.customId === "round 2") {
        await confirmation.update({
          embeds: [round2],
          files: [linchpinImage],
          components: [],
        });
      } else if (confirmation.customId === "round 3") {
        await confirmation.update({
          embeds: [round3],
          files: [scorchedEarthImage],
          components: [],
        });
      } else if (confirmation.customId === "round 4") {
        await confirmation.update({
          embeds: [round4],
          files: [hiddenSuppliesImage],
          components: [],
        });
      } else if (confirmation.customId === "round 5") {
        await confirmation.update({
          embeds: [round5],
          files: [takeAndHoldImage],
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
