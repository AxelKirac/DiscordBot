// const Discord = require('discord.js');
// module.exports = {
//     theEyes: async (client, reaction, user) => {
//         try {
//     const ChanneltoSend = client.channels.cache.get('1104425577366163476');
//         const emojiName = reaction.emoji.name;
//         const channelName = reaction.message.channel.name;
//         const messageLink = `https://discord.com/channels/${reaction.message.guild.id}/${reaction.message.channel.id}/${reaction.message.id}`;
//         const now = new Date();
//         const options = { 
//             timeZone: 'Europe/Paris', 
//             hour12: false,
//             timeZoneName: 'short'	}
//   const embedtoSend = new Discord.EmbedBuilder()
//         .setColor('#c91d07')
//         .setTitle('Informations de réaction :')
//         .setDescription(`Nom de la personne ayant utiliser la réaction : \n<@${user.id}> \n Quel Réaction ? : "${emojiName}" \n Dans quel salon ? **#${channelName}**\n Lien du message en question : ${messageLink} \n\n Date & Heure à la quel il l'a fait : \n **${now.toLocaleString('fr-FR', options)}**`)
//         .setThumbnail('https://lsmc.bay.life/img/lsmc.png');
//         if (
//             (user.id === '248517566530584577' || user.id === '536231631938387978' || user.id === '434461194292822017' || user.id === '219915373401604097' || user.id === '874047050906480661' || user.id === '569589958248235008')
//             && (reaction.emoji.name === '✅' || reaction.emoji.name === '📝' || reaction.emoji.name === '💵')) {

//             ChanneltoSend.send({ embeds: [embedtoSend] });;
//         }
// }
// catch (error) {
//     const channelId = "1010217082622857348";
//     const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
//     interaction.client.channels.cache.get(channelId).send(errorMessage);
// }
//     }
//         }
