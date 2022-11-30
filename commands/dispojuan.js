const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dispojuan')
		.setDescription('Envoi une permanence pour Dr. Juan-Marco De La Bodega'),
	async execute(interaction) {
		await interaction.reply("Hey !\nLe docteur <@170557885376495616> est actuellement **disponible** à l'hôpital !\n**N'hésitez pas à prendre contact avec lui pour toute demande ou réclamation !**\n\n https://cdn.discordapp.com/attachments/1004187230023204974/1026220656708300940/gif_direction_2.gif")
	},
};