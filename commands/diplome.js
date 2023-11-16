const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('diplome')
		.setDescription("Explique au gens comment fonctionne les diplômes"),
	async execute(interaction) {
		try {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send("Bonjour,\nDû à l'ouverture de l'Université, nous allons désormais **modifier nos prérequis pour intégrer notre service médical.** \nDésormais, nous allons imposer la possession du **diplôme d'aide soignant**, à photocopier et **coller dans le formulaire de recrutement.**\n\nAfin de vous **intégrer au cursus de formation**, il suffit de vous diriger vers la radio D de **l'University of Los Santos**, que vous pourrez retrouver dans la catégorie <#738730240800718888> de la ville. \n\nUne fois cela fait, il suffit simplement de **suivre les démarches d'inscription** dans la catégorie <#997783675670384660>\n\n**Bien à vous,\n**<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988>**");
	}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}}
};

