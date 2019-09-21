const Discord = require('discord.js')
const moment = require('moment')
moment.locale('pt-BR')

exports.run = async (client, message, args) => {
//module.exports.run = (client, message, args) => {
//
//}
   let gAvatar = message.guild.iconURL;
   let embed = new Discord.RichEmbed()

   .setTimestamp()
   .setTitle(`${message.guild.name}`)
   .setThumbnail(gAvatar)
   .setColor("RANDOM")
   .setDescription(`Algumas Informaçoes de ${message.guild.name}!`)
   .addField(`ID do servidor`, message.guild.id, true)
   .addField(`Fundador Do Servidor`, message.guild.owner, true)
   .addField(`Região do servidor`, message.guild.region, true)
   .addField(`Total de canais`, message.guild.channels.size, true)
   .addField(`Criada em`, moment(message.guild.createdAt).format('LLLLL'))
   .addField(`Você entrou aqui em`, moment(message.member.joinedAt).format('LLLLLL'))
   .addField(`Entrei Aqui em`, moment(client.user.joinedAt).format('LLLLLLL'))
   .addField(`Total de Membros`, message.guild.memberCount)

   message.channel.send(embed);
}

exports.config = {
//module.exports.config = {
//
//}
    name: 'serverinfo',
    aliases: ['serverinfo'],
    category: 'util'
}