const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const token = require("../tokenclient/token.js")

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.login(token);


buttonRolePpa();
function buttonRolePpa() {
    client.on('ready', async () => {
        const channel = client.channels.cache.get('1042396330108141600'); //914590722248806400 << Ana Tomie CMAP-PPA     //1042396330108141600 mon salon
        channel.send({
            content: "__Bonjour,__\n\n__**Ce canal vous permet de vous donner directement les grades <@&991454913605419069> ou <@&991455109764612126> en réagissant simplement à ce message avec la bonne réaction.**__\n\n**__ <:Attention2:803966002852659210>  Ceux qui ne changent pas leurs pseudos pour mettre Prénom & Nom RP__** *(Première règle du serveur je le rappelle : clic droit sur votre nom et \"Modifier le profil du serveur\")*, **__n'obtiendrons jamais de rendez-vous ! <:Attention2:803966002852659210> __**\n\n__La légende des réactions pour s'attribuer les rôles :__\n\n**💪 Certificat Médical d'Aptitude Physique pour un recrutement LSPD/LSSD ou une licence Heaven | 5000 $  💵 **\n**🧠 Evaluations Psychotechniques pour le P.P.A. | 10 000 $  💵  *(+ 2000$ de frais de dossier pour un transfert vers un deuxième poste de police)***\n\n> Régulièrement, nos médecins **proposeront** des créneaux de rendez-vous dans ce canal en taguant le grade en question A vous de **réagir aux horaires où vous êtes disponibles !** La sélection est **aléatoire**. \n\nUne fois votre rendez-vous **terminé**, vous pouvez __**décocher la réaction vous même**__, afin de vous **retirer le rôle**.\n\n*https://www.youtube.com/watch?v=TIDTCngopaE*\n\n**Bien à vous,**\n**<@1042416711204339733>**\n**Ana Tomie <:LSMC:915255404076883988>**",
            components: [
                new ActionRowBuilder().setComponents(
                    new ButtonBuilder()
                        .setCustomId('PPA')
                        .setLabel("Evalution Psychotechnique")
                        .setStyle(ButtonStyle.Danger)
                        .setEmoji('🧠'),

                    new ButtonBuilder()
                        .setCustomId('CMAP')
                        .setLabel("Certificat médical")
                        .setStyle(ButtonStyle.Success)
                        .setEmoji('💪')
                )
            ]
    });
        module.exports = { buttonRolePpa };
    });
}

handleButtonRolePpa();

function handleButtonRolePpa() {
    const ROLES = {
        PPA: '1043131912790749204', //991454913605419069 << En attente d'éval psy  //mon test 1043131912790749204
        CMAP: '1043138176291704962' //991455109764612126 << En attente de certif médical //mon test cmap 1043138176291704962
    };

    client.on('interactionCreate', (interaction) => {
        if (interaction.isButton()) {
            const role = interaction.guild.roles.cache.get(
                ROLES[interaction.customId.toUpperCase()]
            );
            if (!role)
                return interaction.reply({ content: 'Role not found', ephemeral: true });

                const hasRole = interaction.member.roles.cache.has(role.id);

                if(hasRole) {
                    return interaction.member.roles
                    .remove(role)
                    .then((member) =>
                    interaction.reply({
                        content: `Le rôle ${role} vous à bien était supprimé ${member}`,
                        ephemeral: true
                    }))
                }

            return interaction.member.roles.add(role).then((member) => interaction.reply({
                content: `Bonjour ${member}\nLe rôle ${role} vous a bien été ajouté.\nVous serrez notifier lorsqu'une session sera proposée par un médecin, afin de pouvoir vous inscrire`,
                ephemeral: true,
            })
            )
                .catch((err) => {
                    console.log(err);
                    interaction.reply({
                        content: `Une erreur s'est produite. Le rôle ${role} ne peut pas vous être ajouté ${member} merci de contacter un membre de la direction.`,
                        ephemeral: true,
                    });
                });
        }
        module.exports = { handleButtonRolePpa };
    });
}

//Test