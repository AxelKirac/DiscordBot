const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('diplome')
		.setDescription("Explique au gens comment fonctionne les diplômes"),
	async execute(interaction) {
		await interaction.reply("Bonjour,\nDû à l'ouverture de l'Université, nous allons désormais **modifier nos prérequis pour intégrer notre service médical.** \nDésormais, nous allons imposer la possession du **diplôme d'aide soignant**, à photocopier et **coller dans le formulaire de recrutement.**\n\nAfin de vous **intégrer au cursus de formation**, il suffit de vous diriger vers la radio D de **l'University of Los Santos**, que vous pourrez retrouver dans la catégorie <#738730240800718888> de la ville. \n\nUne fois cela fait, il suffit simplement de **suivre les démarches d'inscription** dans la catégorie <#997783675670384660>\n\n**Bien à vous,\n**<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988>**");
	}
};

