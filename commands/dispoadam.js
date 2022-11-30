const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dispoadam')
		.setDescription('Envoi une permanence pour Dr. Adam Itho'),
	async execute(interaction) {
		await interaction.reply("Hey !\nLe docteur <@248517566530584577> est actuellement **disponible** à l'hôpital !\n**N'hésitez pas à prendre contact avec lui pour toute demande ou réclamation !**\n\n https://cdn.discordapp.com/attachments/1004187230023204974/1008763965993668658/gif_adam_fini.gif");
	}
};

