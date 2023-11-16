const Discord = require('discord.js');
module.exports = {
  logSlashCommands: async (client, interaction) => {
    try {
    if (interaction.isCommand()) {
      const date = new Date();
      const optionse = { 
        timeZone: 'Europe/Paris', 
        hour12: false,
        timeZoneName: 'short'
      };
      const embedSlash = new Discord.EmbedBuilder()
        .setColor('#c91d07')
        .setTitle('Informations du service :')
        .setDescription(`Nom de la commande exécutée : \n **${interaction.commandName}** \n\n Exécutée par : \n <@${interaction.user.id}> \n\n Dans le salon :  **${interaction.channel.name}.** \n\n **${date.toLocaleString('fr-FR', optionse)}**`)
        .setThumbnail('https://lsmc.bay.life/img/lsmc.png');
      
      const channel = client.channels.cache.get('1141029007358427177');
      channel.send({ embeds: [embedSlash] });
    }
  }
  catch (error) {
    const channelId = "1010217082622857348";
    const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
    interaction.client.channels.cache.get(channelId).send(errorMessage);
}}

};