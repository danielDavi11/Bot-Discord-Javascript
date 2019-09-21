const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client,message,args) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dogembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Cachorro :dog:")
  .setImage(body.url);

  message.channel.send(dogembed);

}


exports.config = {
  name: "dog",
  aliases: ['cachorro'],
  category: 'random'
}