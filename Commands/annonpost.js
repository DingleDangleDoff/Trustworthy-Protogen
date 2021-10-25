module.exports = {
    name: 'annonpost',
    description: "Will post to any channel if you give the id",
    execute(Client, message, args, Discord, cmd){
        const Channelid = args[0];
        args.shift()
        var botmessage = args.join(" ")
        const Channel = Client.channels.cache.get(Channelid);
        
        Channel.send(botmessage)
        message.channel.sent('Sent!')
    }
}