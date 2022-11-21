const { Client, GatewayIntentBits, MessageFlags, MembershipScreeningFieldType } = require("discord.js");

const token = require("../tokenclient/token");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.login(token);

recrutement()
function recrutement() {
    client.on("messageCreate", message => {
        if(message.author.bot) return;
//!inaccessible
if(message.content === "!inaccessible" && message.member.roles.cache.some(role => role.name === 'Haut-gradé' || 'Direction' || 'Responsable Ressources Humaines') )
{
    message.channel.send("Bonjour,\n\nVotre candidature n’est pas accessible. Il faut que vous partagiez le lien en lecteur :\n« **Partager** » (en haut à droite) :arrow_right: « **Remplacer par tous les utilisateurs disposant du lien** » (en bas de la fenêtre à gauche) :arrow_right: Bien mettre en **Lecteur** et **Copier le lien**.\nC’est ce lien qu’il faut nous envoyer. <a:gyro:914592380739526737> \n\nNous attendons votre candidature. \n\n**Bien à vous,\n**<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **",
    message.delete("inaccessible")
    )
}
else if(message.content === "!inaccessible" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé' || 'Direction' || 'Responsable Ressources Humaines'))
   {
   return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
   message.delete("inaccessible"))
   };

//!médecin2garde
if(message.content === "!médecin2garde" && message.member.roles.cache.some(role => role.name === 'Haut-gradé' || 'Direction' || 'Responsable Ressources Humaines') )
{
    message.channel.send("Bonjour,\n\nLe **Los Santos Medical Center** recrute désormais des **médecins de garde !**\nIl s'agit d'un travail avec moins d'obligation qu'un membre traditionnel, concentré sur **des tâches plus centrées**.\n\nAfin de vous renseigner sur les détails du métier, **nous vous redirigeons dans le canal <#1025731257537142824>**, afin d'y découvrir les prérequis dans les **topics épinglés**, et pourquoi pas tenter votre chance ?\n\nBien à vous, \n<@1010191277238784050>\n**Secrétaire du L.S.M.C. <:LSMC:915255404076883988>**",
    message.delete("médecin2garde")
    )
}
else if(message.content === "!médecin2garde" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé' || 'Direction' || 'Responsable Ressources Humaines'))
   {
   return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
   message.delete("médecin2garde"))
   };

//!recrutementoff
const user = message.author;
    if(message.content === "!recrutementoff" && message.member.roles.cache.some(role => role.name === 'Haut-gradé' || 'Direction' || 'Responsable Ressources Humaines') )
    {
        message.channel.send("Bonjour,\n\nLes recrutements pour intégrer le Los Santos Medical Center sont **pour le moment fermés** cette semaine. Vous verrez dans le canal <#809765274231636008> quand ceux-ci seront à nouveau ouvert.\n\nAfin de rejoindre nos service, nous vous redirigons vers la radio-D de **l'University of Los Santos**, afin de **vous inscrire** dans le cursus de formation en vue du **diplome d'aide-soignant**, pour le prix de 10 000$ qui deviendra **obligatoire** à votre évolution dans le service du **Los Santos Medical Center.**\n\nMerci pour votre intérêt pour notre hôpital.\n\nBien à vous,\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **",
        message.delete("recrutementoff")
        )
    }
   else if(message.content === "!recrutementoff" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé' || 'Direction' || 'Responsable Ressources Humaines'))
       {
        return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
        message.delete("recrutementoff"))
       };

//!diplomes
if(message.content === "!diplomes" && message.member.roles.cache.some(role => role.name === 'L.S.M.C.' ))
{
    message.channel.send("Bonjour,\nDû à l'ouverture de l'Université, nous allons désormais **modifier nos prérequis pour intégrer notre service médical.** \nDésormais, nous allons imposer la possession du **diplôme d'aide soignant**, à photocopier et **coller dans le formulaire de recrutement.**\n\nAfin de vous **intégrer au cursus de formation**, il suffit de vous diriger vers la radio D de **l'University of Los Santos**, que vous pourrez retrouver dans la catégorie <#738730240800718888> de la ville. \n\nUne fois cela fait, il suffit simplement de **suivre les démarches d'inscription** dans la catégorie <#997783675670384660>\n\n**Bien à vous,\n**<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988>**",
    message.delete("diplomes")
    )
}
else if(message.content === "!diplomes" && !message.member.roles.cache.some(role => role.name === 'L.S.M.C.' ))
   {
   return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
   message.delete("diplomes"))
   };

    //!candidature
    if(message.content === "!candidature" && message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!candidature" && message.member.roles.cache.some(role => role.name === 'Direction') )
    {
        message.channel.send("Bonjour,\n\nNous avons bien reçu votre candidature, **celle-ci sera étudiée ce week-end**. Vous aurez les résultats dans le canal <#790952963023175741>.\n\nAprès avoir lu ce message, vous pourrez fermer le ticket en cliquant sur le :lock: afin que la Direction puisse étudier votre candidature. \n\n <:Attention2:803966002852659210> Attention : Du moment que vous envoyez votre candidature, celle-ci est **terminée et prête à être lue**. S'il manque des choses, **inutile de les rajouter ou de recréer un ticket**.\n\nMerci pour votre intérêt pour le Los Santos Medical Center. \n\n**Bien à vous,**\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **",
        message.delete("candidature")
        )
    }
    else if(message.content === "!candidature" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!candidature" && !message.member.roles.cache.some(role => role.name === 'Direction'))
       {
        return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
       message.delete("candidature"))
       };

    //!candidaturemdg
    if(message.content === "!candidaturemdg" && message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!candidaturemdg" && message.member.roles.cache.some(role => role.name === 'Direction') )
    {
        message.channel.send("Bonjour,\n\nNous avons bien reçu votre candidature afin de **devenir médecin de garde**. **Celle-ci sera étudiée ce week-end**, vous aurez les résultats dans le canal <#790952963023175741>.\n\nAprès avoir lu ce message, vous pourrez fermer le ticket en cliquant sur le 🔒 afin que la Direction puisse étudier votre candidature. \n\n <:Attention2:803966002852659210> Attention : Du moment que vous envoyez votre candidature, celle-ci est **terminée et prête à être lue**. S'il manque des choses, **inutile de les rajouter ou de recréer un ticket**.\n\nMerci pour votre intérêt pour le Los Santos Medical Center. \n**Bien à vous,**\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **",
        message.delete("candidaturemdg")
        )
    }
    else if(message.content === "!candidaturemdg" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!candidaturemdg" && !message.member.roles.cache.some(role => role.name === 'Direction'))
       {
        return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
       message.delete("candidaturemdg"))
       }; 
    
       module.exports = { recrutement };
    
})};