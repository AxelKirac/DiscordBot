const fs = require('node:fs');
const path = require('node:path');
const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, ActivityType, Status, SlashCommandBuilder, Collection, Events } = require("discord.js");
const config = require("./config.json")
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
client.login(config.token);
client.on("ready", () => {
    console.log("Bot is ready");
});


//---------------------------Import des fichiers---------------------------------------
//Les trolls de Thomas
const troll = require('./messagebot/troll.js');
const cmdAna = require('./messagebot/cmdana.js')

// Button Role PPA/CMAP /!\ Retirer le mode commentaire que pour envoyé le rôle
// const cmapppa = require('./buttonbot/cmapppa.js')

//Handle des buttons
const handleCmapPpa = require('./buttonbot/cmapppa.js')

//Statut du bot
const setStatus = require('./setstatus/setStatus.js')

//Ticket Direction Setup
const createButtonDirection = require('./directionTicket/ticket1.js')



//--------------------------------Set Statut-----------------------------------------

//Status
setStatus.setStatus

//Message
troll.troll
cmdAna.cmdAna

//Button
// cmapppa.cmapppa
handleCmapPpa.handleCmapPpa

//Ticket Direction
createButtonDirection.createButtonDirection

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

//---------------------------------------------------------------------------------

// Ajoutez une commande appelée "musique"
client.on('message', message => {
    // ...
    if (message.content.startsWith('!musique')) {
        // Récupérez le service de streaming
        let streamingService = message.content.split(" ")[1];

        // Récupérez la piste/playlist/liste de lecture à jouer
        let track = message.content.split(" ").slice(2).join(" ");

        // Jouez la piste/playlist/liste de lecture
        PlayTrack(streamingService, track);
    }
});


// Fonction pour jouer une piste/playlist/liste de lecture
function PlayTrack(streamingService, track) {
    // Récupérez la piste/playlist/liste de lecture
    // à partir du service de streaming spécifié
    let trackToPlay = streamingService.getTrack(track);

    // Rejoignez le salon vocal
    let voiceChannel = message.member.voice.channel;
    voiceChannel.join().then(connection => {

        // Jouez la piste/playlist/liste de lecture
        connection.play(trackToPlay);
    });
}

// Exporter la fonction PlayTrack()
module.exports = {
    PlayTrack: PlayTrack
};