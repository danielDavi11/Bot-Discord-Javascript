const Discord = require('discord.js')
exports.run = async (client, message, args) => {
    RandomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    if(RandomNumber == 2){
        message.reply("😪 **| Você Perdeu**!");
    }
    else{
        message.reply("😄 **| Você Ganhou**!" )
    }
}

exports.config =  {
    name: 'roleta',
    aliases: ['russa'],
    category: 'random'
}