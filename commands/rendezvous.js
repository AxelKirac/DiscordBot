const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rendezvous')
		.setDescription("Envoi le message si le type ne sait pas lire le salon CMAP-PPA"),
	async execute(interaction) {
		try {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send("Bonjour,\n\nSi vous souhaitez passer une **Evaluation Psychotechnique** (pour le P.P.A.) ou avoir un **Certificat Médical d'Aptitude Physique** (pour candidature LSPD/LSSD/LSFD ou une Licence Heaven), merci de lire **attentivement** le message épinglé dans le canal <#914590722248806400> afin de récupérer les rôles et d'être notifié lors des prochains rendez-vous. \n\n**Bonne journée,**\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **");
	}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}}
};




