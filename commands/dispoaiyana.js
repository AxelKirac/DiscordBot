const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dispoaiyana')
		.setDescription('Envoi une permanence pour Dr. Aiyana Itho'),
	async execute(interaction) {
		await interaction.reply("Hey !\nLa docteur <@310889892802461696> est actuellement **disponible** à l'hôpital !\n**N'hésitez pas à prendre contact avec elle pour toute demande ou réclamation !**\n\n https://cdn.discordapp.com/attachments/1004187230023204974/1033508522572382208/gif_direction_aiyana.gif")
	},
};