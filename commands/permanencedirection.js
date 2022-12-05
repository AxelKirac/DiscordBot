const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
	.setName('permanencedirection')
	.setDescription('Envoi une permanence pour un membre de la Direction')
	.addStringOption(option =>
		option.setName('name')
		.setDescription('Affiche la permanence pour quel directeur(ice) ?')
		.setRequired(true)
		.addChoices(
			{ name: "Adam", value: "Hey !\nLe <@248517566530584577> est **disponible** à l'hôpital!\n https://i.imgur.com/tH2mHEL.mp4" },
			{ name: "Thomas", value: "Hey !\nLe <@536231631938387978> est **disponible** à l'hôpital!\n https://i.imgur.com/R0ltMIA.mp4" },
			{ name: "Lao", value: "Hey !\nLa <@434461194292822017> est **disponible!** à l'hôpital\n https://i.imgur.com/BP5nlkj.mp4" },
			)),
			async execute(interaction) {
				const permanencedir = interaction.options.getString('name');
		await interaction.reply(`${permanencedir}`);
	}
};
	

