module.exports = {
    name: 's1',
    description: "Secret command",
    execute(Client, message, args, Discord, cmd){
        if (message.channel.type !== "dm") {
            message.delete().catch();
        } else message.channel.send('https://youtu.be/7tkMvWJJs0g https://cdn.discordapp.com/attachments/853849922906357760/853974507285643264/S2.wav');
    }
}