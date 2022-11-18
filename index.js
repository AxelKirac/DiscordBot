const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});


client.login("MTA0MjQxNjcxMTIwNDMzOTczMw.GIqAuB.rNNtcgYPLrO2PcopaBBfrX1rk4jlxEunCB0gqs");
client.on("ready", () => {
    console.log("bot opérationnel");
});

//Disponibilité Haut-Gradés
const dispo = require("./messagebot/dispo.js");
//Tout ce qui est relié au unités
const unite = require("./messagebot/unite.js");
//Tout ce qui est relié au recrutement
const recrutement = require('./messagebot/recrutement.js');
//Ce qui va touché à la direction
const dir = require('./messagebot/dir.js');
//Les trolls de Thomas
const troll = require('./messagebot/troll.js');

client.on("messageCreate", message => {
    if(message.author.bot) return;
    dispo.dispo
    unite.unite
    recrutement.recrutement
    dir.dir
    troll.troll

    //cmdana
     if(message.content === "!cmdana"){
            message.channel.send("**Voici la liste complète de mes commandes bandes de zebis :**```\n :!cmdana Si tu la faite tu la connais gros con\n\n!rdv : Réponse PPA\n\n!déloc : Délocalisation des CMAP & Psychotchniques\n\n!candidature : Message pour les candidatures en traitement\n\n!candidaturemdg : Message pour les candidature en traitement MdG\n\n!recrutementoff : Message lors des recrutements fermés\n\n!inaccessible : Message lorsque la candidature n'est pas acessible\n\n!médecin2garde : On recrute des médecins de garde\n\n!diplomes : Le diplôme est nécessaire\n\n!cse : En attente des CSE\n\n!demanderea : Réponse d'une demande de réa\n\n!attentepss : En attente ticket PSS\n\n!attentegops : En attente ticket GOPS\n\n!attentevs : En attente ticket VS\n\n!attentedir : En attente ticket contact direction\n\n!réponsedir : Je vais bientôt répondre\n\n!finticketdir : Tu peux fermer ton ticket\n\n!sondagereu : Sondage des réunions\n\n!dispo(votre prénom) : Annonce des permanences\n\n!raslebol : Ana va te buter\n\n!racroche : Ana qui raccroche \n\n!flemme : Ana a la flemme de bosser\n\n!encouragement : Ana qui pète un cable\n\n!coincoin : Un simple canard...\n\n!travail : Ana qui travail dureeee\n\n!crame : Ana va te brûler\n\n!women : Elle est belle la tasse ?```",
            message.delete("!cmdana")

         )}});


         
         client.on('messageCreate', message => {
            if(message.author.bot) return;
        
            if(message.content === "sendbutton") {
        
        const row = new ActionRowBuilder().setComponents(
            new ButtonBuilder()
                .setCustomId('buttonCreateTicket')
                .setLabel("Open Tickets")
                .setStyle(ButtonStyle.Danger)
                .setEmoji('👀')
        );
            message.reply({content : "Create Ticket avec this button", components: [row]});
    };
});

// Client.on("interactionCreate", interaction => {

// });

