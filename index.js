const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, ActivityType, Status } = require("discord.js");
const token = require("./tokenclient/token.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
client.login(token);
client.on("ready", () => {
    console.log("C'est bon j'suis démarré fils de pute");
});


//---------------------------Import des fichiers---------------------------------------

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
//Button Test
const buttonTest = require('./buttonbot/buttonTest.js')
const cmdAna = require('./messagebot/cmdana.js')

//Button Role PPA/CMAP /!\ Retirer le mode commentaire que pour envoyé le rôle
// const buttonRolePpa = require('./buttonbot/buttonRolePpa.js')

//Handle des buttons
const handleButtonRolePpa = require('./buttonbot/buttonRolePpa.js')

//Statut du bot
const setStatus = require('./setstatus/setStatus.js')

//--------------------------------Set Statut-----------------------------------------

//Status
setStatus.setStatus

//Message
dispo.dispo
unite.unite
recrutement.recrutement
dir.dir
troll.troll
cmdAna.cmdAna

//Button
buttonTest.buttonTest
// buttonRolePpa.buttonRolePpa
handleButtonRolePpa.handleButtonRolePpa

    