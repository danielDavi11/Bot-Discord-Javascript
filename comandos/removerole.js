const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Você não Tem Permissão para Executar Esse Comando");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Não Encontrei o Usuario");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Especifica uma Role");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Não encontrei a Role Especificada");

 if(!rMember.roles.has(gRole.id)) return message.reply("nao existe este cargo especificado");
 await(rMember.removeRole(gRole.id));

 try{
   await rMember.send(`**Desculpe, mas por causa de seu comportamento, decidimos Tirar seu Cargo __${gRole.name}__ obrigado por não tirarmos sua vida, obrigado por sua atenção**`)
 }catch(e){
 message.channel.send(` <@${rMember.id}> Removemos Seu Cargo  ${gRole.name}. Tentamos enviar uma mensagem privada, mas todas Mensagens Foram Bloqueadas`);
 }
}

exports.config = {
    name: 'removerole',
    aliases: [],
    category: 'mod'
}