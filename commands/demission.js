const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('demission')
		.setDescription("Euh Nikoumouk"),
	async execute(interaction) {
		try {
		await interaction.deferReply({ephemeral: true})
		interaction.channel.send({ allowedMentions: {roles :['931616626686705674']},
						content: "__Nom :__ Ana Tomie\n__Date d'arrivée :__ 19 août 2022\n__Date de départ :__ 28 avril 2023\n__Stylo attitré :__ Le Fixions bleu au fond du panier \n__Motif du départ :__\n\n**Bonjour à tous <@&931616626686705674>,** \nJe vous annonce aujourd'hui **ma démission de mon poste**, auquel j'aurai su beaucoup donner. <a:gyro:914592380739526737> \nCela fait maintenant **9 moi**s que j'exerce ce dernier, et malheureusement, sans **jamais de reconnaissance**.\nMon travail, jours et nuits, du **Lundi au Dimanche**, contrairement à certains, qui travaillent seulement du Dimanche au Lundi, sans citer de noms ||<@248517566530584577>||, et **bien d'autres encore** !\n\nJ'ai pus, pendant mon travail, **répondre à des tickets**, que ce soit les candidatures, les tickets des unités, les tickets direction, et même mettre **divers GIF dans les concertations** pour amuser la galerie, répondre aux débiles !\nJ'ai également service de secrétaire dans le canal <#968117898717560922>, des centaines de fois, **vous rendez vous compte** ? \n\nMaintenant, afin de **dénoncer l'esclavagisme**, je demande à la direction de sortir **les primes m'étant versées pour ce travail**, où je me donnais d'arrache pied, tout le temps ! <a:wash:994230658211786813>\n\nEn plus de cela,** je ne parle même pas des dessin puérils** sur ma tablettes de <@536231631938387978>, inacceptable ! \nLes blagues, **changer l'encre de mon stylo pour écrire en rose**... Une fois OK, mais **41**, *j'ai compté, oui !*\n\nJ'ai tout de même pus faire **des rencontres formidables**, tel que <@159985870458322944>, <@1032442168238940260>, <@974205033182789722>, ou encore même <@557628352828014614>, **mon meilleur ami**, tout au long de ma campagne ! <a:applaus:918553494615642112>\n\n**Je garderai toujours un très bon souvenir de vous, **\n\nEn espérant vous revoir un jour,\n**Si des primes et un salaire me sont offerts ! **<:mh:838409454185349170>\n\n**Bonne continuation.**\n<@1010191277238784050>, \n***Ex secrétaire du L.S.M.C. <:LSMC:915255404076883988>***"	});
	}
	catch (error) {
		const channelId = "1010217082622857348";
		const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
		interaction.client.channels.cache.get(channelId).send(errorMessage);
	}
		}
};
