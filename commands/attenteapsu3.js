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
	.setName('attenteapsu3')
	.setDescription('Défini le psychologue en charge du suivi')
	.addStringOption(option =>
			option.setName('name')
			.setDescription('Définir le psychologue à ping (mentionner le avec le @ ici)')
			.setRequired(true)
			.setMinLength(1)),
				async execute(interaction) {
					try {
					await interaction.deferReply({ephemeral: true})
					const designerPsy = interaction.options.getString('name')
					interaction.editReply("Demande bien prise en compte")
						 interaction.channel.send({
						 content : `
Il s'agit ici de **votre troisième rendez-vous** suite à une chirurgie esthétique.
Celui-ci va par conséquent se dérouler avec un psychologue afin de s'assurer de votre bien être.
                         
**Celui-ci et totalement obligatoire** <a:gyro:914592380739526737>
Ne vous inquiétez pas, le ${designerPsy} **va prendre rapidement contact avec vous**. <:PSS:935573301823172691> 
**N'hésitez pas à décrire au mieux votre ressenti**, ce dernier est spécialisé dans cette branche, et saura répondre à vos questionnements.
                         
**Restant à votre disposition pour toutes questions,**
                         
**Bien à vous,**
<@1010191277238784050>
***Secrétaire du L.S.M.C. <:LSMC:915255404076883988>***` });
	}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}
}
};





