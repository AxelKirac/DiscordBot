const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('attenteapsu2')
		.setDescription("Explique à la personne que maintenant elle attend un membre de L'APSU"),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte, attente d'un Chirurgien")
						 interaction.channel.send({ allowedMentions: {roles :['1080840539424948284']},
						content: "Bonjour,\n \n Il s'agit ici de votre second rendez-vous. Ce dernier va se dérouler avec un chirurgien. \n Un médecin de l'unité <@&1080840539424948284> va prendre contacte avec vous. \n Attention si vous n'avez pas effectué votre premier rendez-vous avec un psychologue, nous ne pourrons donner suite à votre demande.\n Restant à disposition \n\n Bien à vous,\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **"});
	}
};
