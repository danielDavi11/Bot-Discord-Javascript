const Discord = require("discord.js")
const jimp =require("jimp")
const config = require("./config.json")
const client = new  Discord.Client()
const fs = require('fs')
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()

fs.readdir('./comandos', function (err, file) {
    if (err) console.log(err)
    let jsfile = file.filter(f => f.split('.')
    .pop() === 'js' )
    if (jsfile.length < 0) {
        console.log('Não foi encontrado nehum comando')
    }
    jsfile.forEach(function (f, i) {
        let pull = require(`./comandos/${f}`)
        client.commands.set(pull.config.name, pull)
        pull.config.aliases.forEach(function (alias) {
            client.aliases.set(alias, pull.config.name)
        })
    })
})

client.on("ready", async () => {
    console.log("Bot online")

    let status = [
        {name: 'Muita Alegria', type: 'STREAMING', url: 'http://twitch.tv/danielHF'},
        {name: 'Muita Felicidade', type: 'STREAMING', url: 'http://twitch.tv/danielHF'},
        {name: 'Coelhos E Tão Fofuh', type: 'STREAMING', url: 'http://twitch.tv/danielHF'},
        {name: 'Não Faço Ideia', type: 'STREAMING', url: 'http://twitch.tv/danielHF'}
    ];

    function setStatus() {
        let altstatus = status[Math.floor(Math.random()*status.length)]
        client.user.setPresence({game: altstatus})
    }
    setStatus();
    setInterval(() => setStatus(), 10000)
})

client.on("guildMemberAdd", async member => {

    let options = {
        directory: "./images"
    }
    let canal = client.channels.get("616613214234607637")
    let fonte = await jimp.loadFont(jimp.FONT_SANS_32_BLACK)
    let mask = await jimp.read('mascara.png')
    let fundo = await jimp.read('fundo.png')
    
    jimp.read(member.user.displayAvatarURL).then(avatar => {
    avatar.resize(130, 130)
    mask.resize(130, 130)
    avatar.mask(mask)
  
    fundo.print(fonte, 170, 175, member.user.username)
    fundo.composite(avatar, 40, 90).write('bemvindo.png')
    canal.send(``, { files: ["bemvindo.png"] })
    
    console.log('Imagem enviada para o Discord')
    })
    .catch(err => {
    console.log('error avatar')
    })
  })

client.on("message", async message => {

    if(message.author.bot) return;
    if (message.channel.type === "dm") return;

    if (message.content.startsWith(`<@${client.user.id}>`)) {

        message.channel.send(`⚜ **|** Oi ${message.author}, eu me chamo ${client.user.username} e meu prefixo e \`${config.prefix}\``)

    }

    if (!message.content.startsWith(config.prefix)) return;
    let args = message.content.slice(config.prefix.length).trim().split(" ")

    let cmd = args.shift().toLowerCase()
    let CommandFile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    CommandFile.run(client, message, args)

})

client.login(config.token)