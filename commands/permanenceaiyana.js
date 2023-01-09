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
	.setName('permanenceaiyana')
	.setDescription('Envoi une permanence pour la Dr. Aiyana Durazzo')
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
					const hospitalAiyana = interaction.options.getString('hopital')
					const endroitAiyana = interaction.options.getString('endroit')
					interaction.editReply("Demande bien prise en compte")
						 interaction.channel.send({ allowedMentions: {role:['1006604363646644274']},
						content:`
Hey !
La docteur <@310889892802461696> est actuellement **disponible** à l'hôpital de **${hospitalAiyana}** dans le **${endroitAiyana}**!
                
**N'hésitez pas à prendre contact avec elle pour toute demande, récupérer votre prime ou réclamation !**
https://i.imgur.com/CkPaizQ.mp4`	}
)
	}
		}