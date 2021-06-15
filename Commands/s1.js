module.exports = {
    name: 's1',
    description: "Secret command",
    execute(Client, message, args, Discord, cmd){
        if (message.channel.type !== "dm") {
            message.delete().catch();
        } else message.channel.send('Being remade');
    }
}