const Discord = require("discord.js");

module.exports.run = async (hikari, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Não Foi Possivel Encontrar o usuario.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reportes")
    .setColor("#15f153")
    .addField("Usuario Reportado", `${rUser} Seu ID: ${rUser.id}`)
    .addField("Reportado Por", `${message.author} Seu ID: ${message.author.id}`)
    .addField("Canal", message.channel)
    .addField("Hora Do Report", message.createdAt)
    .addField("Razão", rreason);

    let reportschannel = message.guild.channels.find(`name`, "「-」ʀᴇᴘᴏʀᴛ");
    if(!reportschannel) return message.channel.send("Não Foi Possivel Encontrar o Canal de Reportes.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

exports.config = {
    name: 'report',
    aliases: [],
    category: 'util'
}