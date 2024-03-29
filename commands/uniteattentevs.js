const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('uniteattentevs')
		.setDescription("Explique à la personne qu'on à bien reçu sa demande de vétérinaire"),
	async execute(interaction) {
		try {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
						 interaction.channel.send({ allowedMentions: {roles :['983797860552302602']},
						 content: "Bonjour,\n\nNous avons bien reçu votre demande de **consultation animalière**. Un membre du <@&983797860552302602> répondra bientôt à celle-ci.<:VS:992527985108336781>\n\nNe vous inquiétez pas, nos meilleurs vétérinaires sont sur le coup, **votre animal est entre de bonne main ! <a:gyro:914592380739526737>**\n\nBien à vous,\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **"});
	}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}}
};