const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('recrutementmedecin2garde')
		.setDescription("Explique au gens ce que c'est les médecins de gardes"),
	async execute(interaction) {
		await interaction.reply("Bonjour,\n\nLe **Los Santos Medical Center** recrute désormais des **médecins de garde !**\nIl s'agit d'un travail avec moins d'obligation qu'un membre traditionnel, concentré sur **des tâches plus centrées**.\n\nAfin de vous renseigner sur les détails du métier, **nous vous redirigeons dans le canal <#1025731257537142824>**, afin d'y découvrir les prérequis dans les **topics épinglés**, et pourquoi pas tenter votre chance ?\n\nBien à vous, \n<@1010191277238784050>\n**Secrétaire du L.S.M.C. <:LSMC:915255404076883988>**");
	}
};

