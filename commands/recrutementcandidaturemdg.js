const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('recrutementcandidaturemdg')
		.setDescription("Explique à la personne qu'on à bien reçu sa candidature MDG."),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send("Bonjour,\n\nNous avons bien reçu votre candidature afin de **devenir médecin de garde**. **Celle-ci sera étudiée ce mercredi**, vous aurez les résultats dans le canal <#790952963023175741>.\n\nAprès avoir lu ce message, vous pourrez fermer le ticket en cliquant sur le 🔒 afin que la Direction puisse étudier votre candidature. \n\n <:Attention2:803966002852659210> Attention : Du moment que vous envoyez votre candidature, celle-ci est **terminée et prête à être lue**. S'il manque des choses, **inutile de les rajouter ou de recréer un ticket**.\n\nMerci pour votre intérêt pour le Los Santos Medical Center. \n**Bien à vous,**\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **");
	}
};

