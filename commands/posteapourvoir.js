const { SlashCommandBuilder, Client, GatewayIntentBits, Message } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

module.exports = {
	data: new SlashCommandBuilder()
	.setName('posteapourvoir')
	.setDescription('Envoi une confirmation de la prise en compte de sa candidature')
	.addStringOption(option =>
		option.setName('personne')
			.setDescription('mentionne la personne qui a postuler via le @')
			.setRequired(true)
			.setMinLength(1)
			.setMaxLength(100))
	.addStringOption(option =>
			option.setName('poste')
			.setDescription('Précise le poste en question via le @')
			.setRequired(true)
			.setMinLength(1)
			.setMaxLength(100)),
				async execute(interaction) {
					try {
					await interaction.deferReply({ephemeral: true})
					const posteapr = interaction.options.getString('poste')
					const personne = interaction.options.getString('personne')
					interaction.editReply("Demande bien prise en compte")
						 interaction.channel.send({ allowedMentions: {roles :['1006604363646644274']},
					content : `
Bonjour ${personne},
                
Votre candidature à bien été pris en compte pour le poste de ${posteapr}.
Pour que votre candidature puisse être traité merci de bien vouloir **clôturer le ticket.**
Pour cela, il suffit simplement de **cliquer sur le 🔒 en haut du ticket**

Bien à vous,
**La Direction du L.S.M.C.** <:LSMC:915255404076883988>`})
	}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}}
};
