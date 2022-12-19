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
	.setName('permanencekayla')
	.setDescription('Envoi une permanence pour la Dr. Kayla Smith')
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
					const hospitalKayla = interaction.options.getString('hopital')
					const endroitKayla = interaction.options.getString('endroit')
					await interaction.reply(
			{	allowedMentions: {role:['1006604363646644274']},
				content : `
Hey !
La docteur <@455801536413564940> est actuellement **disponible** à l'hôpital de **${hospitalKayla}** dans le **${endroitKayla}**!
                
**N'hésitez pas à prendre contact avec elle pour toute demande, récupérer votre prime ou réclamation !**
https://i.imgur.com/Nv8pRcM.mp4`})
	}
};