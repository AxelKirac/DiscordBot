const Discord = require('discord.js');

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

// const Command = require('../Structure/Command');

// module.exports = new Command ({
//     name: 'Ticket Direction',
//     description: "Permet d'ouvrir votre ticket pour la direction",
//     utilisation: "",
//     alias: ["Ticket Direction", "Tdir"],
//     permission: Discord.Permissions.FLAGS.MANAGE_GUILD,
//     category: "Ticket Direction",
//     cooldown: 10,
// })

createButtonDirection()
function createButtonDirection() {
    client.on('ready', async () => {
        const channel = client.channels.cache.get('1044540297612382250'); //Salon Test
        channel.send({
            embeds: [
                {
                  "title": "Contacter la Direction du L.S.M.C.",
                  "description": "Pour entrer en contact avec la Direction du Los Santos Medical Center, merci de réagir par 📩.",
                  "color": 10748418
                }],
            components: [
                new ActionRowBuilder().setComponents(
                    new ButtonBuilder()
                        .setCustomId('DirectionOpen')
                        .setLabel("Créer un Ticket")
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('📩'),
                        )
                    ]
                }
                )
            }
            )
            module.exports = { createButtonDirection }
        };