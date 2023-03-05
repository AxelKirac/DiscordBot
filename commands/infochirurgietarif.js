const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('infochirurgietarif')
		.setDescription("Info sur les tarifs de la chirurgie esthétique"),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true})
		interaction.editReply("Demande bien prise en compte")
		interaction.channel.send("Bonjour,\n\nPour commencer, il est nécessaire de passer par la catégorie <#1080839519676416001>, et d'**ouvrir un ticket** à l'intérieur de cette dernière.\nEnsuite, le déroulement d'une chirurgie esthétique complète se déroule en **4 étapes distinctes** : <a:gyro:914592380739526737>\n\n➡️ Un **premier rendez-vous avec un psychologue**, qui vous sera attribué dès le début de votre consultation. *(Facturé 800$)*\n\n➡️ Un **entretien avec un chirurgien** spécialisé dans le domaine de la chirurgie esthétique, où vous pourrez poser toutes vos questions. *(Gratuit)*\n\n➡️ **Déroulement de l'opération** demandée dans le bloc opératoire. *(Facturé 35 000$ par partie touchée)*\n\n➡️ Un dernier **rendez-vous post-opératoire** avec votre psychologue, obligatoire après une chirurgie esthétique.\n\nIl faut également prendre en compte que** le délai d'attente entre deux opérations est de 15 jours ! <a:gyro:914592380739526737> **\nNous vous conseillons tout de même de vous renseigner un maximum sur les risques et complications possibles suite à la chirurgie esthétique, notamment en posant des questions à votre chirurgien attitré.\n\nVous pouvez poser toutes vos questions dans le canal ici présent, nous y répondront avec plaisir.\n\n**Inutile de relancer les médecins dans le ticket**, ces derniers prennent en compte vos demandes de consultations, même si cela prend quelques heures ! <a:gyro:914592380739526737>\n\nCordialement,\n<@1010191277238784050>\n***Secrétaire du L.S.M.C. <:LSMC:915255404076883988>***        ");
	}
};

