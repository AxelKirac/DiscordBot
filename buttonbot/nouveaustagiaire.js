const { Client, GatewayIntentBits, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, EmbedBuilder } = require("discord.js");

const axios = require('axios')
const config = require("../config.json")

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
client.login(config.token);

const apiToken = '8cfee20de7b4cb381c300727d9d09f7c'
function handleNouveauStagiaireButton() {
    client.on('interactionCreate', async (interaction) => {
        if (interaction.isButton() && interaction.customId === 'CREATE-NEW-USER') {
            try {
                const modal = new ModalBuilder()
                    .setCustomId('CREATE-NEW-USER-MODAL')
                    .setTitle('Ajouter un utilisateur sur le site');

                // Create the text input components
                const fullName = new TextInputBuilder()
                    .setCustomId('fullName')
                    // The label is the prompt the user sees for this input
                    .setLabel("Prénom Nom")
                    // Short means only a single line of text
                    .setStyle(TextInputStyle.Short);

                const discordId = new TextInputBuilder()
                    .setCustomId('discordId')
                    .setLabel("ID Discord")
                    // Paragraph means multiple lines of text.
                    .setStyle(TextInputStyle.Short);

                const phoneNumber = new TextInputBuilder()
                    .setCustomId('phoneNumber')
                    .setLabel("Numéro de téléphone")
                    // Paragraph means multiple lines of text.
                    .setStyle(TextInputStyle.Short);

                // An action row only holds one text input,
                // so you need one action row per text input.
                const firstActionRow = new ActionRowBuilder().addComponents(fullName);
                const secondActionRow = new ActionRowBuilder().addComponents(discordId);
                const thirdActionRow = new ActionRowBuilder().addComponents(phoneNumber);

                // Add inputs to the modal
                modal.addComponents(firstActionRow, secondActionRow, thirdActionRow);

                // Show the modal to the user
                await interaction.showModal(modal);
            }
            catch (error) {
                const channelId = "1010217082622857348";
                const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
                interaction.client.channels.cache.get(channelId).send(errorMessage);
            }
        }
        if (interaction.customId === 'CREATE-NEW-USER-MODAL') {
            try {
                await interaction.deferReply({ ephemeral: true })
                const fullName = interaction.fields.getTextInputValue('fullName');
                const discordId = interaction.fields.getTextInputValue('discordId');
                const phone = interaction.fields.getTextInputValue('phoneNumber');
                const guild = interaction.guild;
                const contentMsg = `Bienvenue à toi <@${discordId}>,

Aujourd'hui tu as désormais intégré le Los Santos Medical Center.
Ce message te permetteras à tête reposé une fois ta formation terminé d'avoir toutes les informations nécessaire
pour que tu puissent devenir un bon Médecin.
                
Tout d'abord les Manuels !
Un manuel récapitulatif rédigé par la **Dr. Naomie Sky** est présent juste ici.
https://www.canva.com/design/DAFhVOIg8GY/DTRgR-KY1FzGl41aqu-EKw/view?utm_content=DAFhVOIg8GY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink
Je t'invite à le lire il résume l'entièreté des documents à connaître !
                
Ensuite toujours bon à prendre un petit pense bête que tu pourras trouver ci-dessous qui t'aidera au quotidien.
N'hésite pas à le garder à proximité, il est là pour ça. *(Voir Photo ci-dessous)*
https://cdn.discordapp.com/attachments/765407365758713896/1113843536245313706/Pense_bete.png
                
Egalement voici le lien du **Site L.S.M.C.**, garde le à portée de main tu en aura tout le temps besoin au long de ta carrière.
https://lsmc.bay.life
                
A prendre en compte tu es actuellement débutant certe, mais il se peut que tu tombe sur des cas de D.O.A./D.O.S.
Mais dans le càs où tu n'a personne pour t'aider à le faire voici un petit Protocole pour ce genre de cas !
Garde le bien précieusement il te sera utile en temps voulu :
https://tinyurl.com/ProtocoleDOA

Et en conclusion parlons également du **Cycle universitaire.**
Tu auras trois étape concernant ta progression :
- Diplôme D'Infirmier -> (Pour celui-ci tu devra avec le contrat de travail qui ta déjà été envoyé au préalable remplir un dossier d'inscription à l'université afin d'effectué le cursus nécessaire, sinon tu ne pourras pas évolué au delà de infirmier au L.S.M.C.)
- Diplôme de Médecine - > (Même chose que Infirmier mais bloqué Résident)
                
Bon courage à toi !`
                const member = await guild.members.fetch(discordId);
                await member.send(contentMsg);
                const rolesToAdd = ['1024038809387667578', '774309896974893096', '774370184328642590', '931616626686705674'];
                const roleToDelete = '873149217948971008'
                const rollee = guild.roles.cache.get(roleToDelete);
                    member.roles.remove(rollee);
                    rolesToAdd.forEach(roleId => member.roles.add(roleId));
                    //--------------------------------------------------------GOOGLE SHEETS
                    const { google } = require('googleapis');

                    async function insertRow() {
                      try {
                        // Configurez l'authentification
                        const auth = new google.auth.GoogleAuth({
                          keyFile: './combiendeprimeverser-3956546dcb1d.json',
                          scopes: 'https://www.googleapis.com/auth/spreadsheets',
                        });
                    
                        // Créez un client authentifié
                        const client2 = await auth.getClient();
                    
                        const sheets = google.sheets({ version: 'v4', auth: client2 });
                    
                        const spreadsheetId = '12LBizi5KXCnEmEMPu-ogiPeLxZcVmCmMLcPw-GGV5Ds';
                        const sheetName = 'Template Prime (Pas toucheww)';
                    
                        // Récupérer l'ID de la feuille
                        const { data: { sheets: sheetList } } = await sheets.spreadsheets.get({
                          spreadsheetId,
                        });
                    
                        const sheet = sheetList.find(sheet => sheet.properties.title === sheetName);
                        const sheetId = sheet ? sheet.properties.sheetId : null;
                    
                        if (sheetId) {
                          const fullName = interaction.fields.getTextInputValue('fullName');
                    
                          // Utilisez appendDimension pour ajouter une nouvelle ligne à la fin
                          const requests = [
                            {
                              appendDimension: {
                                sheetId,
                                dimension: 'ROWS',
                                length: 1,
                              },
                            },
                            {
                              pasteData: {
                                coordinate: {
                                  sheetId,
                                  rowIndex: 125, // Mettez le numéro de la dernière ligne
                                  columnIndex: 2,
                                },
                                data: fullName,
                                type: 'PASTE_NORMAL',
                                html: true,
                              },
                            },
                            // Ajoutez d'autres demandes pour copier et formater les données selon vos besoins
                          ];
                    
                          // Exécutez les demandes pour créer une nouvelle ligne
                          const { data: response } = await sheets.spreadsheets.batchUpdate({
                            spreadsheetId,
                            resource: {
                              requests,
                            },
                          });
                    
                          console.log('Nouvelle ligne créée avec succès');
                        } else {
                          console.error('Feuille non trouvée :', sheetName);
                        }
                      } catch (error) {
                        console.error('Une erreur s\'est produite :', error);
                      }
                    }
                    
                    insertRow();
                    
                    
                    
                    
                    
                    
                    
                    

//--------------------------------------------------------------------------------------


async function insertRow2() {
  try {
    // Configurez l'authentification
    const auth = new google.auth.GoogleAuth({
      keyFile: './combiendeprimeverser-3956546dcb1d.json',
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });

    // Créez un client authentifié
    const client2 = await auth.getClient();

    const sheets = google.sheets({ version: 'v4', auth: client2 });

    const spreadsheetId = '12LBizi5KXCnEmEMPu-ogiPeLxZcVmCmMLcPw-GGV5Ds';
    const sheetName = 'Effectifs';
    const targetRowIndex = 7;

    // Récupérer l'ID de la feuille
    const { data: { sheets: sheetList } } = await sheets.spreadsheets.get({
      spreadsheetId,
    });

    const sheet = sheetList.find(sheet => sheet.properties.title === sheetName);
    const sheetId = sheet ? sheet.properties.sheetId : null;

    if (sheetId) {
      const fullName = interaction.fields.getTextInputValue('fullName');
      const today = new Date();
      const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

      const requests = [
        {
          insertDimension: {
            range: {
              sheetId,
              dimension: 'ROWS',
              startIndex: targetRowIndex - 1,
              endIndex: targetRowIndex,
            },
            inheritFromBefore: false,
          },
        },
        {
          pasteData: {
            coordinate: {
              sheetId,
              rowIndex: targetRowIndex - 1,
              columnIndex: 1,
            },
            data: fullName,
            type: 'PASTE_NORMAL',
            html: true,
          },
        },
        {
          repeatCell: {
            range: {
              sheetId,
              startRowIndex: targetRowIndex - 1,
              endRowIndex: targetRowIndex,
              startColumnIndex: 1,
              endColumnIndex: 2,
            },
            cell: {
              userEnteredFormat: {
                backgroundColor: {
                  red: 0.9,
                  green: 0.9,
                  blue: 0.9,
                },
                textFormat: {
                  fontSize: 14,
                  bold: true,
                },
                horizontalAlignment: 'CENTER',
                verticalAlignment: 'MIDDLE',
              },
            },
            fields: 'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment,verticalAlignment)',
          },
        },
        {
          pasteData: {
            coordinate: {
              sheetId,
              rowIndex: targetRowIndex - 1,
              columnIndex: 3,
            },
            data: formattedDate,
            type: 'PASTE_NORMAL',
            html: true,
          },
        },
        {
          repeatCell: {
            range: {
              sheetId,
              startRowIndex: targetRowIndex - 1,
              endRowIndex: targetRowIndex,
              startColumnIndex: 3,
              endColumnIndex: 4,
            },
            cell: {
              userEnteredFormat: {
                backgroundColor: {
                  red: 0.95,
                  green: 0.95,
                  blue: 0.95,
                },
                textFormat: {
                  fontSize: 14,
                  bold: true,
                },
                horizontalAlignment: 'CENTER',
                verticalAlignment: 'MIDDLE',
              },
            },
            fields: 'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment,verticalAlignment)',
          },
        },
      ];

      const { data: response } = await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        resource: {
          requests,
        },
      });

      console.log('Nouvelle ligne créée avec succès à la ligne', targetRowIndex);
    } else {
      console.error('Feuille non trouvée :', sheetName);
    }
  } catch (error) {
    console.error('Une erreur s\'est produite :', error);
  }
}

insertRow2();











                    //-----------------------------------------------------------


                axios('https://lsmc.bay.life/api/users?token=' + apiToken, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true,
                    data: JSON.stringify({ fullName, discordId, phone }),
                }).then(async function(res) {
                    let result = res.data
                    try {
                        if(result?.success) {
                            const logChannelId = '1112888198729826304'; // log channel
                            const content = `||<@&774368900527423548>, <@&774369294876016710>, <@&815289292817170493>|| -> <@${discordId}>`; // Direction, Haut-gradé, Représentants du personnel
                            const embed = new EmbedBuilder()
                                .setTitle(interaction.member.displayName + ' a ajouté un utilisateur.')
                                .setColor('Red')
                                .setDescription('Merci de bien vouloir lui attribuer son grade en ville !');
                            interaction.client.channels.cache.get(logChannelId).send({
                                content,
                                embeds: [embed]
                            });
                            await interaction.followUp('Compte crée avec succès.')
                        } else {
                            await interaction.followUp('Une erreur est survenue à la création du compte. Merci de vérifier que le compte n\'existe pas déjà.')
                        }
                    }
                    catch(error) {
                        await interaction.followUp('Une erreur est survenue à la création du compte. Merci de vérifier que le compte n\'existe pas déjà.')
                        const channelId = "1010217082622857348";
                        const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
                        interaction.client.channels.cache.get(channelId).send(errorMessage);
                    }
                }).catch(e => console.log(e))
            }
            catch (error) {
                const channelId = "1010217082622857348";
                const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
                interaction.client.channels.cache.get(channelId).send(errorMessage);
            }
        }
    });
}

handleNouveauStagiaireButton();

module.exports = { handleNouveauStagiaireButton };

