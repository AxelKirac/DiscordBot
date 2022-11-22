const discord = require('discord.js');
const { REST } = require('@discord.js/rest')
const { Routes } = require('discord.js')
let commands = []
module.exports = async bot => {
    bot.commands.array.forEach(command => {
        let slashcommand = new discord.SlashCommandBuilder()
        .setName(command.name)
        .setDescription(command.description)
        .setDMPermission(command.dm)
        .setDefaultMemberPermissions(command.permission)
        if(command.options?.length > 1) {
            for (let i = 0; i < command.options.length; i++) {
                slashcommand[`add${command.options(i).type.slice(0, 1).toLowerCase() + command.options[i].type.slice(1, command.options[i].type.length)}Option`](option => option.setName(command.options[i].name).setDescription(command.options[i].description).setDMPermission(command.options[i].description).setRequired(command.options[i].required)
                )
            }
        }
    }
    )
    await commands.push(slashcommand)
}