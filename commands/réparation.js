const { SlashCommandBuilder, Client, GatewayIntentBits, Message} = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

module.exports = {
	data: new SlashCommandBuilder()
	.setName('réparation')
	.setDescription('Abus sur les kits de répa')
	.addStringOption(option =>
			option.setName('name')
			.setDescription('Définir le petit filou à ping (mentionner le avec le @ ici)')
			.setRequired(true)
			.setMinLength(1)),
				async execute(interaction) {
					try {
					await interaction.deferReply({ephemeral: true})
					const designerfilou = interaction.options.getString('name')
                    const designerheure = interaction.options.getString('name')
                    const designerdate = interaction.options.getString('name')
					interaction.editReply("Demande bien prise en compte")
						 interaction.channel.send({
						 content : 
`Bonjour ${designerfilou},

Tu as dernièrement retirer un **kit de réparation** du frigo sans le notifier. :toolbox:

> **Date** de la sortie : ${designerdate}
> **Heure** de la sortie : ${designerheure}

Pour rappel, ces derniers doivent **impérativement être renseignés** dans le canal <#857206663860715541>, pour permettre à nos équipes de logistique de garder une vue sur les stocks ! <a:gyro:914592380739526737>
Merci de ta compréhension !

Bien à toi,
<@1010191277238784050>
**Secrétaire du L.S.M.C.**` });
	}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}}
};





