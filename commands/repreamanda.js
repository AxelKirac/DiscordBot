const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('repreamanda')
		.setDescription('Envoi une permanence pour la représentante du personnel Amanda Pierce'),
	async execute(interaction) {
		await interaction.reply("Bonjour, \nLa **représentante du personnel** <@281868284955983883> est disponible à **l'hôpital Pillbox** ou par téléphone au **253348** afin de traiter vos problèmes en interne !\nN'hésitez pas à prendre contact avec elle pour vous confier !\n\n***Attention :*** Il ne s'agit pas d'une permanence pour les primes !\n\nhttps://cdn.discordapp.com/attachments/943141757586141195/1041370585437065366/gif_rp_amanda.gif")
	},
};