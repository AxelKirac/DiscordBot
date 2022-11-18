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

unite()

    function unite() {
    client.on("messageCreate", message => {
        if(message.author.bot) return;  
     //!attentevs
     if(message.content === "!attentevs" && message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!attentevs" && message.member.roles.cache.some(role => role.name === 'Direction') || message.content === "!attentevs" && message.member.roles.cache.some(role => role.name === 'Responsable V.S.') )
     {
         message.channel.send("Bonjour,\n\nNous avons bien reçu votre demande de **consultation animalière**. Un membre du <@&983797860552302602> répondra bientôt à celle-ci.<:VS:992527985108336781>\n\nNe vous inquiétez pas, nos meilleurs vétérinaires sont sur le coup, **votre animal est entre de bonne main !**\n\nBien à vous,\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **",
         message.delete("attentevs")
         )
     }
    else if(message.content === "!attentevs" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!attentevs" && !message.member.roles.cache.some(role => role.name === 'Direction') || message.content === "!attentevs" && !message.member.roles.cache.some(role => role.name === 'Responsable V.S.'))
        {
         return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
        message.delete("attentevs"))
        };
 
      //!attentepss
      if(message.content === "!attentepss" && message.member.roles.cache.some(role => role.name === 'Haut-gradé' || 'Direction' || 'Responsable Adj. Psychologie' || 'Responsable Psychologie'))
      {
          message.channel.send("Bonjour,\n\nNous avons bien reçu votre demande de **consultation psychologique**. Un membre du <@&864329971408961546> répondra bientôt à celle-ci.<:PSS:935573301823172691>\n\nNe vous inquiétez pas, tout ce qui est dit ici est sous le secret médical. \n\nBien à vous,\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **",
          message.delete("attentepss")
          )
      }
     else if(message.content === "!attentepss" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé' || 'Direction' || 'Responsable Adj. Psychologie' || 'Responsable Psychologie'))
         {
          return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
         message.delete("attentepss"))
         };
  
 
     //!attentegops
     if(message.content === "!attentegops" && message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!attentegops" && message.member.roles.cache.some(role => role.name === 'Direction') || message.content === "!attentegops" && message.member.roles.cache.some(role => role.name === 'Responsable Adj. Gynécologie') || message.content === "!attentegops" && message.member.roles.cache.some(role => role.name === 'Responsable Gynécologie') )
     {
         message.channel.send("Bonjour,\n\nNous avons bien reçu votre demande de **consultation**. Un membre des <@&943675686919495740> répondra bientôt à celle-ci. <:GOPS:947112386404417586> \n\nNous vous remercions pour votre confiance envers l'hôpital ! \n\n**Bien à vous,\n**<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **",
         message.delete("attentegops")
         )
     }
    else if(message.content === "!attentegops" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!attentegops" && !message.member.roles.cache.some(role => role.name === 'Responsable Adj. Gynécologie') || message.content === "!attentegops" && !message.member.roles.cache.some(role => role.name === 'Responsable Gynécologie') )
        {
         return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
        message.delete("attentegops"))};

            //!cse
    if(message.content === "!cse" && message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!cse" && message.member.roles.cache.some(role => role.name === 'Direction') )
    {
        message.channel.send("Bonjour,\n\nAfin de permettre à nos <@&943929547122941973> de vous répondre au mieux, merci de lire attentivement le message ci-dessous.\n\nSuite à votre prise de contact avec le **Los Santos Medical Center**, je me permets de vous envoyer ce mail afin que nous puissions convenir d'un **devis permettant la composition d'une équipe médicale** pour votre événement. Je vous invite à bien vouloir répondre aux questions suivantes, s'il vous plaît:\n\n- **Type** d'événement (Course, soirée, showcase etc...) :\n- **Date** de l’évènement :\n- **Lieu** de l’évènement (Adresse + Photo) :\n- **Heure de début** de l'événement :\n- **Heure de fin** de l’évènement :\n- **Heure d'arrivée** souhaitée de l'équipe médicale sur site de l'événement :\n- Y a-t-il une **place prévue pour le poste de secours?** Si oui, merci de bien vouloir l'indiquer (Photo ou plan) :\n- **Nombre de personnes** attendues sur l’événement : \n- **Souhaitez-vous la présence d'un poste de don du sang sur place?**\n- **Sur quel(s) motif(s)** une présence médicale est-elle souhaitée ?\n\nDans l'attente de votre réponse, je vous souhaite une belle journée et laisse mes collègues reprendre la suite.\n\n**Bien à vous,**\n<@1010191277238784050>\n**Secrétaire du L.S.M.C. <:LSMC:915255404076883988>**\nPour :\n<@676064932269391872>, <@771393182047010857> & <@412316373600174080> \n<@&943929547122941973> ",
         message.delete("cse")
        )
    }
   else if(message.content === "!cse" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!cse" && !message.member.roles.cache.some(role => role.name === 'Direction'))
       {
        return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
       message.delete("cse"))
       };


        module.exports = { unite };
        })};
