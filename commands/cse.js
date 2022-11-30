const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cse')
		.setDescription("Explique à la personne qu'on à bien reçu sa demande de cse"),
	async execute(interaction) {
		await interaction.reply("Bonjour,\n\nAfin de permettre à nos <@&943929547122941973> de vous répondre au mieux, merci de lire attentivement le message ci-dessous. <a:gyro:914592380739526737> \n\nSuite à votre prise de contact avec le **Los Santos Medical Center**, je me permets de vous envoyer ce mail afin que nous puissions convenir d'un **devis permettant la composition d'une équipe médicale** pour votre événement. Je vous invite à bien vouloir répondre aux questions suivantes, s'il vous plaît:\n\n- **Type** d'événement (Course, soirée, showcase etc...) :\n- **Date** de l’évènement :\n- **Lieu** de l’évènement (Adresse + Photo) :\n- **Heure de début** de l'événement :\n- **Heure de fin** de l’évènement :\n- **Heure d'arrivée** souhaitée de l'équipe médicale sur site de l'événement :\n- Y a-t-il une **place prévue pour le poste de secours?** Si oui, merci de bien vouloir l'indiquer (Photo ou plan) :\n- **Nombre de personnes** attendues sur l’événement :\n**Numéro de téléphone** à contacter en cas d'urgence :\n- **Souhaitez-vous la présence d'un poste de don du sang sur place?**\n- **Sur quel(s) motif(s)** une présence médicale est-elle souhaitée ?\n\nDans l'attente de votre réponse, je vous souhaite une belle journée et laisse mes collègues reprendre la suite.\n\n**Bien à vous,**\n<@1010191277238784050>\n**Secrétaire du L.S.M.C. <:LSMC:915255404076883988>**\nPour :\n<@676064932269391872>, <@771393182047010857> & <@412316373600174080> \n<@&943929547122941973>");
	}
};
