const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reprejo')
		.setDescription('Envoi une permanence pour le représentant du personnel Jo Liberty'),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send("Bonjour, \nLe **représentant du personnel** <@1064450257808789525> est disponible à **l'hôpital Pillbox** ou par téléphone au **5551725** afin de traiter vos problèmes en interne !\nN'hésitez pas à prendre contact avec elle pour vous confier !\n\n***Attention :*** Il ne s'agit pas d'une permanence pour les primes !\n\nhttps://cdn.discordapp.com/attachments/943141757586141195/1060594837239365683/gif_rp_jo.gif")
	},
};