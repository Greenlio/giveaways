const Discord = require('discord.js')
const config = require('../config.json')

exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle('Help')
    .setDescription(`\n**g!start-giveaway [channel] [time] [winners] [prize]\ng!end-giveaway [message id]\ng!reroll-giveaway [message id]\ng!help\n**`)
    message.channel.send(embed)
}