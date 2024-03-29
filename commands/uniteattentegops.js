const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('uniteattetegops')
		.setDescription("Explique à la personne qu'on à bien reçu sa demande de Gynécologue"),
	async execute(interaction) {
		try {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
						 interaction.channel.send({ allowedMentions: {roles :['940028568543563777', '940034123450429441']},
						 content : "Bonjour,\n\nNous avons bien reçu votre demande de **consultation**. La <@&940028568543563777> ou un <@&940034123450429441> **répondra prochainement à votre demande** <:GOPS:947112386404417586> \n\nNous vous remercions pour votre confiance envers l'hôpital ! <a:gyro:914592380739526737> \n\n**Bien à vous,\n**<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **"});
	}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}}
};
