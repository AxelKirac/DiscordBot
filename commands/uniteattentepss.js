const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('uniteattentepss')
		.setDescription("Explique à la personne qu'on à bien reçu sa demande de psychologue"),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
						 interaction.channel.send({ allowedMentions: {roles :['864329971408961546']},
						content: "Bonjour,\n\nNous avons bien reçu votre demande de **consultation psychologique**. Un membre du <@&864329971408961546> répondra bientôt à celle-ci.<:PSS:935573301823172691>\n\nNe vous inquiétez pas, tout ce qui est dit ici est sous le secret médical. <a:gyro:914592380739526737> \n\nBien à vous,\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **"});
	}
};
