const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
	.setName('permanencedirection')
	.setDescription('Envoi une permanence pour un membre de la Direction')
	.addStringOption(option =>
		option.setName('permanencedir')
		.setDescription('Affiche la permanence pour un membre de la Direction')
		.setRequired(true)
		.addChoices(
			{ name: "Adam", value: "Hey !\nLe docteur <@248517566530584577> est actuellement disponible!\n https://i.imgur.com/tH2mHEL.mp4" },
			{ name: "Thomas", value: "Hey !\nLe docteur <@536231631938387978> est actuellement disponible!\n https://i.imgur.com/R0ltMIA.mp4" },
			{ name: "Lao", value: "Hey !\nLa docteur <@434461194292822017> est actuellement disponible!\n https://i.imgur.com/BP5nlkj.mp4" },
			)),
			async execute(interaction) {
				const permanencedir = interaction.options.getString('permanencedir');
		await interaction.reply(`${permanencedir}`);
	}
};
	

