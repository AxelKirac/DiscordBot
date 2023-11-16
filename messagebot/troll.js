const { Client, GatewayIntentBits, MessageFlags, MembershipScreeningFieldType } = require("discord.js");
const config = require("../config.json");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.login(config.token);
client.on("messageCreate", message => {
    if (message.author.bot) return;
    
    const commands = {
      "!women": {
        roles: ["Haut-gradé", "Direction", "Staff"],
        response: "https://tenor.com/view/women-hahaha-women-memes-haha-gif-24926576"
      },
      "!raslebol": {
        roles: ["Haut-gradé", "Direction", "Staff"],
        response: "https://tenor.com/view/axe-five-hatchet-warning-weapon-gif-18148135"
      },
      "!racroche": {
        roles: ["Haut-gradé", "Direction"],
        response: "https://tenor.com/view/disconnected-telephone-call-goodbye-disappointed-upset-gif-15716208"
      },
      "!flemme": {
        roles: ["Haut-gradé", "Direction"],
        response: "https://tenor.com/view/typing-working-nails-peter-griffin-keyboard-gif-23623906"
      },
      "!encouragement": {
        roles: ["Haut-gradé", "Direction"],
        response: "https://tenor.com/view/seeing-abd-batting-after-a-long-time-gif-trending-cricket-sports-gif-18495086"
      },
      "!crame": {
        roles: ["Haut-gradé", "Direction"],
        response: "https://tenor.com/view/flame-thrower-leonardo-dicaprio-lance-flamme-burn-burning-gif-21661296"
      },
      "!coincoin": {
        roles: ["Haut-gradé", "Direction"],
        response: "https://tenor.com/view/gravity-falls-duck-canard-coinspecteur-ducktective-gif-17037966"
      },
      "!coincoin": {
        roles: ["Haut-gradé", "Direction"],
        response: "https://tenor.com/view/gravity-falls-duck-canard-coinspecteur-ducktective-gif-17037966"
      },
      "!travail": {
        roles: ["Haut-gradé", "Direction"],
        response: "https://tenor.com/view/philippe-katerine-katerine-travailler-crever-bosser-gif-10490144"
      },
      "!ouémec": {
        roles: ["Haut-gradé", "Direction"],
        response: "https://tenor.com/view/zepeck-pouce-epoque-grands-freres-cousin-zepeck-gif-22606185"
      },
      "!choquée": {
        roles: ["Haut-gradé", "Direction"],
        response: "https://tenor.com/view/shocked-face-wide-eyes-bug-eyes-shocked-surprised-gif-17836791"
      },
      "!analebot": {
        roles: ["Haut-gradé", "Direction"],
        response: "Bonjour\n\nJ'ai beau être un assistant robotisé controlé par deux gros connard, sachez que si un jour on se croise dans la rue, je vous pête en deux."
      },
      "!redem": {
        roles: ["Haut-gradé", "Direction"],
        response: `Bonjour à vous,\n\nMes grands maîtres <@536231631938387978> et <@248517566530584577>, qui n'ont aucun complexe de supériorité m'ont redémarrée, merci à vous d'avoir attendu !`
    },
    "!tyler": {
        roles: ["Haut-gradé", "Direction"],
        response: `Bonjour, moi c'est Tyler.`
    },
    "!300iq": {
        roles: ["Haut-gradé", "Direction"],
        response: `https://tenor.com/view/brain-meme-gif-26221149`
    },
    "!gigachad": {
        roles: ["Haut-gradé", "Direction"],
        response: `https://tenor.com/view/gigachad-chad-gif-20773266`
    },
    "!ohhh": {
        roles: ["Haut-gradé", "Direction"],
        response: `https://tenor.com/view/ohhh-whoah-gif-14206432`
    },
    "!momohenni": {
        roles: ["Haut-gradé", "Direction"],
        response: `https://tenor.com/view/mohamed-henni-bloger-fan-de-om-fan-de-marseille-youtuber-gif-12597020`
    },
    "!monkey": {
      roles: ["Haut-gradé", "Direction"],
      response: `https://tenor.com/view/monkey-rizz-lightskin-stare-lightskin-monkey-lick-lips-monkey-stare-gif-27631236`
  },
    "!serviceetudiant" : {
      roles: ["Haut-gradé", "Direction"],
      response: `Bonjour à vous <@&1024038809387667578>,
      

Ci-dessous des messages de mentor seront posé afin que vous puissiez partir en service avec eux.
Maintenant à toi de lui envoyé un mail privé pour pouvoir partir en service avec lui.
Pour les mentors vous n'avez qu'a effectué la commande "/servicementorat" et de suivre les indications.
      
Bien à vous,
<@1010191277238784050>
Le Secrétaire Administratif du L.S.M.C. `
    }
}
    const content = message.content.trim();
    
    if (content.startsWith("!")) {
      const command = content.split(" ")[0];
      if (commands.hasOwnProperty(command)) {
        const { roles, response } = commands[command];
        const hasPermission = roles.some(role => message.member.roles.cache.some(memberRole => memberRole.name === role));
        
        if (hasPermission) {
          message.channel.send(response);
          message.delete();
        } else {
          message.channel.send(`:flame: <@${message.author.id}> **Vous ne pouvez pas faire ça !**`);
          message.delete();
        }
      }
    }
  });
    