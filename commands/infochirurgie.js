const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('infochirurgie')
		.setDescription('Information sur la chirurgie esthétique'),
	async execute(interaction) {
		try {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send("Bonjour,\n\nSi vous souhaitez prendre rendez-vous pour une demande de chirurgie esthétique, il suffit de vous rendre dans le canal <#1080839519676416001>, et d'**ouvrir un ticket à l'intérieur** de ce dernier. <a:gyro:914592380739526737>\nVous serez ensuite **pris en charge par un psychologue**, qui vous suivra du début à la fin de votre consultation.\n\n**Un chirurgien vous sera également rapidement attitré**, avec qui vous aurez bien entendu l'occasion de discuter avant l'opération.\n\nNous vous conseillons tout de même de **vous renseigner un maximum** sur les risques et complications possible suite à la chirurgie esthétique, mais également sur **les tarifications complètes** de cette dernière. <a:gyro:914592380739526737> \n\n**Inutile de relancer les médecins dans le ticket**, ces derniers prennent en compte vos demandes de consultations, même si cela prend quelques heures ! <a:gyro:914592380739526737>\n\nCordialement,\n<@1010191277238784050>\n***Secrétaire du L.S.M.C. <:LSMC:915255404076883988>***");
	}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}
		}
};

