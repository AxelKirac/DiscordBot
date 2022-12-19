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
	.setName('permanenceadam')
	.setDescription('Envoi une permanence pour le Dr. Adam Itho')
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
					const hospitalAdam = interaction.options.getString('hopital')
					const endroitAdam = interaction.options.getString('endroit')
					await interaction.reply(
			{	allowedMentions: {role:['1006604363646644274']},
				content : `
Hey !
Le docteur <@248517566530584577> est actuellement **disponible** à l'hôpital de **${hospitalAdam}** dans le **${endroitAdam}**!
                
**N'hésitez pas à prendre contact avec lui pour toute demande, récupérer votre prime ou réclamation !**
https://cdn.discordapp.com/attachments/1004187230023204974/1008763965993668658/gif_adam_fini.gif`})
	}
};




