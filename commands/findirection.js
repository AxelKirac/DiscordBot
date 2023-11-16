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
	.setName('findirection')
	.setDescription('Envoi la réponse comme quoi il doit fermé son ticket le pelo')
	.addStringOption(option =>
			option.setName('mention')
			.setDescription('Mentionne le mec avec son @')
			.setRequired(true)
			.setMinLength(1)
			.setMaxLength(100)),
				async execute(interaction) {
					try {
					await interaction.deferReply({ephemeral: true})
					const mentioon = interaction.options.getString('mention')
					interaction.editReply("Demande bien prise en compte")
						 interaction.channel.send({ allowedMentions: {roles :['1006604363646644274','774370184328642590']},
						content:`Bonjour ${mentioon}, 
						
Si vous estimez que **la direction à répondu à toutes vos attentes ou questionnement**, nous vous laissons** clôturer le ticket**.
Pour cela, il suffit simplement de **cliquer sur le 🔒 en haut du ticket**, et de valider la fermeture de ce dernier en appuyant sur le bouton ***Close***.

En cas d'une future réclamation ou questionnement, **nous répondrons à ces dernières avec plaisir**, à l'intérieur d'un ticket dans la catégorie <#800382264609341482> une nouvelle fois !

**Bien à vous,**
<@1010191277238784050>
**Secrétaire du L.S.M.C. <:LSMC:915255404076883988>**;

`}
)
	}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}
		}}
