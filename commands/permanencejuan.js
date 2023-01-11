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
	.setName('permanencejuan')
	.setDescription('Envoi une permanence pour le Dr. Juan-Marco De La Bodega')
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
					await interaction.deferReply({ephemeral: true})
					const hospitalJuan = interaction.options.getString('hopital')
					const endroitJuan = interaction.options.getString('endroit')
					interaction.editReply("Demande bien prise en compte")
						 interaction.channel.send({ allowedMentions: {roles :['1006604363646644274']},
					content : `
Hey !
Le docteur <@170557885376495616> est actuellement **disponible** à l'hôpital de **${hospitalJuan}** dans le **${endroitJuan}**!
                
**N'hésitez pas à prendre contact avec lui pour toute demande, récupérer votre prime ou réclamation !**
https://i.imgur.com/DgFAgkK.mp4`})
	}
};
