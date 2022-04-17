const Client = require("../index.js")
module.exports = {
    name: 'mediatocdn',
    aliases: ['https://media.discordapp.net/'],
    description: "Changes media.discordapp.net to cdn.discordapp.com",
    execute(Client, message, args, Discord, cmd){
        if (message.content.toLowerCase().startsWith("ttest")) {    
            //let botmessage = args.join(" ")
            //message.delete().catch();
            //return message.channel.send(botmessage);
            return message.channel.send("Hello");
        }
    }
}