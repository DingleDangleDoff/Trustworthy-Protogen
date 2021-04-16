module.exports = {
    name: 'join',
    aliases: ['leave'],
    description: "Join an anonymous dm group with anyone else who is in it",
    async execute(Client, message, args, Discord, cmd){
        if (cmd === 'join') {
            if (message.guild === null) {
                message.channel.send(`Joined dm group. You are user **${'Placeholder'}**, there are currently **${'Placeholder'}** people in the group, use <leave to leave`);
                let filter = m => !m.author.bot;
                let collector = new Discord.MessageCollector(message.channel,filter);
                collector.on('collect', (message,col) => {
                    console.log(message.content);
                    
                })

        }else {
            message.channel.send('You must be in dms to use this');
        }
           //----------------------------LEAVE---------------------------- 
        } else if (cmd === 'leave') {
            if (message.guild === null) {
                message.channel.send('Leaving dm group');
                collector.stop();

        }else {
            message.channel.send('You must be in dms to use this');
        }
        }
    }
}
//WIP