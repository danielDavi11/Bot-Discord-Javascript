const Discord = require('discord.js')
exports.run = async (client, message, args) => {

   const embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setTimestamp()
   .setThumbnail(client.user.displayAvatarURL)
   .addField('**Comandos úteis (6)**', `\`${client.commands.filter(c => c.config.category === 'util').map(c => c.config.name).join(", ")}\``)
   .addField('**Outros Comandos (6)**', `\`${client.commands.filter(c => c.config.category === 'random').map(c => c.config.name).join(", ")}\``)
   .addField('**Comandos De Moderadores (8)**', `\`${client.commands.filter(c => c.config.category === 'mod').map(c => c.config.name).join(", ")}\``)

   message.reply(embed)
}

exports.config = {
    name: 'ajuda',
    aliases: ['help'],
    category: 'util'
}