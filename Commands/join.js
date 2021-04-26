const Client = require("../index.js")
Client.on("message", message => {})
module.exports = {
    name: 'join',
    aliases: ['leave'],
    description: "Join an anonymous dm group with anyone else who is in it",
    async execute(Client, message, args, Discord, cmd){
        const users = new Map()
        if (cmd === 'join'){
            if (message.guild === null) {
                users.set(message.author.id, message.user);
                message.channel.send(`Joined dm group. You are user **${'Placeholder'}**, there are currently **${'Placeholder'}** people in the group, use <leave to leave`);
                console.log(users)
            } else {
                message.channel.send('You must be in dm to use this command')
            }
        } else if (cmd === 'leave'){ //Leave
            if (message.guild === null){
                users.delete(message.author.id);
                message.channel.send('Leaving dm group');
                console.log(users)
            } else {
                message.channel.send('You must be in dm to use this command')
            }
        }
    }
}
//WIP