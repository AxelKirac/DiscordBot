const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('recrutementinacessible')
		.setDescription("Explique à la personne que son lien google doc n'est pas accessible"),
	async execute(interaction) {
		await interaction.reply("Bonjour,\n\nVotre candidature n’est pas accessible. Il faut que vous partagiez le lien en lecteur :\n« **Partager** » (en haut à droite) :arrow_right: « **Remplacer par tous les utilisateurs disposant du lien** » (en bas de la fenêtre à gauche) :arrow_right: Bien mettre en **Lecteur** et **Copier le lien**.\nC’est ce lien qu’il faut nous envoyer. <a:gyro:914592380739526737> \n\nNous attendons votre candidature. \n\n**Bien à vous,\n**<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **");
	}
};

