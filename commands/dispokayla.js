const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dispokayla')
		.setDescription('Envoi une permanence pour Dr. Kayla Smith'),
	async execute(interaction) {
		await interaction.reply("Hey !\nLa docteur <@455801536413564940> est actuellement **disponible** à l'hôpital !\n**N'hésitez pas à prendre contact avec elle pour toute demande ou réclamation !**\n\n https://media.discordapp.net/attachments/1004187230023204974/1033770398803828826/gif_direction_6.gif?width=763&height=763")
	},
};