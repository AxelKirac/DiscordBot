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
	.setName('recrutementoff')
	.setDescription('Annonce que les recrutements sont clos')
	.addStringOption(option =>
			option.setName('name')
			.setDescription('Définir le candidat à ping (mentionner le avec le @ ici)')
			.setRequired(true)
			.setMinLength(1)),
				async execute(interaction) {
					try {
					await interaction.deferReply({ephemeral: true})
					const designercandidat = interaction.options.getString('name')
					interaction.editReply("Demande bien prise en compte")
						 interaction.channel.send({
						 content : 
`Bonjour ${designercandidat},

Les recrutements pour intégrer le Los Santos Medical Center sont **pour le moment fermés** cette semaine. Vous verrez dans le canal <#809765274231636008> quand ceux-ci seront à nouveau ouvert. <a:gyro:914592380739526737>

De plus, **il n'est désormais plus nécessaire de posséder le diplôme** pour intégrer les effectifs du **Los Santos Medical Center**.
Néanmoins, il faut prendre note qu'une **inscription sera obligatoire** une fois le service intégrer, pour garantir la corecte évolution. <a:gyro:914592380739526737>

Merci pour votre intérêt pour notre hôpital.

Bien à vous,
<@1010191277238784050>` });
	}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}}
};





