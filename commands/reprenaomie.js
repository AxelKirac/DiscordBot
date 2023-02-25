const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reprenaomie')
		.setDescription('Envoi une permanence pour la représentante du personnel Naomie Sky'),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send("Bonjour, \nLa **représentante du personnel** <@874047050906480661> est disponible à **l'hôpital Pillbox** ou par téléphone au **5511209** afin de traiter vos problèmes en interne !\nN'hésitez pas à prendre contact avec elle pour vous confier !\n\n***Attention :*** Il ne s'agit pas d'une permanence pour les primes !\n\nhttps://cdn.discordapp.com/attachments/1004187230023204974/1074768044758413373/gif_repre_Naomie.gif")
	},
};