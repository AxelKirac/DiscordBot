const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
	.setName('permanencehg')
	.setDescription('Envoi une permanence pour un membre de la Direction')
	.addStringOption(option =>
		option.setName('nom')
		.setDescription('Affiche la permanence pour quel Haut-Gradé ?')
		.setRequired(true)
		.addChoices(
			{ name: "Ritchy", value: "Hey !\nLe <@496663639349264415> est **disponible** à l'hôpital!\n https://i.imgur.com/STyE4qj.mp4" },
			{ name: "Juan", value: "Hey !\nLe <@170557885376495616> est **disponible** à l'hôpital!\n https://i.imgur.com/DgFAgkK.mp4" },
			{ name: "Aiyana", value: "Hey !\nLa <@310889892802461696> est **disponible!** à l'hôpital\n https://i.imgur.com/CkPaizQ.mp4" },
			{ name: "Kayla", value: "Hey !\nLa <@455801536413564940> est **disponible!** à l'hôpital\n https://i.imgur.com/Nv8pRcM.mp4" },
			)),
			async execute(interaction) {
				const permanencehg = interaction.options.getString('nom');
		await interaction.reply(`${permanencehg}`);
	}
};
	