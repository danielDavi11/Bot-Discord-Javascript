const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

  let toMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!toMute) return message.reply("Não Encontrei o Usuario.");
  if(toMute.hasPermission("MUTE_MEMBERS")) return message.reply("Você não Tem Permissão para Executar Esse Comando");
  let muterole = message.guild.roles.find("name", "Silenciado");
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name:"Silenciado",
        color:"#646b75",
        permissions:[]
      })
      message.guild.channels.forEach(async(channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.reply("Você nao especificou um Tempo!");

  await(toMute.addRole(muterole.id))
  message.reply(`<@${toMute.id}> Foi Mutado Por ${ms(ms(mutetime))}`);

  setTimeout(function(){
    toMute.removeRole(muterole.id);
    message.channel.send(`<@${toMute.id}> Pode Repetir ??`);
  }, ms(mutetime));
}

exports.config = {
    name: 'tempmute',
    aliases: [],
    category: 'mod'
}