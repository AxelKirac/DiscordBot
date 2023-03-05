const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('attentepsu1')
		.setDescription("Explique à la personne qu'on à bien reçu sa demande et que un Psy va faire la 1ère étape"),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte, attente d'un psychologue")
						 interaction.channel.send({ allowedMentions: {roles :['864329971408961546']},
						content: "Bonjour, \n\n Nous avons bien reçu votre demande de **chirurgie esthétique.** :APSU:1081959516846968914 Pour votre première consultation, un rendez vous avec un psychologie est obligatoire.\n Un membre du <@&864329971408961546> vas prendre contacte avec vous afin de vous proposer un rendez vous. \n Restant à disposition \n\n Bien à vous,\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **"});
	}
};
