const { SlashCommandBuilder, Client, GatewayIntentBits, Message } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

module.exports = {
	data: new SlashCommandBuilder()
	.setName('permanencecrèche')
	.setDescription('Envoi une permanence de crèche')
	.addStringOption(option =>
			option.setName('début')
			.setDescription('Indiqué quand la permanence commencera en respectant se schéma XXhXX')
			.setRequired(true)
			.setMinLength(5)
			.setMaxLength(5))
		.addStringOption(option =>
            option.setName('fin')
                .setDescription('Indiqué quand la permanence se terminera en respectant se schéma XXhXX')
				.setRequired(true)
				.setMinLength(5)
				.setMaxLength(5))
				.addStringOption(option =>
					option.setName('téléphone')
						.setDescription('Indique ton numéro de téléphone')
						.setRequired(true)
						.setMinLength(3)
						.setMaxLength(9)),
				async execute(interaction) {
					try {
					await interaction.deferReply({ephemeral: true})
					const responseStart = interaction.options.getString('début')
					const responseEnd = interaction.options.getString('fin')
					const numTel = interaction.options.getString('téléphone')
					interaction.editReply("Demande bien prise en compte")
						 interaction.channel.send({ allowedMentions: {roles :['1006604363646644274']},
						content: `
Bonjour à tous et à toutes <@&1006604363646644274> !

Le docteur ${interaction.user} est actuellement disponible pour garder vos enfants à la garderie.
N'hésitez pas à prendre contact avec au ${numTel} par téléphone, simple message ou alors par mail sur la radio D !
			
**Disponible de : ${responseStart} à ${responseEnd}**
			
L'équipe du Gynecology Obstetrics & Pediatrics Services vous remercie pour votre confiance ! <:creche:1053264035124088882>
https://i.imgur.com/BzUTNsO.png`})
	}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}}
};