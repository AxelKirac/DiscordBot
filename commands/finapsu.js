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
	.setName('finapsu')
	.setDescription('Remercie le patient à la fin des rendez-vous APSU')
	.addStringOption(option =>
			option.setName('name')
			.setDescription('Définir le client à mentionner (mentionner le avec le @ ici)')
			.setRequired(true)
			.setMinLength(1)),
				async execute(interaction) {
					try {
					await interaction.deferReply({ephemeral: true})
					const patientApsu = interaction.options.getString('name')
					interaction.editReply("GG, maintenant plein d'argent")
						 interaction.channel.send({
						 content : `
Bonjour ${patientApsu},

Vous voilà maintenant à **la fin de votre suivi** pour des chirurgies esthétiques. <a:gyro:914592380739526737> 

Le **Los Santos Medical Center** espère que vous êtes satisfait des résultats de votre demande !
Sachez que si vous le souhaitez, vous avez **toujours la possibilité de commencer un second suivi** par l'intermédiaire de la création d'un ticket, dans **la même catégorie**. <:APSU:1081723578589913098> 

Désormais, vous avez la possibilité de **fermer votre ticket**, merci de votre confiance envers notre service !

N'hésitez pas à **laisser un commentaire sur le professionnalisme** de votre chirurgien ou psychologue dans la section <#1080839707824504893>, tel qu'il soit ! <a:applaus:918553494615642112> 

**Bonne journée !**
<@1010191277238784050>,
***Secrétaire du L.S.M.C. <:LSMC:915255404076883988>***
` });

	}catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}}
};





