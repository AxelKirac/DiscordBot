const { SlashCommandBuilder, Client, GatewayIntentBits, Message} = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

module.exports = {
	data: new SlashCommandBuilder()
	.setName('designerdirection')
	.setDescription('Défini un Haut-Gradé ou Directeur qui doit répondre')
	.addStringOption(option =>
			option.setName('name')
			.setDescription('Définir un haut gradé ou un directeur à ping (mentionner le avec le @ ici)')
			.setRequired(true)
			.setMinLength(1)),
				async execute(interaction) {
					try {
					await interaction.deferReply({ephemeral: true})
					const designerDirection = interaction.options.getString('name')
					interaction.editReply("Demande bien prise en compte")
						 interaction.channel.send({
						 content : `
Bonjour,
Merci de patienter encore quelques instants, ${designerDirection} répondra bientôt à votre demande. 
Merci de vous assurer d'avoir correctement rédigée cette dernière. 
**Les demandes liées à des réanimations** ou **des absences à des rendez-vous d'Evaluations Psychotechniques** ne seront pas prises en compte et **le ticket sera fermé**. 

**Bonne journée,**
<@1010191277238784050>
**Secrétaire du L.S.M.C. <:LSMC:915255404076883988> **` });
	}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}
		}
};





