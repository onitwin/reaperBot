const {
  SlashCommandBuilder,
  EmbedBuilder,
  AttachmentBuilder,
  TextDisplayBuilder,
} = require("discord.js");

const cocpdf = new AttachmentBuilder(
  "assets/Clash on the Clyde Event Pack.pdf"
);

const celticCupPack = new AttachmentBuilder(
  "assets/Celtic Cup 2025 Event Pack.pdf"
);

const coclogo = new AttachmentBuilder("assets/cotc.jpeg");

const celticCupLogo = new AttachmentBuilder("assets/celticCupLogo.jpg");

// const bcpLink = new TextDisplayBuilder().setContent(
//   "[Best Coast Pairings Link] (https://www.bestcoastpairings.com/event/g34QKVwGBW5N)"
// );

// const builtFile = new FileBuilder().setURL("assets/TournamentPack2025.pdf");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("events")
    .setDescription(" Celtic Cup 2025 Event Details"),
  async execute(interaction) {
    const cotc = new EmbedBuilder()
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

    const ccembed = new EmbedBuilder()
      .setTitle("Celtic Cup 2025 Tournament Pack")
      .setDescription("Missions and info for the 2025 event")
      .setThumbnail("attachment://celticCupLogo.jpg")
      .setColor("Purple")
      .addFields(
        { name: "Date of Event", value: "23/11/2025" },
        { name: "Time of Event", value: "09:00 AM" },
        {
          name: "Best Coast Pairings Link",
          value: "https://www.bestcoastpairings.com/event/vzvEQEu88Oqf",
        },
        {
          name: "Direct Link to Event Pack",
          value:
            "https://drive.google.com/file/d/1dI4fW9NnjaGuzliIDVTpSHjNDNlDM_7w/view?usp=drivesdk",
        }
      );
    //can add multiple embeds to embed object
    interaction.reply({
      embeds: [cotc, ccembed],
      files: [cocpdf, coclogo, celticCupLogo, celticCupPack],
      ephemeral: true,
    });
  },
};

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
