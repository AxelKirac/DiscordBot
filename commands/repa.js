const { ButtonBuilder, ButtonStyle, SlashCommandBuilder, Client, GatewayIntentBits, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ModalSubmitInteraction } = require("discord.js");
const config = require("../config.json");
const { GoogleAuth } = require('google-auth-library');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.login(config.token);

const { google } = require('googleapis');
const fs = require('fs');

// Remplacez 'YOUR_SPREADSHEET_ID' par l'ID de votre feuille de calcul Google Sheets
const spreadsheetId = '11uZcYR63NK8owq-X9jZ1B5PJYauE8kGgaoqiOvp13XQ';

// Créez un objet auth avec le fichier JSON des identifiants
const auth = new GoogleAuth({
    keyFile: './reparation-401716-c16514a1cadb.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
});

// Créez un client authentifié pour accéder à l'API Google Sheets
const sheets = google.sheets({ version: 'v4', auth });

// Fonction pour mettre à jour la feuille de calcul Google Sheets
async function updateGoogleSheets(username, kitrepaValue, kitnettoyageValue, plaquecarValue, date) {
    try {
        const res = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Feuille Des Réparations',
            valueInputOption: 'RAW',
            resource: {
                values: [[username, kitrepaValue, kitnettoyageValue, plaquecarValue, date]],
            },
        });

        console.log(`${res.data.updates.updatedCells} cells updated.`);
    } catch (err) {
        console.error('The API returned an error:', err);
    }
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('repa')
        .setDescription("test"),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });

        const button = new ButtonBuilder()
            .setCustomId('OPEN_MODAL_BUTTON')
            .setLabel('Réparation 🔧')
            .setStyle(ButtonStyle.Success);

        const row = new ActionRowBuilder().addComponents(button);

        interaction.channel.send({ content: 'Pour toutes utilisation de kit de Réparation ou Nettoyage merci de compléter le formulaire.', components: [row] });

    }
};




client.on('interactionCreate', async (interaction) => {
    if (interaction.customId === 'OPEN_MODAL_BUTTON') {
        const modal1 = new ModalBuilder()
            .setCustomId('CREATE-REPARATION')
            .setTitle('Réparation');

        const kitrepa = new TextInputBuilder()
            .setCustomId('kitderepa')
            .setLabel("Quantité de Kit de réparation pris?")
            .setStyle(TextInputStyle.Short);

        const kitnettoyage = new TextInputBuilder()
            .setCustomId('kitdenettoyage')
            .setLabel("Quantité de Kit de nettoyage pris?")
            .setStyle(TextInputStyle.Short);

        const plaquecar = new TextInputBuilder()
            .setCustomId('plaquecar')
            .setLabel("Plaque du Véhicule")
            .setStyle(TextInputStyle.Short);

        const firstActionRow = new ActionRowBuilder().addComponents(kitrepa);
        const secondActionRow = new ActionRowBuilder().addComponents(kitnettoyage);
        const thirdActionRow = new ActionRowBuilder().addComponents(plaquecar);
        modal1.addComponents(firstActionRow, secondActionRow, thirdActionRow);
        await interaction.showModal(modal1);
    }

    if (interaction.customId === 'CREATE-REPARATION') {

        const kitrepaValue = interaction.fields.getTextInputValue('kitderepa');
        const kitnettoyageValue = interaction.fields.getTextInputValue('kitdenettoyage');
        const plaquecarValue = interaction.fields.getTextInputValue('plaquecar');

        const username = interaction.user.username;
        const date = new Date();
        const formattedDate = date.toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });

        await updateGoogleSheets(username, kitrepaValue, kitnettoyageValue, plaquecarValue, formattedDate);
        await interaction.reply({ content: 'Réparation bien pris en compte!', ephemeral: true });

    }
});