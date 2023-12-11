const {
  SlashCommandBuilder,
  Client,
  GatewayIntentBits,
  Message,
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName("manif")
    .setDescription("Défini un Haut-Gradé ou Directeur qui doit répondre")
    .addStringOption((option) =>
      option
        .setName("name")
        .setDescription(
          "Définir la personne a ping ici (mentionner le avec le @ ici)"
        )
        .setRequired(true)
        .setMinLength(1)
    ),
  async execute(interaction) {
    try {
      await interaction.deferReply({ ephemeral: true });
      const designerPersonne = interaction.options.getString("name");
      interaction.editReply("Demande bien prise en compte");
      interaction.channel.send({
        content: `
Bonjour ${designerPersonne},

L'intégralité du service médical est aujourd'hui en **grève générale**, avec le service minimum assuré, accompagnée de **manifestations organisées**. <a:gyro:914592380739526737> 
<:NextLine:1141020197638127686> Par conséquent, les **Evaluations Psychotechniques** et les **Certificats Médicaux** sont également **suspendus**.
                         
> Cela n'est **en aucun cas une chose que désiré les hôpitaux**, mais cette dernière est due **aux salaires navrants** sous prétexte d'une **crise terminée** et d'un **manque de respect et de considération** à notre égard de la part du **Gouvernement**. <a:warn:1136338489424744559> 
                         
Si vous souhaitez vous plaindre du manque d'effectif en service, **je vous invite à le faire directement au gouvernement !** <a:applaus:918553494615642112>`,
      });
    } catch (error) {
      const channelId = "1010217082622857348";
      const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${
        error.message
      }`;
      interaction.client.channels.cache.get(channelId).send(errorMessage);
    }
  },
};
