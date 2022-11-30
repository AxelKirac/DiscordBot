const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sondagereunion')
		.setDescription('Envoi un message pour lancer un sondage de réunion'),
	async execute(interaction) {
		await interaction.reply("Bonjour le <@&931616626686705674> !\n\nA quelle heure êtes-vous disponibles pour **la réunion de ce samedi** ? :alarm_clock:\n\nCelle-ci se déroulera en ville au **Cabinet de Psychologie du L.S.M.C.**, elle sera **rediffusée en direct sur Discord** pour les personnes absentes et un compte-rendu sera publié. <a:gyro:914592380739526737> \n\n:one: **18h00**\n:two: **20h00**\n:three: **21h00**\n:four: **22h00**\n\n:beach_umbrella: **Absent**\n\n**Bien à vous,**\n\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **");
	}
};

