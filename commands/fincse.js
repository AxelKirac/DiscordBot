const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fincse')
		.setDescription("Message de fin pour les CSE"),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send("Bonjour, \n\n**Merci de votre confiance envers le L.S.M.C. !**\nSi vous estimez ne plus avoir besoin d'un poste de secours dans les jours à suivre, nous vous laissons **clôturer le ticket**.\nPour cela, il suffit simplement de **cliquer sur le :lock: en haut du ticket**, et de valider la fermeture de ce dernier en appuyant sur le bouton ***Close***.\n\nEn cas d'une **nouvelle demande quelconque** nécessitant une nouvelle fois un poste de secours sur place, nous vous laisserons une nouvelle fois **ouvrir un ticket** dans la section  <#1072557483895296010>>, nous vous répondrons avec plaisir !\n\nBien à vous,\n<@1010191277238784050>\n***Secrétaire du L.S.M.C. <:LSMC:915255404076883988>***");
	}
};

