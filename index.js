//---------------------------Config don't edit---------------------------------------
const fs = require('node:fs');
const path = require('node:path');
const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, ActivityType, Status, SlashCommandBuilder, Collection, Events, Partials } = require("discord.js");
const config = require("./config.json")
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.DirectMessageReactions,
    ],
	partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});
client.login(config.token);
client.on("ready", () => {
    console.log("Bot is ready");
});
const Discord = require('discord.js');
//---------------------------Import des fichiers---------------------------------------
//Les trolls de Thomas
const troll = require('./messagebot/troll.js');
const cmdAna = require('./messagebot/cmdana.js')
// Button Role PPA/CMAP /!\ Retirer le commentaire que pour envoyé le rôle
// const cmapppa = require('./buttonbot/cmapppa.js')
//Handle des buttons
const handleCmapPpa = require('./buttonbot/cmapppa.js')
const handleNouveauStagiaire = require('./buttonbot/nouveaustagiaire.js')
// const repaHandle = require('./buttonbot/repaHandle.js')
//Statut du bot
const setStatus = require('./setstatus/setStatus.js')
//Logs slash commands
const { logSlashCommands } = require('./tools/logslashcommands.js');
const { theEyes } = require('./tools/theeyesv2.js')
const { logMentorat } =require('./tools/logmentorat.js')
//--------------------------------Launch Functions-----------------------------------------
//Status
setStatus.setStatus
//Message
// troll.troll
//Button
// cmapppa.cmapppa
handleCmapPpa.handleCmapButton
handleCmapPpa.handlePpaButton
handleNouveauStagiaire.handleNouveauStagiaireButton
// repaHandle.repaHandle

client.on('interactionCreate', async interaction => {
  await logSlashCommands(client, interaction);
  await logMentorat(client, interaction)
});
client.on('messageReactionAdd', async (reaction, user) => {
	await theEyes(client, reaction, user);
  });

//--------------------------------SlashCommands Setup don't edit--------------------------------
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});
//----------------------------------------------------------------------------------
	// client.on('messageCreate', async (message) => {
	// 	// Vérifier si l'auteur du message n'est pas le bot
	// 	if (message.author.bot) return;
	  
	// 	// Votre ID d'utilisateur cible
	// 	const userId = '864579301755191296';
	  
	// 	// Vérifier si l'auteur du message correspond à l'utilisateur cible
	// 	if (message.author.id === userId) {
	// 	  // Supprimer le message de l'utilisateur
	// 	  await message.delete();
	  
	// 	  // Envoyer un message éphémère à l'utilisateur
	// 	  message.author.send({
	// 		content: "**Quoicoubeh**",
	// 		ephemeral: true
	// 	  }).catch(console.error);
	// 	}
	//   });
	  
	  
	
	// const userID = '413812981080784924';
	// const messageContent = `https://media.tenor.com/7r-BGEoIohkAAAAd/meme-cat.gif`;
	
	// client.on('ready', async () => {
	//   try {
	// 	const user = await client.users.fetch(userID);
	// 	user.send(messageContent)
	// 	  .then(() => console.log('Message envoyé avec succès à l\'utilisateur.'))
	// 	  .catch(error => console.error('Erreur lors de l\'envoi du message :', error));
	//   } catch (error) {
	// 	console.error('Impossible de trouver l\'utilisateur avec l\'ID spécifié.');
	//   }
	// });
	
	
//----------------------------------------------

// const { google } = require('googleapis');

// // Chargez les données de configuration à partir de config.json

// async function fetchData() {

// 	  // Configurez l'authentification
// 	  const auth = new google.auth.GoogleAuth({
// 		keyFile: './combiendeprimeverser-3956546dcb1d.json',
// 		scopes: 'https://www.googleapis.com/auth/spreadsheets',
// 	  });
// 	// Créez un client authentifié
// 	const client2 = await auth.getClient();
// 	const sheets = google.sheets({ version: 'v4', auth: client2 });
// 	const spreadsheetId = '12LBizi5KXCnEmEMPu-ogiPeLxZcVmCmMLcPw-GGV5Ds';
  
// 	// Définissez la plage de cellules contenant les cases à cocher
// 	const range = 'test!A1:A10'; // Remplacez par votre plage de cellules
  
// 	// Obtenez les valeurs de la plage spécifiée
// 	const response = await sheets.spreadsheets.values.get({
// 	  spreadsheetId,
// 	  range,
// 	});
  
// 	// Parcourez les valeurs récupérées
// 	const rows = response.data.values;
// 	if (rows.length) {
// 	  console.log('Cases cochées :');
// 	  rows.forEach((row) => {
// 		console.log(`${row[0]}`); // Affiche la valeur de chaque case cochée
// 	  });
// 	} else {
// 	  console.log('Aucune case cochée.');
// 	}
//   }
  
//   // Appel de la fonction asynchrone pour exécuter le code
//   fetchData();
  


client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
  
	// Récupérer l'ID du salon spécifique où vous souhaitez envoyer le message
	const channelId = '1172651158687469639'; // Remplacez cela par l'ID réel de votre salon
  
	// Récupérer le salon à partir de l'ID
	const channel = client.channels.cache.get(channelId);
  
	// Vérifier si le salon existe
	if (channel) {
	  // Envoyer le message dans le salon spécifié
	  channel.send("Pourtant, moi j'arrive à travailler et être secrétaire L.S.M.C. en même temps mec");
	} else {
	  console.log(`Le salon avec l'ID ${channelId} n'a pas été trouvé.`);
	}
  });