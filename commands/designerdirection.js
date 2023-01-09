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
	.setName('designerdirection')
	.setDescription('Défini un Haut-Gradé ou Directeur qui doit répondre')
	.addStringOption(option =>
			option.setName('name')
			.setDescription('Définir un haut gradé ou un directeur à ping (mentionner le avec le @ ici)')
			.setRequired(true)
			.setMinLength(1)),
				async execute(interaction) {
					await interaction.deferReply({ephemeral: true})
					const designerDirection = interaction.options.getString('name')
					interaction.editReply("Demande bien prise en compte")
						 interaction.channel.send({ allowedMentions: {users:true},
						 content : `Bonjour,\n\ ${designerDirection} répondra bientôt à votre demande. Merci de vous assurer d'avoir correctement rédigée celle-ci. **Les demandes liées à des réanimations** ou **des absences à des rendez-vous d'Evaluations Psychotechniques** ne seront pas prises en compte et **le ticket sera fermé**. \n\n**Bonne journée,**\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **` });
	}
};





