const Discord = require('discord.js');
const { google } = require('googleapis');

const spreadsheetId = '1ohi-r2bAz_WIvUN0izelYjFH9_AxP_k2SaesAhT9EgU'; // Remplacez par l'ID de votre feuille de calcul Google Sheets

module.exports = {
    theEyes: async (client, reaction, user) => {
        try {
            const ChanneltoSend = client.channels.cache.get('1104425577366163476');
            const emojiName = reaction.emoji.name;
            const channelName = reaction.message.channel.name;
            const messageLink = `https://discord.com/channels/${reaction.message.guild.id}/${reaction.message.channel.id}/${reaction.message.id}`;
            const now = new Date();
            const options = { 
                timeZone: 'Europe/Paris', 
                hour12: false,
                timeZoneName: 'short'
            }

            // Vérifier si l'emoji de la réaction est l'un de ceux que vous souhaitez suivre
            if (emojiName === '📝' || emojiName === '💵') {
                // Créer un client OAuth2 pour l'authentification avec Google Sheets
                const auth = new google.auth.GoogleAuth({
                    keyFile: './count-direction-188927c90cc5.json', // Assurez-vous que le chemin du fichier JSON est correct
                    scopes: 'https://www.googleapis.com/auth/spreadsheets',
                });

                // Autoriser le client à accéder à Google Sheets
                const client2 = await auth.getClient();

                // Créer une instance de l'API Google Sheets
                const sheets = google.sheets({ version: 'v4', auth: client2 });

                // Récupérer les valeurs actuelles de la colonne B et C
                const response = await sheets.spreadsheets.values.get({
                    spreadsheetId,
                    range: 'B1:C10', // Changer la plage si nécessaire
                });

                const data = response.data.values; // Récupérer toutes les données

                // Trouver l'indice de l'ID utilisateur dans la colonne B
                const index = data.findIndex(row => row[0] === user.id);

                if (index !== -1) {
                    // Récupérer la valeur actuelle dans la colonne C et la convertir en nombre
                    const currentValue = parseInt(data[index][1]) || 0;

                    // Incrémenter la valeur et la mettre à jour dans la colonne C
                    data[index][1] = currentValue + 1;

                    // Mettre à jour la feuille de calcul avec les nouvelles valeurs
                    await sheets.spreadsheets.values.update({
                        spreadsheetId,
                        range: `C${index + 1}`, // +1 car les indices commencent à 0
                        valueInputOption: 'RAW',
                        resource: {
                            values: [[data[index][1]]], // Mettre à jour la valeur dans la colonne C
                        },
                    });
                }

                // Créer un message embed avec les informations
                const embedtoSend = new Discord.EmbedBuilder()
                    .setColor('#c91d07')
                    .setTitle('Informations de réaction :')
                    .setDescription(`Nom de la personne ayant utilisé la réaction : \n<@${user.id}> \n Quelle réaction ? : "${emojiName}" \n Dans quel salon ? **#${channelName}**\n Lien du message en question : ${messageLink} \n\n Date & Heure à laquelle il l'a fait : \n **${now.toLocaleString('fr-FR', options)}**`)
                    .setThumbnail('https://lsmc.bay.life/img/lsmc.png');

                // Envoyer l'embed dans le channel spécifié
                ChanneltoSend.send({ embeds: [embedtoSend] });
            }
        } catch (error) {
            console.error('Erreur :', error);
            const channelId = "1010217082622857348";
            const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
            client.channels.cache.get(channelId).send(errorMessage); // Utilisez `client` pour accéder aux canaux
        }
    }
};
