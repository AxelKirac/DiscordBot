const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('recrutementoff')
		.setDescription("Explique au gens que les recrutements sont actuellement fermé"),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send("Bonjour,\n\nLes recrutements pour intégrer le Los Santos Medical Center sont **pour le moment fermés** cette semaine. Vous verrez dans le canal <#809765274231636008> quand ceux-ci seront à nouveau ouvert. <a:gyro:914592380739526737>\n\nAfin de rejoindre nos service, nous vous redirigons vers la radio-D de **l'University of Los Santos**, afin de **vous inscrire** dans le cursus de formation en vue du **diplome d'aide-soignant**, pour le prix de 10 000$ qui deviendra **obligatoire** à votre évolution dans le service du **Los Santos Medical Center.**\n\nMerci pour votre intérêt pour notre hôpital.\n\nBien à vous,\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **");
	}
};

