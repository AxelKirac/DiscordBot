const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('repretheo')
		.setDescription('Envoi une permanence pour le représentant du personnel Théo Sacek'),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send("Bonjour, \nLe **représentant du personnel** <@502017384459010059> est disponible à **l'hôpital Pillbox** ou par téléphone au **61264** afin de traiter vos problèmes en interne !\nN'hésitez pas à prendre contact avec lui pour vous confier !\n\n***Attention :*** Il ne s'agit pas d'une permanence pour les primes !\n\nhttps://cdn.discordapp.com/attachments/1004187230023204974/1072574949304320020/gif_rdp_theo.gif")
	},
};