const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('findirection')
		.setDescription('Envoi la réponse comme quoi il doit fermé son ticket le pelo'),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send("Bonjour, \n\nSi vous estimez que **la direction à répondu à toutes vos attentes ou questionnement**, nous vous laissons** clôturer le ticket**.\nPour cela, il suffit simplement de **cliquer sur le 🔒 en haut du ticket**, et de valider la fermeture de ce dernier en appuyant sur le bouton ***Close***.\n\nEn cas d'une future réclamation ou questionnement, **nous répondrons à ces dernières avec plaisir**, à l'intérieur d'un ticket dans la catégorie <#800382264609341482> une nouvelle fois !\n\n**Bien à vous,**\n<@1010191277238784050>\n**Secrétaire du L.S.M.C. <:LSMC:915255404076883988>**");
	}
};

