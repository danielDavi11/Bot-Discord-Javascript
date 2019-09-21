const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você Nao Tem Permissão Para Executar Esse Comando");
  let botmessages = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessages);

}

exports.config =  {
    name: 'diga',
    aliases: [],
    category: 'mod'
}