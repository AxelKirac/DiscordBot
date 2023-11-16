const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('count')
    .setDescription("Compte le nombre d'interactions H.G."),
  async execute(interaction) {
    try {
      const channelId = '1104425577366163476'; // ID du salon où les embeds sont envoyés
      const channelToSend = interaction.client.channels.cache.get(channelId);
      const now = new Date();
      const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

      // Récupérer les messages embeds des 7 derniers jours dans le salon spécifié
      const messages = await channelToSend.messages.fetch({ limit: 100 });
      const recentMessages = messages.filter(
        (message) => message.createdAt > sevenDaysAgo && message.embeds.length > 0
      );

      // Récupérer les utilisateurs uniques des messages récents
      const uniqueUserIds = new Set();
      recentMessages.forEach((message) => {
        const embed = message.embeds[0];
        const mentionIds = getMentionIdsFromEmbed(embed);
        mentionIds.forEach((id) => uniqueUserIds.add(id));
      });

      // Récupérer les membres de la guilde pour obtenir les noms d'utilisateur et les rôles
      const guildMembers = await interaction.guild.members.fetch({ user: Array.from(uniqueUserIds) });
      const sortedMembers = guildMembers.sort((a, b) => b.roles.highest.position - a.roles.highest.position);

      // Créer l'embed de sortie avec les utilisateurs et le nombre de tâches
      const embed = new EmbedBuilder()
        .setColor('#c91d07')
        .setTitle('Nombre de réactions effectuées')
        .setThumbnail('https://lsmc.bay.life/img/lsmc.png')
        .setDescription('Voici le nombre de tâches effectuées par chaque utilisateur :');

      sortedMembers.forEach((member) => {
        const userId = member.user.id;
        let displayName = member.user.username; // Nom par défaut

        // Attribuer un nom personnalisé à un utilisateur spécifique
        if (userId === '248517566530584577') {
          displayName = 'Dr. Adam Itho';
        } else if (userId === '536231631938387978') {
          displayName = 'Dr. Thomas Recon';
        } else if (userId === '434461194292822017') {
          displayName = 'Dr. Lao Vintorez';
        } else if (userId === '569589958248235008') {
          displayName = 'Dr. Logan Sky';
        } else if (userId === '874047050906480661') {
          displayName = 'Dr. Naomie Sky';
        } else if (userId === '219915373401604097') {
          displayName = 'Dr. Ricardo Lopes';
        }

        const numTasks = countTasksForUser(recentMessages, userId);
        embed.addFields({ name: displayName, value: `${numTasks} tâche${numTasks !== 1 ? 's' : ''}` });
      });

      // Envoyer l'embed dans le même salon que la commande slash
      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      const channelId = '1010217082622857348';
      const errorMessage = `Une erreur s'est produite ALED <@248517566530584577> à ${new Date().toLocaleString()} : ${error.message}`;
      interaction.client.channels.cache.get(channelId).send(errorMessage);
    }
  },
};

function getMentionIdsFromEmbed(embed) {
  const mentionIds = [];

  if (embed.description && embed.description.includes('<@')) {
    const matches = embed.description.match(/<@(\d+)>/g);
    if (matches && matches.length > 0) {
      matches.forEach((match) => {
        const id = match.match(/<@(\d+)>/)[1];
        mentionIds.push(id);
      });
    }
  }

  return mentionIds;
}

function countTasksForUser(messages, userId) {
  let count = 0;

  messages.forEach((message) => {
    const embed = message.embeds[0];
    if (embed.description && embed.description.includes(`<@${userId}>`)) {
      count++;
    }
  });

  return count;
}
