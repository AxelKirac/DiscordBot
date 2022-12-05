const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const config = require("../config.json")

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.login(config.token);


// buttonRolePpa();
// function buttonRolePpa() {
//     client.on('ready', async () => {
//         const channel = client.channels.cache.get('1010217082622857348');
//         channel.send({
//             content: "__Bonjour,__\n\n__**Ce canal vous permet de vous attribuer directement les grades <@&991454913605419069> ou <@&991455109764612126> en appuyant simplement sur le bon bouton ci-dessous.**__ :gyro:  \n\n Ceux qui ne **changent pas leurs pseudos** pour mettre Prénom & Nom RP*(Première règle du serveur je le rappelle : clic droit sur votre nom et \"Modifier le profil du serveur\")*, **n'obtiendrons jamais de rendez-vous !** :gyro: \n\n__Légendes des rendez-vous :__\n\n🧠 Évaluation**Psychotechniques** pour le P.P.A. | **10 000 $**  💵  *(+ 2000$ de frais de dossier pour un transfert vers un deuxième poste de police)*\n\n💪 **Certificat Médical d'Aptitude Physique** pour un recrutement LSPD/LSSD ou une licence Heaven | **5000 $**\nRégulièrement, nos médecins **proposeront** des créneaux de rendez-vous dans ce canal en taguant le grade en question. A vous de **réagir aux horaires où vous êtes disponibles !** La sélection est **aléatoire**. \n\nUne fois votre rendez-vous **terminé**, vous pouvez __**appuyer à nouveau sur le bouton**__, afin de vous **retirer le rôle**. <a:gyro:914592380739526737> \n\n*vidéo explicative : https://www.youtube.com/watch?v=TIDTCngopaE*\n\n**Bien à vous,**\n**<@1010191277238784050>** \n*** Secrétaire L.S.M.C. <:LSMC:915255404076883988>***",
//             components: [
//                 new ActionRowBuilder().setComponents(
//                     new ButtonBuilder()
//                         .setCustomId('PPA')
//                         .setLabel("Evalution Psychotechnique")
//                         .setStyle(ButtonStyle.Danger)
//                         .setEmoji('🧠'),

//                     new ButtonBuilder()
//                         .setCustomId('CMAP')
//                         .setLabel("Certificat médical")
//                         .setStyle(ButtonStyle.Success)
//                         .setEmoji('💪')
//                 )
//             ]
//     });
//         module.exports = { buttonRolePpa };
//     });
// }

handleButtonRolePpa();

function handleButtonRolePpa() {
    const ROLES = {
        PPA: '991454913605419069',    //Ana Tomie > 991454913605419069    //Ana Thomas > 1043131912790749204
        CMAP: '991455109764612126'    //Ana Tomie > 991455109764612126    //Ana Thomas > 1043138176291704962
    };

    client.on('interactionCreate', (interaction) => {
        if (interaction.isButton()) {
            const role = interaction.guild.roles.cache.get(
                ROLES[interaction.customId.toUpperCase()]
            );
            // if (!role)
            //     return interaction.reply({ content: 'Role not found', ephemeral: true });

                const hasRole = interaction.member.roles.cache.has(role.id);

                if(hasRole) {
                    return interaction.member.roles
                    .remove(role)
                    .then((member) =>
                    interaction.reply({
                        content: `Bonjour ${member},\nLe rôle ${role} vous à bien été supprimé !\nMerci de votre confiance envers le L.S.M.C. ! <a:applaus:918553494615642112>`,
                        ephemeral: true
                    }))
                }

            return interaction.member.roles.add(role).then((member) => interaction.reply({
                content: `Bonjour ${member},\nLe rôle ${role} vous a bien été ajouté.\nVous **serrez notifier lorsqu'une session sera proposée** par un médecin, afin de pouvoir vous inscrire. <a:gyro:914592380739526737> \nUne fois votre rendez-vous terminé, vous pourrez **recliquer sur ce même bouton afin de vous retirer le rôle**. <a:wash:994230658211786813> \nBonne journée !`,
                ephemeral: true,
            })
            )
                .catch((err) => {
                    console.log(err);
                    interaction.reply({
                        content: `Une erreur s'est produite. Le rôle ${role} n'a pas pus vous être ajouté, merci de bien vouloir réessayer.`,
                        ephemeral: true,
                    });
                });
        }
        module.exports = { handleButtonRolePpa };
    });
}

//Test