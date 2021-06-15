module.exports = {
    name: 's1',
    description: "Secret command",
    execute(Client, message, args, Discord, cmd){
        if (message.channel.type !== "dm") {
            message.delete().catch();
        } else message.channel.send('https://youtu.be/85uyJfxesY8 https://cdn.discordapp.com/attachments/853849922906357760/854222450442108988/S1.wav');
    }
}