const { Client, GatewayIntentBits, MessageFlags, MembershipScreeningFieldType, ActivityType } = require("discord.js");

const token = require("../tokenclient/token");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.login(token);

setStatus();

function setStatus() {
    const botActivities = ["Thomas le bg ultime", "Adam & Aiyana ❤"];

    client.on('ready', () => [
        setInterval(async () => {
            const randomStatus = botActivities[Math.floor(Math.random() * botActivities.length)];
            client.user.setPresence({ activities: [{ name: `${randomStatus}`, type: ActivityType.Watching }] });
        }, 5000)
    ]);
    module.exports = { setStatus };
}