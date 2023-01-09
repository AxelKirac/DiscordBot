const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('deloc')
		.setDescription("Envoi le message si le boug c'est trompé d'hôpital"),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send("Bonjour, \n\nSuite à la récente ouverture des locaux **Central Los Santos Medical Center**, les __certificats médicaux d'aptitude physique__ ainsi que les __tests psychotechniques__ sont désormais délocalisés, et **déplacé dans ce dernier ! <a:gyro:914592380739526737> **\n\nLes médecins vous **attendront** donc à **l'accueil de l'hôpital Central**, en photo ci-contre. <a:gyro:914592380739526737> \nhttps://cdn.discordapp.com/attachments/1010217082622857348/1027691342853320845/unknown.png\n\nMerci de votre compréhension,\n<@1010191277238784050>\n**Secrétaire du L.S.M.C. <:LSMC:915255404076883988>**");
	}
};




