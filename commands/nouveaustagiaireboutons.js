const { SlashCommandBuilder, Client, GatewayIntentBits, ButtonStyle, ButtonBuilder, ActionRowBuilder} = require("discord.js");

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
});

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nouveaustagiaireboutons')
		.setDescription('Envoi une permanence de crèche'),
	async execute(interaction) {
		try {
			await interaction.deferReply({ephemeral: true})

			const createUser = new ActionRowBuilder()
				.addComponents(new ButtonBuilder()
					.setCustomId('CREATE-NEW-USER')
					.setLabel('🚀Ajouter un étudiant sur le site')
					.setStyle(ButtonStyle.Success))
			interaction.channel.send({
				content: 'Bonjour,\nAfin d\'ajouter un utilisateur sur le site des EMS, il vous suffit de cliquer sur le bouton ci-dessous, et de remplir le formulaire.',
				embeds: [],
				components: [createUser]
			})
			return interaction.editReply({ content: 'Demande prise en compte.' })
		}
		catch (error) {
			const channelId = "1010217082622857348";
			const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
			interaction.client.channels.cache.get(channelId).send(errorMessage);
		}}
};