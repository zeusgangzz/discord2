const Utils = require("../../modules/utils.js")
const Embed = Utils.Embed;
const config = Utils.variables.config;
const lang = Utils.variables.lang;

module.exports = {
    name: 'prefix',
    run: async (bot, message, args) => {
        message.channel.send(Embed({
            title: lang.Other.OtherCommands.Prefix.Title,
            description: lang.Other.OtherCommands.Prefix.Description.replace(/{prefixes}/g, [...new Set([`<@!${bot.user.id}>`, await Utils.variables.db.get.getPrefixes(message.guild.id), config.Prefix])].map(p => `> **${p}**\n`).join('\n'))
        }))
    },
    description: "Check the bot's prefix",
    usage: 'prefix',
    aliases: [
        'prefixes'
    ]
}
// https://directleaks.net