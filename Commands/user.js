const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'user',
    description: "Gets info on a user",
    async execute(Client, message, args, Discord, cmd){
        let user = message.author;
            if (args[0]) {
            if (message.mentions.users.size > 0) {
            user = message.mentions.users.first()
            } else { 
                user = await Client.users.fetch(args[0]).catch(err => {
                //console.log(err)
                message.channel.send('Please use a valid user ID')
            });
        }
        if (!user) return; //message.channel.send('Please use a valid user ID'); //No valid user was found, so we can't do anythin
        }
        if (message.guild === null) {colour = '#000000'} else {colour = message.guild.me.displayColor}
        let botstatus = 'No'
        if (user.bot) botstatus = 'Yes'
        const embed = new MessageEmbed()
            .setAuthor(user.username, user.avatarURL({dynamic: true,size: 4096}), user.avatarURL({dynamic: true,size: 4096}))
            .setColor(colour)
            .setThumbnail(user.avatarURL({dynamic: true,size: 4096}))
            .addFields(
                { name: 'User Info', value: `**Name: **${user.username}\n**ID: **${user.presence.userID}\n**Bot Account: **${botstatus}\n**Status: **${user.presence.status}\n**Account Made: **${user.createdAt}`, inline: true},
                { name: 'Server Info', value: `**Nickname: **${user.displayName}\n**Joined: **${'n'}`, inline: true},
                { name: '\u200B', value: '\u200B' },                
                { name: 'Activity', value: 'Activity thing'},
                { name: 'Roles', value: 'their roles'},
            )
            .setTimestamp()
        message.channel.send(embed)
        //console.log(user.presence.activities)
    }
}