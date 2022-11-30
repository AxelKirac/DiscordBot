const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dispolao')
		.setDescription('Envoi une permanence pour Dr. Lao Vintorez'),
	async execute(interaction) {
		await interaction.reply("Hey !\nLa docteur <@434461194292822017> est actuellement **disponible** à l'hôpital !\n**N'hésitez pas à prendre contact avec elle pour toute demande ou réclamation !**\n\n https://discord.com/channels/735967288657838170/1010217082622857348/1036958631159148565")
	},
};