exports.run = async (client, message, args) => {
    message.channel.send(`:ping_pong: **| pong** ${message.author}, estou com \`${Math.round(client.ping)}\`ms!`)
}

exports.config = {
    name: 'ping',
    aliases: [],
    category: 'util'
}