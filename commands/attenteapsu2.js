const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('attenteapsu2')
		.setDescription("Explique à la personne que maintenant elle attend un membre de L'APSU"),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte, attente d'un Chirurgien")
						 interaction.channel.send({ allowedMentions: {roles :['1080840539424948284']},
						content: "Il s'agit ici de votre second rendez-vous en vue d'une chirurgie esthétique. <:APSU:1081723578589913098>\nCelui-ci va par conséquent se dérouler avec un chirurgien.\n\nNe vous inquiétez pas, un membre de l'unité <@&1080840539424948284> va prendre rapidement contacte avec vous. <a:gyro:914592380739526737> \nN'hésitez pas à poser toutes vos questions lors de cette rencontre, ce dernier est spécialisé dans cette branche, et saura répondre à vos questionnements.\n\nSi vous n'avez pas effectué votre premier rendez-vous avec un psychologue, nous ne pourrons donner suite à votre demande. <a:gyro:914592380739526737>\n\nRestant à votre disposition pour toutes questions,\n\nBien à vous,\n<@1010191277238784050>\n***Secrétaire du L.S.M.C. <:LSMC:915255404076883988>***"});
	}
};
