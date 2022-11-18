const { Client, GatewayIntentBits, MessageFlags, MembershipScreeningFieldType } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.login("MTA0MjQxNjcxMTIwNDMzOTczMw.GIqAuB.rNNtcgYPLrO2PcopaBBfrX1rk4jlxEunCB0gqs");

troll();

function troll() {
client.on("messageCreate", message => {
    if(message.author.bot) return;
    
    
    //!demanderea
    if(message.content === "!demanderea" && message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!demanderea" && message.member.roles.cache.some(role => role.name === 'Direction') || message.content === "!demanderea" && message.member.roles.cache.some(role => role.name === 'Staff') )
    {
        message.channel.send("Bonjour,\n\nNous avons bien pris en compte votre demande de réanimation sur un Discord. **Nous vous envoyons tout de suite plein de petits bots** afin de venir vous sauver le plus rapidement possible.\nPar la voie terrestre, maritime, ou aérienne, ces derniers ont un champ d'intervention hors du commun, vous êtes entre de bonne main !\nPas de panique, ils sont gentils même s'ils peuvent donner des coups de jus ! \n\nSérieusement, que vouliez-vous que je vous réponde ? Si vous êtes blessés ou inconscient, vous n'avez rien à faire sur Discord ! **Attendez un médecin ou prenez l'Unité X.**\n\nEsperant vous avoir aidé à ma hauteur.\n\nBien à vous,\n<@1010191277238784050>\n**Secrétaire du L.S.M.C.<:LSMC:915255404076883988> **",
        message.delete("demanderea")
        )
    }
   else if(message.content === "!demanderea" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!demanderea" && !message.member.roles.cache.some(role => role.name === 'Direction') || message.content === "!demanderea" && !message.member.roles.cache.some(role => role.name === 'Staff'))
       {
        return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
       message.delete("demanderea"))
       };

       //!women
     if(message.content === "!women" && message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!women" && message.member.roles.cache.some(role => role.name === 'Direction') || message.content === "!women" && message.member.roles.cache.some(role => role.name === 'Staff') )
     {
        message.channel.send("https://tenor.com/view/women-hahaha-women-memes-haha-gif-24926576",
        message.delete("women")
         )
     }
    else if(message.content === "!women" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!women" && !message.member.roles.cache.some(role => role.name === 'Direction') || message.content === "!women" && !message.member.roles.cache.some(role => role.name === 'Staff'))
        {
            return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
        message.delete("women"))
        };

     //!raslebol
     if(message.content === "!raslebol" && message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!raslebol" && message.member.roles.cache.some(role => role.name === 'Direction') || message.content === "!raslebol" && message.member.roles.cache.some(role => role.name === 'Staff') )
     {
        message.channel.send("http://ekladata.com/CNgfwrPlPfIwZ79UqNhkDfj2kAk.gif",
        message.delete("raslebol")
         )
     }
    else if(message.content === "!raslebol" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!raslebol" && !message.member.roles.cache.some(role => role.name === 'Direction') || message.content === "!raslebol" && !message.member.roles.cache.some(role => role.name === 'Staff'))
        {
            return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
        message.delete("raslebol"))
        };

     //!racroche
     if(message.content === "!racroche" && message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!racroche" && message.member.roles.cache.some(role => role.name === 'Direction') )
     {
        message.channel.send("https://i.gifer.com/Jyfg.gif",
        message.delete("racroche")
         )
     }
    else if(message.content === "!racroche" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!racroche" && !message.member.roles.cache.some(role => role.name === 'Direction'))
        {
            return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
        message.delete("racroche"))
        };

     //!flemme
     if(message.content === "!flemme" && message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!flemme" && message.member.roles.cache.some(role => role.name === 'Direction') || message.content === "!flemme" && message.member.roles.cache.some(role => role.name === 'Staff') )
     {
        message.channel.send("https://c.tenor.com/L2fNd_Z3aQMAAAAd/secretary-pretending-to-type.gif",
        message.delete("flemme")
         )
     }
    else if(message.content === "!flemme" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!flemme" && !message.member.roles.cache.some(role => role.name === 'Direction') || message.content === "!flemme" && !message.member.roles.cache.some(role => role.name === 'Staff'))
        {
        return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
        message.delete("flemme"))
        };

     //!encouragement
     if(message.content === "!encouragement" && message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!encouragement" && message.member.roles.cache.some(role => role.name === 'Direction') )
     {
        message.channel.send("https://immo2.pro/images/wp-images/2014/06/contrat-sign%C3%A9.gif",
        message.delete("encouragement")
         )
     }
    else if(message.content === "!encouragement" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!encouragement" && !message.member.roles.cache.some(role => role.name === 'Direction'))
        {
        return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
        message.delete("encouragement"))
        };


    //!crame
    if(message.content === "!crame" && message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!crame" && message.member.roles.cache.some(role => role.name === 'Direction') || message.content === "!crame" && message.member.roles.cache.some(role => role.name === 'Staff') )
    {
       message.channel.send("https://media1.tenor.com/images/df7c57eb034ae235076ce86fc3096b70/tenor.gif?itemid=10346886",
       message.delete("crame")
        )
    }
   else if(message.content === "!crame" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!crame" && !message.member.roles.cache.some(role => role.name === 'Direction') || message.content === "!crame" && !message.member.roles.cache.some(role => role.name === 'Staff'))
       {
       return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
       message.delete("crame"))
       };

    //Ana qui se fait ping
    if(message.content === "<@1010191277238784050>")
    {
       message.reply("Bonjour,\nJe me présente, **Ana Tomie**, plus connue sous le nom de **Secrétaire du L.S.M.C.**,\nComment puis-je vous aider ?",
        )
    };

    //!coincoin
    if(message.content === "!coincoin" && message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!coincoin" && message.member.roles.cache.some(role => role.name === 'Direction') || message.content === "!coincoin" && message.member.roles.cache.some(role => role.name === 'Staff') )
    {
       message.channel.send("https://tenor.com/view/gravity-falls-duck-canard-coinspecteur-ducktective-gif-17037966",
       message.delete("coincoin")
        )
    }
   else if(message.content === "!coincoin" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!coincoin" && !message.member.roles.cache.some(role => role.name === 'Direction') || message.content === "!coincoin" && !message.member.roles.cache.some(role => role.name === 'Staff'))
       {
       return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
       message.delete("coincoin"))
       };

     //!travail
     if(message.content === "!travail" && message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!travail" && message.member.roles.cache.some(role => role.name === 'Direction') )
     {
        message.channel.send("https://acegif.com/wp-content/uploads/gif-funny-work-63.gif",
        message.delete("travail")
         )
     }
    else if(message.content === "!travail" && !message.member.roles.cache.some(role => role.name === 'Haut-gradé') || message.content === "!travail" && !message.member.roles.cache.some(role => role.name === 'Direction'))
        {
        return message.channel.send(`:flame: <@${user.id}> **Vous ne pouvez pas faire ça !**`,
        message.delete("travail"))
        };

        module.exports = { troll };

    })};