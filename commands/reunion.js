const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reunion')
		.setDescription('Envoi un message pour lancer un sondage de réunion'),
	async execute(interaction) {
		try {
		await interaction.deferReply({ ephemeral: true });
		const message = await interaction.editReply("Demande bien prise en compte");
		const channel = interaction.channel;
		const roleId = '931616626686705674';
		const mention = `<@&${roleId}>`;

		const pollMessage = await channel.send({
			allowedMentions: { roles: [roleId] },
			content:
				`Bonjour <@&931616626686705674>, 

Vous êtes toutes et tous conviés **ce Samedi à 18h00** à la **réunion du L.S.M.C.** <:LSMC:915255404076883988> 
				
Celle-ci se déroulera en ville au **Cabinet de la Maze Bank**, dans les locaux de l'hôpital.
Pour les absent, cette dernière sera **rediffusée en direct sur Discord**, et un compte-rendu sera publié. <a:gyro:914592380739526737> 
<:blue_arrow:1119194238614253689> <#747168875497521282>
				
Vous êtes par conséquent attendu à **18h00**, à l'entrée des locaux.

**__Légende :__**
<a:yes:932931929991413790> ~ **Présent**
:beach: ~ **Absent**
				
**Bien à vous, **
<@1010191277238784050>
**Secrétaire du L.S.M.C. <:LSMC:915255404076883988>**`
		});

		await pollMessage.react('<a:yes:932931929991413790>');
		await pollMessage.react('🏖️');

		// ...
	}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}}
};
