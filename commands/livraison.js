const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('livraison')
    .setDescription("Description"),
  async execute(interaction) {
    try {
const embed = new EmbedBuilder()
        .setColor('#c91d07')
        .setTitle('<a:loading:1136334799074754674> Commande en cours de chargement !')
        .setThumbnail('https://lsmc.bay.life/img/lsmc.png')
        .setDescription("**\n<a:warn:1136338489424744559> Merci de **patienter encore quelques minutes**, le temps que notre équipe de logistique s'occupe du **chargement et du déplacement !**\n<:blue_arrow:1119194238614253689> Votre commande peut désormais **arriver à tout moment !**");

await interaction.reply({ embeds: [embed] });

} catch (error) {
      const channelId = '1010217082622857348';
      const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
      interaction.client.channels.cache.get(channelId).send(errorMessage);
    }
  }
};

