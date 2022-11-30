const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('uniteattentevs')
		.setDescription("Explique à la personne qu'on à bien reçu sa demande de vétérinaire"),
	async execute(interaction) {
		await interaction.reply("Bonjour,\n\nNous avons bien reçu votre demande de **consultation animalière**. Un membre du <@&983797860552302602> répondra bientôt à celle-ci.<:VS:992527985108336781>\n\nNe vous inquiétez pas, nos meilleurs vétérinaires sont sur le coup, **votre animal est entre de bonne main ! <a:gyro:914592380739526737>**\n\nBien à vous,\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **");
	}
};
