const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('demanderea1')
		.setDescription("Réponse à des demandes de réanimations stupides"),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send("Bonjour,\n\nNous avons bien pris en compte **votre demande de réanimation sur Discord**. \n\nNous avons envoyé immédiatement **une équipe de scientifiques de pointe spécialisée dans la régénération cellulaire** pour vous aider à sortir du coma. Ils ont un arsenal de technologies avancées qui peuvent stimuler les fonctions vitales et restaurer les connexions neuronales endommagées.\n\nNous vous demandons de **ne pas avoir peur** si vous ressentez des sensations étranges ou si vous entendez des bruits inhabituels pendant la procédure. Il s'agit simplement de signes que votre corps se réveille et se régénère.\n\nNous avons également **envoyé des infirmiers et des infirmières qualifiés** pour veiller sur vous pendant le processus de réanimation. Ils sont formés pour répondre à tous vos besoins médicaux et assurer votre confort.\n\nNous espérons que vous vous rétablirez bientôt et nous sommes **impatients de vous voir revenir sur ce Discord** pour des demandes de réanimations similaires à celle-ci.\n\nSérieusement, que vouliez-vous que je vous réponde ? Si vous êtes blessés ou inconscient, vous n'avez rien à faire sur Discord ! **Attendez un médecin ou prenez l'Unité X.**\n\nBien à vous,\n<@1010191277238784050>\n***Secrétaire du L.S.M.C. <:LSMC:915255404076883988>***");
	}
};




