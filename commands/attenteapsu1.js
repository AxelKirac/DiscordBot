const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('attenteapsu1')
		.setDescription("Explique à la personne qu'on à bien reçu sa demande et que un Psy va faire la 1ère étape"),
	async execute(interaction) {
		try {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte, attente d'un psychologue")
						 interaction.channel.send({ allowedMentions: {roles :['864329971408961546']},
						content: "Bonjour,\n\nNous avons bien reçu votre demande de consultation axée sur la chirurgie esthétique.\n\nPour votre première consultation, **un rendez vous avec un psychologue est obligatoire.** <:PSS:935573301823172691>\n\nUn membre du <@&864329971408961546> **va prendre contacte avec vous**, afin de vous définir un rendez vous. <a:gyro:914592380739526737>\n\n**Restant à votre disposition pour toutes questions,**\n\n**Bien à vous,**\n<@1010191277238784050>\n***Secrétaire du L.S.M.C. <:LSMC:915255404076883988>***"	});
	}
	catch (error) {
			const channelId = "1010217082622857348";
			const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
			interaction.client.channels.cache.get(channelId).send(errorMessage);
		}
	}
	
}
