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
	.setName('permanencethomas')
	.setDescription('Envoi une permanence pour le Dr. Thomas Recon')
	.addStringOption(option =>
			option.setName('hopital')
			.setDescription('Indiqué dans quel hôpital doit se déroulé la permanence (Pillbox ou Strawberry ?)')
			.setRequired(true)
			.setMinLength(1)
			.setMaxLength(10))
		.addStringOption(option =>
            option.setName('endroit')
                .setDescription('Ou allez vous être ? (Exemple : Couloir, Bureau)')
				.setRequired(true)
				.setMinLength(1)
				.setMaxLength(15)),
				async execute(interaction) {
					try {
					await interaction.deferReply({ephemeral: true})
					const hospitalThomas = interaction.options.getString('hopital')
					const endroitThomas = interaction.options.getString('endroit')
					interaction.editReply("Demande bien prise en compte")
						 interaction.channel.send({ allowedMentions: {roles :['1006604363646644274','774370184328642590']},
						 content : `
Hey !
Le docteur <@536231631938387978> est actuellement **disponible** à l'hôpital de **${hospitalThomas}** dans le **${endroitThomas}**!
                
**N'hésitez pas à prendre contact avec lui pour toute demande, récupérer votre prime ou réclamation !**
https://cdn.discordapp.com/attachments/1004187230023204974/1066314912332267520/gif_direction_12.gif
<@&774370184328642590>`})
	}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}}
};