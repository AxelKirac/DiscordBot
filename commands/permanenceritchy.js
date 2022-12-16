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
	.setName('permanenceritchy')
	.setDescription('Envoi une permanence pour le Dr. Ritchy Dwight')
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
					const hospitalRitchy = interaction.options.getString('hopital')
					const endroitRitchy = interaction.options.getString('endroit')
					await interaction.reply(
			{	allowedMentions: {role:['1006604363646644274']},
				content : `
Hey !
Le docteur <@496663639349264415> est actuellement **disponible** à l'hôpital de **${hospitalRitchy}** dans le **${endroitRitchy}**!
                
**N'hésitez pas à prendre contact avec lui pour toute demande, récupérer votre prime ou réclamation !**
https://cdn.discordapp.com/attachments/1004187230023204974/1008768195689205861/Gif_ritchy_fini.gif`})
	}
};
