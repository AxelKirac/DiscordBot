const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('renametoi')
    .setDescription("Description"),
  async execute(interaction) {
    try {
const embed = new EmbedBuilder()
        .setColor('#549df1')
        .setTitle("<a:gyro:914592380739526737> Merci de mettre votre Nom & Prénom en identifiant !")
        .setThumbnail('https://cdn.discordapp.com/attachments/1043635945854996511/1138193097071804516/image-removebg-preview.png')
        .setDescription("**Changer son pseudo** afin d'**entrer vos coordonnées** est nécessaire et **obligatoire** afin de **vous identifier sur notre intranet**. <:LSMC:915255404076883988>\nMerci d'en prendre compte, et d'**appliquer cette règle rapidement**, sous peine d'expulsion ! <a:warn:1136338489424744559>");

await interaction.reply({ embeds: [embed] });

} catch (error) {
      const channelId = '1010217082622857348';
      const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
      interaction.client.channels.cache.get(channelId).send(errorMessage);
    }
  }
};