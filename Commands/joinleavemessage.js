const {MessageEmbed} = require('discord.js');
const Client = require("../index.js")
const {MessageAttachment} = require('discord.js')
Client.on('guildMemberAdd', async(member) => {
    const Channel = member.guild.channels.cache.get('521122012958294028')
    //if (message.guild === null) {colour = '#000000'} else {colour = message.guild.me.displayColor}
    const embed = new MessageEmbed()
    .setAuthor("Member Joined!")
    .setDescription(`**<@${member.id}>**`)
    .setColor(/*Channel.guild.me.displayColor || "#000000"*/'#00ff00')
    .setFooter(`We now have ${member.guild.memberCount} members`)
    .setThumbnail(member.user.avatarURL({dynamic: true,size: 4096}))
    .setTimestamp()

    Channel.send(embed)
})

Client.on('guildMemberRemove', async(member) => {
    const Channel = member.guild.channels.cache.get('521122012958294028')
    const embed = new MessageEmbed()
    .setAuthor("Member Leave :(")
    .setDescription(`**${member.displayName}**`)
    .setColor('#ff0000')
    .setFooter(`We now have ${member.guild.memberCount} members`)
    .setThumbnail(member.user.avatarURL({dynamic: true,size: 4096}))
    .setTimestamp()

    Channel.send(embed)
})