module.exports = {
    name: 'ping',
    description: "Tells you the bot latency",
    execute(Client, message, args, Discord){
        message.channel.send(Math.round(Date.now() - message.createdTimestamp) + " ms");
    }
}