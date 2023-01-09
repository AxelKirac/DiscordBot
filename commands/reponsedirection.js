const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reponsedirection')
		.setDescription("Explique que TOI tu vas répondre à sa demande"),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send(`Bonjour,\n\nVotre demande à bien été prise en compte.\nNe vous inquiétez pas, ${interaction.user} **vous donnera une réponse** dans les plus bref délais !\nEn attendant, nous vous demandons de bien vouloir **patienter quelques instant supplémentaires**, afin que ce dernier trouve le temps de vous répondre.\n\n**Merci de votre compréhension !**\n\n**Bonne journée,**\n<@1010191277238784050> \n**Secrétaire du L.S.M.C.:LSMC: **`);
	}
};

