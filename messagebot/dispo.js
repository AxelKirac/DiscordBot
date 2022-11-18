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

dispo()
function dispo() {
    client.on("messageCreate", message => {
        if(message.author.bot) return;  
        
        //!dispothomas
        if (message.content === "!dispothomas") {
            message.channel.send("Hey <@&931616626686705674> !\nLe docteur <@536231631938387978> est actuellement **disponible** à l'hôpital !\n**N'hésitez pas à prendre contact avec lui pour toute demande ou réclamation !**\n\n https://cdn.discordapp.com/attachments/1004187230023204974/1008002342077079624/gif_recon_fini.gif",
            message.delete("dispothomas")
            )
        };
        
        //!dispotiago
        if (message.content === "!dispotiago") {
        message.channel.send("Hey !\nLe docteur <@273916564686897154> est actuellement **disponible** à l'hôpital !\n**N'hésitez pas à prendre contact avec lui pour toute demande ou réclamation !**\n\n https://cdn.discordapp.com/attachments/1004187230023204974/1015903012931239989/gif_tiago.gif",
            message.delete("dispotiago")
        )
    };
    
    //!dispoadam
    if (message.content === "!dispoadam") {
        message.channel.send("Hey !\nLe docteur <@248517566530584577> est actuellement **disponible** à l'hôpital !\n**N'hésitez pas à prendre contact avec lui pour toute demande ou réclamation !**\n\n https://cdn.discordapp.com/attachments/1004187230023204974/1008763965993668658/gif_adam_fini.gif",
        message.delete("dispoadam")
        )
    };
    
    //!disporitchy
    if (message.content === "!disporitchy") {
        message.channel.send("Hey !\nLe docteur <@496663639349264415> est actuellement **disponible** à l'hôpital !\n**N'hésitez pas à prendre contact avec lui pour toute demande ou réclamation !**\n\n https://cdn.discordapp.com/attachments/1004187230023204974/1008768195689205861/Gif_ritchy_fini.gif",
        message.delete("disporitchy")
        )
    };
    
    //!dispolao
    if (message.content === "!dispolao") {
        message.channel.send("Hey !\nLa docteur <@434461194292822017> est actuellement **disponible** à l'hôpital !\n**N'hésitez pas à prendre contact avec elle pour toute demande ou réclamation !**\n\n https://cdn.discordapp.com/attachments/1004187230023204974/1007981886456475728/gif_Lao_fini.gif",
        message.delete("dispolao")
        )
    };
    
    //!dispopeter
    if (message.content === "!dispopeter") {
        message.channel.send("Hey !\nLe docteur <@250239631730278400> est actuellement **disponible** à l'hôpital !\n**N'hésitez pas à prendre contact avec lui pour toute demande ou réclamation !**\n\n https://cdn.discordapp.com/attachments/1004187230023204974/1023633287844999229/gif_direction.gif",
        message.delete("dispopeter")
        )
    };

    //!dispojmdlb
    if (message.content === "!dispojmdlb") {
        message.channel.send("Hey !\nLe docteur <@170557885376495616> est actuellement **disponible** à l'hôpital !\n**N'hésitez pas à prendre contact avec lui pour toute demande ou réclamation !**\n\n https://cdn.discordapp.com/attachments/1004187230023204974/1026220656708300940/gif_direction_2.gif",
        message.delete("dispojmdlb")
        )
    };
    
    //!dispoaiyana
    if (message.content === "!dispoaiyana") {
        message.channel.send("Hey !\nLa docteur <@310889892802461696> est actuellement **disponible** à l'hôpital !\n**N'hésitez pas à prendre contact avec elle pour toute demande ou réclamation !**\n\n https://cdn.discordapp.com/attachments/1004187230023204974/1026220656708300940/gif_direction_2.gif",
        message.delete("dispoaiyana")
        )
    };
    
    //!dispokayla
    if (message.content === "!dispokayla") {
        message.channel.send("Hey !\nLa docteur <@455801536413564940> est actuellement **disponible** à l'hôpital !\n**N'hésitez pas à prendre contact avec elle pour toute demande ou réclamation !**\n\n https://cdn.discordapp.com/attachments/1004187230023204974/1026220656708300940/gif_direction_2.gif",
        message.delete("dispokayla")
        )
    };
       //!repré.kiyane
       if (message.content === "!reprékiyane") {
        message.channel.send("Bonjour, \nLa **représentante du personnel** <@451378090711449621> est disponible à **l'hôpital Pillbox** ou par téléphone au **2130712** afin de traiter vos problèmes en interne !\nN'hésitez pas à prendre contact avec elle pour vous confier !\n\n***Attention :*** Il ne s'agit pas d'une permanence pour les primes !\n\nhttps://cdn.discordapp.com/attachments/943141757586141195/1037080949004980234/representante_Kiyane3.gif",
            message.delete("repré.kiyane")
        );
    };

    //!repré.amanda
    if (message.content === "!repréamanda") {
        message.channel.send("Bonjour, \nLa **représentante du personnel** <@281868284955983883> est disponible à **l'hôpital Pillbox** ou par téléphone au **253348** afin de traiter vos problèmes en interne !\nN'hésitez pas à prendre contact avec elle pour vous confier !\n\n***Attention :*** Il ne s'agit pas d'une permanence pour les primes !\n\nhttps://cdn.discordapp.com/attachments/943141757586141195/1041370585437065366/gif_rp_amanda.gif",
            message.delete("repré.amanda")
        );
    };
    module.exports = { dispo };
})};

