const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'info',
    description: "Just info on how the bot was made and the reason for it",
    execute(Client, message, args, Discord, cmd){
        if (message.guild === null) {colour = '#000000'} else {colour = message.guild.me.displayColor}
        const embed = new MessageEmbed()
        .setAuthor("Trustworthy Protogen", "https://cdn.discordapp.com/avatars/529103009960034304/8c487eb0b4f6f3200b73859827919f8b.webp?size=4096")
        .setColor(colour)
        .setDescription("This bot was mosty made just for fun but also as a bot to be used in a private server but it is more for anyone who would like to use it. It was made with discord.js and had a lot of help from jakey on making it. If you have any ideas you would like for a command feel free to ask, once the bot is done it will be put onto a server to stay online. If you for some reason would like to add the bot to one of your own servers you can use this link https://discord.com/api/oauth2/authorize?client_id=529103009960034304&permissions=2688403648&scope=bot")
        .setImage("https://cdn.discordapp.com/attachments/818144776758231060/824990674864701491/Bottom_thing.png")
        .setFooter('Hello!', 'https://cdn.discordapp.com/avatars/383905255760330763/ed600c45809dbfe796bc9c3622d09357.webp?size=4096')
        .setTimestamp()
        
        message.channel.send(embed);
    }
}