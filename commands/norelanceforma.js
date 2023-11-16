const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('norelanceforma')
		.setDescription("Message explicatif pour éviter les relances concernant les formations."),
	async execute(interaction) {
		try {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send("**<a:gyro:914592380739526737> Merci de ne pas relancer les formateurs. ** \n \n Comme **expliqué précédement**, ces derniers **proposeront des sessions** en fonction de **leurs disponibilités !** \n \n Bien entendu, **vous serez notifié** lors de ces dernières.");
	}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}}
};

