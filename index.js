const fs = require('node:fs');
const path = require('node:path');
const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, ActivityType, Status, SlashCommandBuilder, Collection, Events } = require("discord.js");
const token = require("./tokenclient/token.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
client.login(token);
client.on("ready", () => {
    console.log("Bot is ready");
});


//---------------------------Import des fichiers---------------------------------------

//Disponibilité Haut-Gradés
const dispo = require("./messagebot/dispo.js");
//Tout ce qui est relié au unités
const unite = require("./messagebot/unite.js");
//Tout ce qui est relié au recrutement
const recrutement = require('./messagebot/recrutement.js');
//Ce qui va touché à la direction
const dir = require('./messagebot/dir.js');
//Les trolls de Thomas
const troll = require('./messagebot/troll.js');
//Button Test
const buttonTest = require('./buttonbot/buttonTest.js')
const cmdAna = require('./messagebot/cmdana.js')

//Button Role PPA/CMAP /!\ Retirer le mode commentaire que pour envoyé le rôle
// const buttonRolePpa = require('./buttonbot/buttonRolePpa.js')

//Handle des buttons
const handleButtonRolePpa = require('./buttonbot/buttonRolePpa.js')

//Statut du bot
const setStatus = require('./setstatus/setStatus.js')

//Ticket Direction Setup
const createButtonDirection = require('./directionTicket/ticket1.js')

//--------------------------------Set Statut-----------------------------------------

//Status
setStatus.setStatus

//Message
dispo.dispo
unite.unite
recrutement.recrutement
dir.dir
troll.troll
cmdAna.cmdAna

//Button
buttonTest.buttonTest
// buttonRolePpa.buttonRolePpa
handleButtonRolePpa.handleButtonRolePpa

//Ticket Direction
createButtonDirection.createButtonDirection

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