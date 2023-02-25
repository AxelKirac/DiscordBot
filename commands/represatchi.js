const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('represatchi')
		.setDescription('Envoi une permanence pour le représentant du personnel Satchi Atachi'),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send("Bonjour, \nLe **représentant du personnel** <@397135890960613376> est disponible à **l'hôpital Pillbox** ou par téléphone au **1114561** afin de traiter vos problèmes en interne !\nN'hésitez pas à prendre contact avec lui pour vous confier !\n\n***Attention :*** Il ne s'agit pas d'une permanence pour les primes !\n\nhttps://cdn.discordapp.com/attachments/1004187230023204974/1078744407903305818/gif_repre_satchi.gif")
	},
};