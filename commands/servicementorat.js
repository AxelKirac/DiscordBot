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
	.setName('servicementorat')
	.setDescription('Envoi un service mentorat pour les étudiants.')
	.addStringOption(option =>
			option.setName('nommentor')
			.setDescription("Indiqué dans l'encadré votre pseudo discord en commençant par '@'")
			.setRequired(true)
			.setMinLength(1)
			.setMaxLength(40))
		.addStringOption(option =>
            option.setName('telmentor')
                .setDescription('Indiqué votre numéro de téléphone juste ici.')
				.setRequired(true)
				.setMinLength(1)
				.setMaxLength(15)),
				async execute(interaction) {
					try {
					await interaction.deferReply({ephemeral: true})
					const nomMentor = interaction.options.getString('nommentor')
					const telmentor = interaction.options.getString('telmentor')
					interaction.editReply("Demande bien prise en compte")
						 interaction.channel.send({ allowedMentions: {roles :['1006604363646644274']},
						 content : `
Bonjour à vous <@&1024038809387667578>,

Le **mentor** ${nomMentor} est **actuellement disponible** pour partir en service avec vous ! <a:gyro:914592380739526737>
Vous pouvez dès à présent **prendre contact avec ce dernier** grâce à son numéro de téléphone ci-joint : ☎️ ***${telmentor} ***
Bon service à vous ! <a:applaus:918553494615642112>

Bien à vous,
<@1010191277238784050> 
**Secrétaire Administratif du L.S.M.C.** <:LSMC:915255404076883988>`})
	}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}}
};