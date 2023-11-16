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
	.setName('attentelogistique')
	.setDescription('Envoi un message attente de livraison logistique')
	.addStringOption(option =>
			option.setName('name')
			.setDescription('Définir le client à mentionner (mentionner le avec le @ ici)')
			.setRequired(true)
			.setMinLength(1)),
				async execute(interaction) {
					try {
					await interaction.deferReply({ephemeral: true})
					const designerLogistique = interaction.options.getString('name')
					interaction.editReply("Demande bien prise en compte")
						 interaction.channel.send({
						 content : `
Bonjour ${designerLogistique},
> Votre commande à bien été **enregistrée** ! <a:yes:932931929991413790>
➜ Pouvez vous fournir **vos disponibilités de la journée** pour la réception des produits ?

> Notre service de logistique **s'occupera rapidement de votre demande** ! <a:gyro:914592380739526737>
||<@&909891545510060083> <@&927272080947445811> <@&1074054575994179695>||

**En vous remerciant,**
<@1010191277238784050>
***Secrétaire du L.S.M.C. <:LSMC:915255404076883988>***` });
	}
catch (error) {
	const channelId = "1010217082622857348";
	const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
	interaction.client.channels.cache.get(channelId).send(errorMessage);
}
	}
		}





