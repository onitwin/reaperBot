const response = require("../assets/missions.json");

const {
  SlashCommandBuilder,
  EmbedBuilder,
  AttachmentBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  MessageFlags,
} = require("discord.js");

const reaperLogo = new AttachmentBuilder("assets/reaperLogo.jpg");

const eventDetails = response[0];
const dispositionDetails = response[1].dispositions;

const dispositionMatchups = dispositionDetails.map((disposition) => {
  return new EmbedBuilder()
    .setTitle(`${disposition.title} Layouts`)
    .setColor(disposition.color)
    .addFields(
      {
        name: "Disruption Opponent",
        value: `ROUND 1: ${disposition.oppositionPaired.Disruption[0]}, ROUND 2: ${disposition.oppositionPaired.Disruption[1]}, ROUND 3: ${disposition.oppositionPaired.Disruption[2]}`,
      },
      {
        name: "Priority Assets Opponent",
        value: `ROUND 1: ${disposition.oppositionPaired.PriorityAssets[0]}, ROUND 2: ${disposition.oppositionPaired.PriorityAssets[1]}, ROUND 3: ${disposition.oppositionPaired.PriorityAssets[2]}`,
      },
      {
        name: "Purge the Foe Opponent",
        value: `ROUND 1: ${disposition.oppositionPaired.PurgeTheFoe[0]}, ROUND 2: ${disposition.oppositionPaired.PurgeTheFoe[1]}, ROUND 3: ${disposition.oppositionPaired.PurgeTheFoe[2]}`,
      },
      {
        name: "Take And Hold Opponent",
        value: `ROUND 1: ${disposition.oppositionPaired.TakeAndHold[0]}, ROUND 2: ${disposition.oppositionPaired.TakeAndHold[1]}, ROUND 3: ${disposition.oppositionPaired.TakeAndHold[2]}`,
      },
      {
        name: "Reconnaissance Opponent",
        value: `ROUND 1: ${disposition.oppositionPaired.Reconnaissance[0]}, ROUND 2: ${disposition.oppositionPaired.Reconnaissance[1]}, ROUND 3: ${disposition.oppositionPaired.Reconnaissance[2]}`,
      },
    );
});

const buttonCollection = dispositionDetails.map((disposition) => {
  return new ButtonBuilder()
    .setCustomId(`${disposition.title}`)
    .setLabel(`${disposition.title}`)
    .setStyle(ButtonStyle.Primary);
});

const actionRowCollection = buttonCollection.map((button) => {
  return new ActionRowBuilder().addComponents(button);
});

// const actionRowSingular = new ActionRowBuilder().addComponents(
//   ...buttonCollection,
// );

const dispositionCollection = dispositionDetails.map((disposition) => {
  return new EmbedBuilder()
    .setTitle(disposition.title)
    .setDescription(disposition.title)
    .setColor("Purple");
});

const buttonRow = new ActionRowBuilder().addComponents(...buttonCollection);

const baseEmbed = new EmbedBuilder()
  .setTitle(eventDetails.eventDetails.eventTitle)
  .setDescription("Disposition and Layout Pairings")
  .setColor("Purple")
  .addFields(
    { name: "Rules Format", value: eventDetails.eventDetails.rulesFormat },
    {
      name: "Rules Format Link",
      value: eventDetails.eventDetails.rulesFormatLink,
    },
    {
      name: "Select Your Disposition",
      value: `Select your Disposition to view layouts for each round`,
    },
  );

module.exports = {
  data: new SlashCommandBuilder()
    .setName("missions")
    .setDescription("View Disposition/Layout pairings"),
  async execute(interaction) {
    const response = await interaction.reply({
      embeds: [baseEmbed],
      files: [reaperLogo],
      components: [...actionRowCollection],
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

      if (confirmation.customId === "❌ Disruption") {
        await confirmation.update({
          embeds: [dispositionMatchups[0]],
          files: [],
          components: [],
        });
      } else if (confirmation.customId === "🎯 Priority Assets") {
        await confirmation.update({
          embeds: [dispositionMatchups[1]],
          files: [],
          components: [],
        });
      } else if (confirmation.customId === "🗡️ Purge The Foe") {
        await confirmation.update({
          embeds: [dispositionMatchups[2]],
          files: [],
          components: [],
        });
      } else if (confirmation.customId === "💀 Take And Hold") {
        await confirmation.update({
          embeds: [dispositionMatchups[3]],
          files: [],
          components: [],
        });
      } else if (confirmation.customId === "👁️ Reconnaissance") {
        await confirmation.update({
          embeds: [dispositionMatchups[4]],
          files: [],
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
