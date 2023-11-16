const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('attentedirection')
		.setDescription('Envoi un message de réponse au Ticket Direction'),
	async execute(interaction) {
		try {
		await interaction.deferReply({ephemeral: true}),
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send({ 
			allowedMentions: {roles: ['774368900527423548', '774369294876016710']},
			content : "Bonjour,\n\nUn membre <@&774368900527423548> ou un <@&774369294876016710> répondra bientôt à votre demande. Merci de vous assurer d'avoir correctement rédigée celle-ci. **Les demandes liées à des réanimations** ou **des absences à des rendez-vous d'Evaluations Psychotechniques** ne seront pas prises en compte et **le ticket sera fermé**. \n\n**Bonne journée,**\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **" });
	}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}
}
};

// *Numéro à remettre 774368900527423548