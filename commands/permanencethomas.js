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
					await interaction.deferReply({ephemeral: true})
					const hospitalThomas = interaction.options.getString('hopital')
					const endroitThomas = interaction.options.getString('endroit')
					interaction.editReply("Demande bien prise en compte")
						 interaction.channel.send({ allowedMentions: {roles :['1006604363646644274']},
						 content : `
Hey !
Le docteur <@536231631938387978> est actuellement **disponible** à l'hôpital de **${hospitalThomas}** dans le **${endroitThomas}**!
                
**N'hésitez pas à prendre contact avec lui pour toute demande, récupérer votre prime ou réclamation !**
https://i.imgur.com/R0ltMIA.mp4`})
	}
};