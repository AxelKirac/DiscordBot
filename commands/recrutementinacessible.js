const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('recrutementinacessible')
		.setDescription("Explique à la personne que son lien google doc n'est pas accessible"),
	async execute(interaction) {
		try {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send("Bonjour,\n\nVotre candidature n’est pas accessible. Il faut que vous partagiez le lien en lecteur :\n« **Partager** » (en haut à droite) :arrow_right: « **Remplacer par tous les utilisateurs disposant du lien** » (en bas de la fenêtre à gauche) :arrow_right: Bien mettre en **Lecteur** et **Copier le lien**.\nC’est ce lien qu’il faut nous envoyer. <a:gyro:914592380739526737> \n\nNous attendons votre candidature. \n\n**Bien à vous,\n**<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **");
	}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}}
};

