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
	.setName('permanencecrèche')
	.setDescription('Envoi une permanence de crèche')
	.addStringOption(option =>
			option.setName('début')
			.setDescription('Indiqué quand la permanence commencera en respectant se schéma XXhXX')
			.setRequired(true)
			.setMinLength(5)
			.setMaxLength(5))
		.addStringOption(option =>
            option.setName('fin')
                .setDescription('Indiqué quand la permanence se terminera en respectant se schéma XXhXX')
				.setRequired(true)
				.setMinLength(5)
				.setMaxLength(5)),
				async execute(interaction) {
					const responseStart = interaction.options.getString('début')
					const responseEnd = interaction.options.getString('fin')
					await interaction.reply(
			{	allowedMentions: {role:['1006604363646644274']},
				content : `Bonjour à tous et à toutes <@&1006604363646644274> !

			Le docteur ${interaction.user} est actuellement disponible pour garder vos enfants à la garderie.
			N'hésitez pas à prendre contact avec lui au 0523 par téléphone ou simple message !
			
			**Disponible de : ${responseStart} à ${responseEnd}**
			
			L'équipe du Gynecology Obstetrics & Pediatrics Services vous remercie pour votre confiance ! :GOPS: 
										https://i.imgur.com/QxQPj9c.png`})
	}
};
// *Numéro à remettre 774368900527423548