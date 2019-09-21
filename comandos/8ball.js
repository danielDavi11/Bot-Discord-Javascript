const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Você nao tem Permissão Para Executar Essa Ação");
   let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   if(!rMember) return message.reply("Não Encontrei o Usuario");
   let role = args.join(" ").slice(22);
   if(!role) return message.reply("Especifica uma role");
   let gRole = message.guild.roles.find(`name`, role);
   if(!gRole) return message.reply("Não Encontrei a Role Poderia Especificar ");

  if(rMember.roles.has(gRole.id)) return message.reply("Ele ja Tem o Rank Que Você especificou");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`**Parabéns, você recebeu a Role __${gRole.name}__**`)
  }catch(e){
  message.channel.send(`Parabéns por <@${rMember.id}> você conseguiu a role  ${gRole.name}. Tentamos enviar uma mensagem privada, mas eles foram bloqueados`);
 }
}

exports.config = {
    name: 'addrole',
    aliases: [],
    category: 'mod'
}