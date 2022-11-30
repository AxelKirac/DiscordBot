const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dispothomas')
		.setDescription('Envoi une permanence pour Dr. Thomas Recon'),
	async execute(interaction) {
		await interaction.reply("Hey !\nLe docteur <@536231631938387978> est actuellement **disponible** à l'hôpital !\n**N'hésitez pas à prendre contact avec lui pour toute demande ou réclamation !**\n\n https://cdn.discordapp.com/attachments/1004187230023204974/1033511048151572640/gif_direction_thomate.gif")
	},
};