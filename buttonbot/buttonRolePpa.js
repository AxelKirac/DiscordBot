const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.login("MTA0MjQxNjcxMTIwNDMzOTczMw.GIqAuB.rNNtcgYPLrO2PcopaBBfrX1rk4jlxEunCB0gqs");


// buttonRolePpa();
// function buttonRolePpa() {
//     client.on('ready', async () => {
//         const channel = client.channels.cache.get('1042396330108141600');
//         channel.send({
//             content: 'Selectionne ton rôle avec les buttons',
//             components: [
//                 new ActionRowBuilder().setComponents(
//                     new ButtonBuilder()
//                         .setCustomId('PPA')
//                         .setLabel("Psychotechnique")
//                         .setStyle(ButtonStyle.Success)
//                         .setEmoji('👀')
//                 ),
//                 new ActionRowBuilder().setComponents(
//                     new ButtonBuilder()
//                         .setCustomId('CMAP')
//                         .setLabel("CMAP")
//                         .setStyle(ButtonStyle.Success)
//                         .setEmoji('👀')
//                 )
//             ]
//     });
//         module.exports = { buttonRolePpa };
//     });
// }

handleButtonRolePpa();

function handleButtonRolePpa() {
    const ROLES = {
        PPA: '1043131912790749204',
        CMAP: '1043138176291704962'
    };

    client.on('interactionCreate', (interaction) => {
        if (interaction.isButton()) {
            const role = interaction.guild.roles.cache.get(
                ROLES[interaction.customId.toUpperCase()]
            );
            if (!role)
                return interaction.reply({ content: 'Role not found', ephemeral: true });

            return interaction.member.roles.add(role).then((member) => interaction.reply({
                content: `Le rôle ${role} vous à bien été ajouté à vous ${member}`,
                ephemeral: true,
            })
            )
                .catch((err) => {
                    console.log(err);
                    interaction.reply({
                        content: `Une erreur s'est produite. Le rôle ${role} ne peut pas vous être ajouté ${member}.`,
                        ephemeral: true,
                    });
                });
        }
        module.exports = { handleButtonRolePpa };
    });
}

