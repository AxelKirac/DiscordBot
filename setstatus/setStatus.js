const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

const config = require("../config.json");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.login(config.token);

setStatus();

function setStatus() {
    const botActivities = ["Fortinitti", "La babaji", "PPA Simulator", "Minecraft"];
    client.on('ready', () => [
        setInterval(async () => {
            const randomStatus = botActivities[Math.floor(Math.random() * botActivities.length)];
            client.user.setPresence({ activities: [{ name: `${randomStatus}`, type: ActivityType.Playing }] });
        }, 15000)
    ]);
    module.exports = { setStatus };
}