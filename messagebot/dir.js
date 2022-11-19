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


dir()
function dir() {

client.on("messageCreate", message => {
    if(message.author.bot) return;  

    
    
    //!attentedir
    if(message.content === "!attentedir" && message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!attentedir" && message.member.roles.cache.some(role => role.name === 'Direction') )
    {
        message.channel.send("Bonjour,\n\nUn membre <@&774368900527423548> ou un <@&774369294876016710> répondra bientôt à votre demande. Merci de vous assurer d'avoir correctement rédigée celle-ci. **Les demandes liées à des réanimations** ou **des absences à des rendez-vous d'Evaluations Psychotechniques** ne seront pas prises en compte et **le ticket sera fermé**. \n\n**Bonne journée,**\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **",
        message.delete("attentedir")
        )
    }
   else if(message.content === "!attentedir" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!attentedir" && !message.member.roles.cache.some(role => role.name === 'Direction'))
       {
        return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
       message.delete("attentedir"))
       };

    //!réponsedir
    if(message.content === "!réponsedir" && message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!réponsedir" && message.member.roles.cache.some(role => role.name === 'Direction') )
    {
        message.channel.send(`Bonjour,\n\nVotre demande à bien été prise en compte.\nNe vous inquiétez pas, <@${user.id}> **vous donnera une réponse** dans les plus bref délais !\nEn attendant, nous vous demandons de bien vouloir **patienter quelques instant supplémentaires**, afin que ce dernier trouve le temps de vous répondre.\n\n**Merci de votre compréhension !**\n\n**Bonne journée,**\n<@1010191277238784050> \n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **`,
        message.delete("réponsedir")
        )
    }
    else if(message.content === "!réponsedir" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé') || !message.content === "!réponsedir" && message.member.roles.cache.some(role => role.name === 'Direction'))
       {
        return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
       message.delete("réponsedir"))
       };


    //!sondagereu
    if(message.content === "!sondagereu" && message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!sondagereu" && message.member.roles.cache.some(role => role.name === 'Direction') )
    {
        message.channel.send("Bonjour le <@&931616626686705674> !\n\nA quelle heure êtes-vous disponibles pour **la réunion de ce samedi** ? :alarm_clock:\n\nCelle-ci se déroulera en ville au **Cabinet de Psychologie du L.S.M.C.**, elle sera **rediffusée en direct sur Discord** pour les personnes absentes et un compte-rendu sera publié.\n\n:one: **18h00**\n:two: **20h00**\n:three: **21h00**\n:four: **22h00**\n\n:beach_umbrella: **Absent**\n\n**Bien à vous,**\n\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **",
        message.delete("sondagereu")
        )
    }
   else if(message.content === "!sondagereu" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!sondagereu" && !message.member.roles.cache.some(role => role.name === 'Direction'))
       {
        return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
       message.delete("sondagereu"))
       };

           //!finticketdir
    if(message.content === "!finticketdir" && message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!finticketdir" && message.member.roles.cache.some(role => role.name === 'Direction') )
    {
        message.channel.send("Bonjour, \n\nSi vous estimez que **la direction à répondu à toutes vos attentes ou questionnement**, nous vous laissons** clôturer le ticket**.\nPour cela, il suffit simplement de **cliquer sur le 🔒 en haut du ticket**, et de valider la fermeture de ce dernier en appuyant sur le bouton ***Close***.**\n\nEn cas d'une future réclamation ou questionnement, **nous répondrons à ces dernières avec plaisir**, à l'intérieur d'un ticket dans la catégorie <#800382264609341482> une nouvelle fois !\n\n**Bien à vous,**\n<@1010191277238784050>\n**Secrétaire du L.S.M.C. <:LSMC:915255404076883988>**",
        message.delete("finticketdir")
        )
    }
    else if(message.content === "!finticketdir" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!finticketdir" && !message.member.roles.cache.some(role => role.name === 'Direction'))
       {
        return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
       message.delete("finticketdir"))
       };
            
        //!rdv
           if(message.content === "!rdv" && message.member.roles.cache.some(role => role.name === 'Direction'))
           {
              message.channel.send("Bonjour,\n\nSi vous souhaitez passer une **Evaluation Psychotechnique** (pour le P.P.A.) ou avoir un **Certificat Médical d'Aptitude Physique** (pour candidature LSPD/LSSD/LSFD ou une Licence Heaven), merci de lire **attentivement** le message épinglé dans le canal <#914590722248806400> afin de récupérer les rôles et d'être notifié lors des prochains rendez-vous.\n\n**Bonne journée,**\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.:LSMC: **",
              message.delete("rdv"))
           }
          else if(message.content === "!rdv" && !message.member.roles.cache.some(role => role.name === 'Direction'))
              {
                return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça**`,
              message.delete("rdv"))
              };
        
        //!déloc
        if(message.content === "!déloc" && message.member.roles.cache.some(role => role.name === 'Haut-gradé' || 'Direction' || 'Responsable Ressources Humaines'))
        {
           message.channel.send("Bonjour, \n\nSuite à la récente ouverture des locaux **Central Los Santos Medical Center**, les __certificats médicaux d'aptitude physique__ ainsi que les __tests psychotechniques__ sont désormais délocalisés, et **déplacé dans ce dernier !**\n\nLes médecins vous **attendront** donc à **l'accueil de l'hôpital Central**, en photo ci-contre.\nhttps://cdn.discordapp.com/attachments/1010217082622857348/1027691342853320845/unknown.png\n\nMerci de votre compréhension,\n<@1010191277238784050>\n**Secrétaire du L.S.M.C. <:LSMC:915255404076883988>**",
           message.delete("déloc"))
        }
       else if(message.content === "!rdv" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé' || 'Direction' || 'Responsable Ressources Humaines'))
           {
             return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça**`,
           message.delete("déloc"))
           };
       
       module.exports = { dir }
       
    })};


    //BLoupbloupalala
     //BLoupbloupalala
      //BLoupbloupalala
       //BLoupbloupalala
        //BLoupbloupalala