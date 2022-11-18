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

buttonTest();
function buttonTest() {
    client.on('messageCreate', message => {
        if (message.author.bot)
            return;

        if (message.content === "sendbutton") {

            const row = new ActionRowBuilder().setComponents(
                new ButtonBuilder()
                    .setCustomId('buttonCreateTicket')
                    .setLabel("Open Tickets")
                    .setStyle(ButtonStyle.Danger)
                    .setEmoji('👀')
            );
            message.reply({
                content: "Create Ticket avec this button",
                embeds: [
                    {
                        "title": "Annuaire de la Direction & Hauts-Gradé L.S.M.C",
                        "description": "__**Direction :**__\n> **Directeur : Dr. Adam Itho, :telephone: 1011**\n> **Directeur Adjoint : Thomas Recon, :telephone:5102143**\n> **Directrice de Centre : Dr. Lao Vintorez, :telephone: 109519**\n\n__**Haut-Gradé : **__\n> **Chef de Pôle : Dr. Ritchy Dwight, :telephone:  170691**\n> **Chef de Service : Dr. Juan-Marco De-La-Bodega, :telephone: 11871 **\n> **Cheffe de Chirurgie : Dr. Aiyana Itho, :telephone: 2802801**\n> **Cheffe de Chirurgie : Dr. Kayla Smith, :telephone: 0523**\n> **Chef de Chirurgie : Peter Lengin :telephone: 8505616**",
                        "url": "https://www.youtube.com/watch?v=HX0yCHFzXm0",
                        "color": 16711937
                    }
                ],
                components: [row]
            });
            module.exports = { buttonTest };
        };
    });
}
