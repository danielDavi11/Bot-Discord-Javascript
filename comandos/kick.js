const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Não Foi Possivel Encontrar o Usuario!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Você não tem permissão!");
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("Essa Pessoa Não Pode ser Expulsa!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Usuario Expulso", `${kUser} with ID ${kUser.id}`)
    .addField("Expulsado Por", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Expulsado Em", message.channel)
    .addField("Hora", message.createdAt)
    .addField("Razão", kReason);

    let kickChannel = message.guild.channels.find(`name`, "banimentos-kicks");
    if(!kickChannel) return message.channel.send("Não Encontrei O Canal.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

exports.config = {
    name: "kick",
    aliases: [],
    category: 'mod'
}