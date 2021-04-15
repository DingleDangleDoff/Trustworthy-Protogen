module.exports = {
    name: 'say',
    description: "Says your message and deletes the original",
    execute(Client, message, args, Discord){
        let botmessage = args.join(" ")
            message.delete().catch();
            return message.channel.send(botmessage);
    }
}