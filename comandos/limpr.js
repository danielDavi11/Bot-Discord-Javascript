const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você nao Tem Permissão para Executar Este Comando.");
    if(!args[0]) return message.channel.send("Utilize : !limpar <Quantidade de Mensagens>")
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`**🗑 | Foram Limpas ${args[0]} Mensagens**.`).then(msg => msg.delete(5000));
    });

}

exports.config = {
    name: 'limpar',
    aliases: [],
    category: 'mod'
}