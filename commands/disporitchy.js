const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('disporitchy')
		.setDescription('Envoi une permanence pour Dr. Ritchy Dwight'),
	async execute(interaction) {
		await interaction.reply("Hey !\nLe docteur <@496663639349264415> est actuellement **disponible** à l'hôpital !\n**N'hésitez pas à prendre contact avec lui pour toute demande ou réclamation !**\n\n https://cdn.discordapp.com/attachments/1004187230023204974/1008768195689205861/Gif_ritchy_fini.gif")
	},
};