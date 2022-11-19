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
         message.channel.send("Bonjour,\n\nNous avons bien reçu votre demande de **consultation animalière**. Un membre du <@&983797860552302602> répondra bientôt à celle-ci.<:VS:992527985108336781>\n\nNe vous inquiétez pas, nos meilleurs vétérinaires sont sur le coup, **votre animal est entre de bonne main ! <a:gyro:914592380739526737>**\n\nBien à vous,\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **",
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
          message.channel.send("Bonjour,\n\nNous avons bien reçu votre demande de **consultation psychologique**. Un membre du <@&864329971408961546> répondra bientôt à celle-ci.<:PSS:935573301823172691>\n\nNe vous inquiétez pas, tout ce qui est dit ici est sous le secret médical. <a:gyro:914592380739526737> \n\nBien à vous,\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **",
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
         message.channel.send("Bonjour,\n\nNous avons bien reçu votre demande de **consultation**. La <@&940028568543563777> ou un <@&940034123450429441> **répondra prochainement à votre demande** <:GOPS:947112386404417586> \n\nNous vous remercions pour votre confiance envers l'hôpital ! <a:gyro:914592380739526737> \n\n**Bien à vous,\n**<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **",
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
        message.channel.send("Bonjour,\n\nAfin de permettre à nos <@&943929547122941973> de vous répondre au mieux, merci de lire attentivement le message ci-dessous. <a:gyro:914592380739526737> \n\nSuite à votre prise de contact avec le **Los Santos Medical Center**, je me permets de vous envoyer ce mail afin que nous puissions convenir d'un **devis permettant la composition d'une équipe médicale** pour votre événement. Je vous invite à bien vouloir répondre aux questions suivantes, s'il vous plaît:\n\n- **Type** d'événement (Course, soirée, showcase etc...) :\n- **Date** de l’évènement :\n- **Lieu** de l’évènement (Adresse + Photo) :\n- **Heure de début** de l'événement :\n- **Heure de fin** de l’évènement :\n- **Heure d'arrivée** souhaitée de l'équipe médicale sur site de l'événement :\n- Y a-t-il une **place prévue pour le poste de secours?** Si oui, merci de bien vouloir l'indiquer (Photo ou plan) :\n- **Nombre de personnes** attendues sur l’événement :\n**Numéro de téléphone** à contacter en cas d'urgence :\n- **Souhaitez-vous la présence d'un poste de don du sang sur place?**\n- **Sur quel(s) motif(s)** une présence médicale est-elle souhaitée ?\n\nDans l'attente de votre réponse, je vous souhaite une belle journée et laisse mes collègues reprendre la suite.\n\n**Bien à vous,**\n<@1010191277238784050>\n**Secrétaire du L.S.M.C. <:LSMC:915255404076883988>**\nPour :\n<@676064932269391872>, <@771393182047010857> & <@412316373600174080> \n<@&943929547122941973> ",
         message.delete("cse")
        )
    }
   else if(message.content === "!cse" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!cse" && !message.member.roles.cache.some(role => role.name === 'Direction'))
       {
        return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
       message.delete("cse"))
       };

       
       //!dispogopskayla
            if (message.content === "!dispogopskayla" && message.member.roles.cache.some(role => role.name === 'Gynecology, Obstetrics & Pediatrics Services') || message.content === "!dispogopskayla" && message.member.roles.cache.some(role => role.name === 'Direction')) {
            message.channel.send("**Bonjour à tous et à toutes <@&1006604363646644274> !**\n\nLe docteur <@455801536413564940> est actuellement disponible pour garder vos enfants à la garderie.\nN'hésitez pas à **prendre contact avec elle au 0523 par téléphone** ou simple message !\n\nL'équipe du **Gynecology Obstetrics & Pediatrics Services** vous remercie pour votre confiance ! <:GOPS:947112386404417586> \n\nhttps://media.discordapp.net/attachments/1011348088755077150/1040583818962272266/unknown.png?width=1081&height=765",
                message.delete("dispogopskayla")
                );
            }
                else if (message.content === "!dispogopskayla" && !message.member.roles.cache.some(role => role.name === 'Gynecology, Obstetrics & Pediatrics Services') || message.content === "!dispogopskayla" && !message.member.roles.cache.some(role => role.name === 'Responsable Adj. Gynécologie') || message.content === "!attentegopss" && !message.member.roles.cache.some(role => role.name === 'Responsable Gynécologie')) {
                 return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
                     message.delete("dispogopskayla"));
             };

             //!dispogopsnathan
            if (message.content === "!dispogopsnathan" && message.member.roles.cache.some(role => role.name === 'Gynecology, Obstetrics & Pediatrics Services') || message.content === "!dispogopsnathan" && message.member.roles.cache.some(role => role.name === 'Direction')) {
                message.channel.send("**Bonjour à tous et à toutes <@&1006604363646644274> !**\n\nLa docteur <@629355796089536532> est actuellement disponible pour garder vos enfants à la garderie.\nN'hésitez pas à **prendre contact avec lui au 5152145 par téléphone** ou simple message !\n\nL'équipe du **Gynecology Obstetrics & Pediatrics Services** vous remercie pour votre confiance ! <:GOPS:947112386404417586> \n\nhttps://media.discordapp.net/attachments/1011348088755077150/1040583818962272266/unknown.png?width=1081&height=765",
                    message.delete("dispogopsnathan")
                    );
                }
                else if (message.content === "!dispogopsnathan" && !message.member.roles.cache.some(role => role.name === 'Gynecology, Obstetrics & Pediatrics Services') || message.content === "!dispogopsnathan" && !message.member.roles.cache.some(role => role.name === 'Responsable Adj. Gynécologie') || message.content === "!attentegopss" && !message.member.roles.cache.some(role => role.name === 'Responsable Gynécologie')) {
                 return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
                     message.delete("dispogopsnathan"));
                 };
            
            //!dispogopsshannon
            if (message.content === "!dispogopsshannon" && message.member.roles.cache.some(role => role.name === 'Gynecology, Obstetrics & Pediatrics Services') || message.content === "!dispogopsshannon" && message.member.roles.cache.some(role => role.name === 'Direction')) {
                message.channel.send("**Bonjour à tous et à toutes <@&1006604363646644274> !**\n\nLa docteur <@818471129164546069> est actuellement disponible pour garder vos enfants à la garderie.\nN'hésitez pas à **prendre contact avec elle au 1103 par téléphone** ou simple message !\n\nL'équipe du **Gynecology Obstetrics & Pediatrics Services** vous remercie pour votre confiance ! <:GOPS:947112386404417586> \n\nhttps://media.discordapp.net/attachments/1011348088755077150/1040583818962272266/unknown.png?width=1081&height=765",
                    message.delete("dispogopsshannon")
                    );
                }
                else if (message.content === "!dispogopsshannon" && !message.member.roles.cache.some(role => role.name === 'Gynecology, Obstetrics & Pediatrics Services') || message.content === "!dispogopsshannon" && !message.member.roles.cache.some(role => role.name === 'Responsable Adj. Gynécologie') || message.content === "!attentegopss" && !message.member.roles.cache.some(role => role.name === 'Responsable Gynécologie')) {
                 return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
                     message.delete("dispogopsshannon"));
                 };


        module.exports = { unite };
        })};
