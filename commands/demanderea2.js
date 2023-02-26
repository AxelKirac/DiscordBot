const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('demanderea2')
		.setDescription("Réponse à des demandes de réanimations stupides 2"),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send("Bonjour,\n\nNous avons bien pris en compte votre **demande de réanimation sur Discord**. :gyro:\n\nNous sommes prêts à intervenir pour vous sauver, **peu importe où vous êtes** !\n\n**Si vous êtes en montagne**, nous avons une équipe de cosmonautes expérimentés qui peuvent intervenir rapidement pour vous secourir. Ils sont équipés de **combinaisons spatiales** avancées qui leur permettent de respirer dans des environnements difficiles et de se déplacer facilement sur des terrains accidentés.\nIls peuvent également utiliser leurs **réacteurs de fusée** pour vous transporter en toute sécurité hors de la montagne. :astronaut: \n\nDe plus, si vous êtes pris **dans une tempête de neige**, nos cosmonautes sont également équipés de **fusées de chaleur** pour vous réchauffer et vous maintenir en vie jusqu'à ce que vous soyez secouru, et reconduis à Los Santos, où vous serez rapidement mis au chaud. :snowman: \n\nEn effet, **si vous êtes dans l'eau**, nous avons **des ambulances aquatiques** équipées de **propulseurs de haute technologie** qui peut naviguer dans toutes les conditions météorologiques et marines pour vous secourir. \nNos plongeurs professionnels sont également prêts à intervenir pour vous aider à sortir de l'eau et à vous ramener en sécurité. :man_playing_water_polo:\n\nEffet, si par malheurs **vous êtes dans l'espace**, pas de panique !\nNous avons **une navette spatiale** spécialement conçue pour les opérations de sauvetage.\nElle est équipée de tout ce dont vous avez besoin pour **survivre dans l'espace**, y compris un système de recyclage de l'air, un système de support de vie et des réserves de nourriture et d'eau. :rocket:\n\nSérieusement, que vouliez-vous que je vous réponde ? Si vous êtes blessés ou inconscient, **vous n'avez rien à faire sur Discord ! Attendez un médecin ou prenez l'Unité X.** :gyro:\n\nCordialement,\n<@1010191277238784050>\n***Secrétaire du L.S.M.C. <:LSMC:915255404076883988>***");
	}
};




