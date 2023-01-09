const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reprekiyane')
		.setDescription('Envoi une permanence pour la représentante du personnel Kiyane Vintorez'),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send("Bonjour, \nLa **représentante du personnel** <@451378090711449621> est disponible à **l'hôpital Pillbox** ou par téléphone au **2130712** afin de traiter vos problèmes en interne !\nN'hésitez pas à prendre contact avec elle pour vous confier !\n\n***Attention :*** Il ne s'agit pas d'une permanence pour les primes !\n\nhttps://cdn.discordapp.com/attachments/943141757586141195/1037080949004980234/representante_Kiyane3.gif")
	},
};