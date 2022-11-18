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

cmdAna();

function cmdAna() {
    client.on("messageCreate", message => {
        if (message.author.bot)
            return;

        //cmdana
        if (message.content === "!cmdana") {
            message.channel.send("**Voici la liste complète de mes commandes bandes de zebis :**```\n :!cmdana Si tu la faite tu la connais gros con\n\n!rdv : Réponse PPA\n\n!déloc : Délocalisation des CMAP & Psychotchniques\n\n!candidature : Message pour les candidatures en traitement\n\n!candidaturemdg : Message pour les candidature en traitement MdG\n\n!recrutementoff : Message lors des recrutements fermés\n\n!inaccessible : Message lorsque la candidature n'est pas acessible\n\n!médecin2garde : On recrute des médecins de garde\n\n!diplomes : Le diplôme est nécessaire\n\n!cse : En attente des CSE\n\n!demanderea : Réponse d'une demande de réa\n\n!attentepss : En attente ticket PSS\n\n!attentegops : En attente ticket GOPS\n\n!attentevs : En attente ticket VS\n\n!attentedir : En attente ticket contact direction\n\n!réponsedir : Je vais bientôt répondre\n\n!finticketdir : Tu peux fermer ton ticket\n\n!sondagereu : Sondage des réunions\n\n!dispo(votre prénom) : Annonce des permanences\n\n!raslebol : Ana va te buter\n\n!racroche : Ana qui raccroche \n\n!flemme : Ana a la flemme de bosser\n\n!encouragement : Ana qui pète un cable\n\n!coincoin : Un simple canard...\n\n!travail : Ana qui travail dureeee\n\n!crame : Ana va te brûler\n\n!women : Elle est belle la tasse ?```",
                message.delete("!cmdana")

            );
        }
    });
    module.exports = { cmdAna }
}
