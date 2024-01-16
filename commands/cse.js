const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cse')
		.setDescription("Explique à la personne qu'on à bien reçu sa demande de cse"),
	async execute(interaction) {
		try {
		await interaction.deferReply({ephemeral: true})
			interaction.editReply("Demande bien prise en compte")
				interaction.channel.send({ allowedMentions: {roles :['943929547122941973']},
				content : `
				Bonjour,

Afin de permettre à nos <@&943929547122941973> de vous répondre au mieux, merci de lire attentivement le message ci-dessous. <a:gyro:914592380739526737> 

Suite à votre prise de contact avec le **Los Santos Medical Center**, je me permets de vous envoyer ce mail afin que nous puissions convenir d'un **devis permettant la composition d'une équipe médicale** pour votre événement. Je vous invite à bien vouloir répondre aux questions suivantes, s'il vous plaît:

- **Type** d'événement (Course, soirée, showcase etc...) :
- **Date** de l’évènement :
- **Lieu** de l’évènement (Adresse + Photo) :
- **Heure de début** de l'événement :
- **Heure de fin** de l’évènement :
- **Heure d'arrivée** souhaitée de l'équipe médicale sur site de l'événement :
- Y a-t-il une **place prévue pour le poste de secours ?** Si oui, merci de bien vouloir l'indiquer (Photo ou plan) :
- **Nombre de personnes** attendues sur l’événement :
**Numéro de téléphone** à contacter en cas d'urgence :
- **Souhaitez-vous la présence d'un poste de don du sang sur place ? :**
- **Sur quel(s) motif(s)** une présence médicale est-elle souhaitée ? :

Dans l'attente de votre réponse, je vous souhaite une belle journée et laisse mes collègues reprendre la suite.
Pour :
<@536231631938387978> & <@120633053344169984> & <@371841109737078784> 
<@&943929547122941973>

**Bien à vous,**
<@1010191277238784050>
**Secrétaire du L.S.M.C. <:LSMC:915255404076883988>**` });
					}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}
		}
			};
