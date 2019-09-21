const Discord = require("discord.js");

module.exports.run = async (hikari, message, args) => {
  let botembed = new Discord.RichEmbed()
  .setAuthor(`Kyouta Tsubaki`, hikari.user.avatarURL)
  .addField(`👑Dono`, `zFastHeroBR`, true)
  .addField(`📁Versão`, `1.0.0`, true)
  .addField(`📚Livraria`, `Discord ^11.5.1 (Js)`, true)

  .addField(`🔋Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField(`💓Servidores`, `${hikari.guilds.size.toLocaleString()}`, true)

  .addField(`👦Usuarios`, `${hikari.users.size.toLocaleString()}`, true)
  .addField(`📻Canais`, `${hikari.channels.size.toLocaleString()}`, true)


    message.channel.send(botembed);
}

exports.config = {
    name: 'botinfo',
    aliases: [],
    category: 'util'
}