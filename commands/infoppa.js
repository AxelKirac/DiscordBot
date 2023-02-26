const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('infoppa')
		.setDescription("Message pour la discu publique sur les PPA & CMAP"),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send("Bonjour,\n\nSi vous souhaitez passer une **Evaluation Psychotechnique** *(pour le P.P.A.)* ou avoir un **Certificat Médical d'Aptitude Physique** *(pour candidature LSPD/LSSD ou une Licence Heaven)*, merci de lire attentivement le message épinglé dans le canal <#914590722248806400> afin de récupérer les rôles et d'être notifié lors des prochains rendez-vous. <a:gyro:914592380739526737>\n\nInutile de relancer les médecins dans le canal ici présent.\nC'est derniers ont une vie à côté, et n'ont aucune obligation de fournir ces certificats ! <a:gyro:914592380739526737> \nVous serez notifier à l'aide d'un ping dans le canal approprié, et il suffira simplement de lire et de réagir au message.\n\nBonne journée,\n<@1010191277238784050>\n***Secrétaire du L.S.M.C. <:LSMC:915255404076883988>***");
	}
};

