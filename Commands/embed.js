const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'embed',
    description: "Creates an embed, used mostly for testing",
    execute(Client, message, args, Discord, cmd){
        const embed = new MessageEmbed()
            .setTitle("Camellia - Nasty * Nasty * Spell (from Blackmagik Blazing)")
            .setURL("https://youtu.be/IWbOiOg_lro")
            .setAuthor("Added to queue", "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/395_Youtube_logo-512.png", "https://www.youtube.com/")
            .setThumbnail('https://i.ytimg.com/vi/IWbOiOg_lro/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA142syCzyuT2q9BYKd_Dr0OmbuYw')
            .addFields(
                {name: 'Video Length', value: '4:24', inline: true},
                {name: 'Time until playing', value: '0:00', inline: true},
                {name: 'Channel', value: 'Camellia Official', inline: true},

            )
            .setColor('#ff0000')
            .setTimestamp();
        
        message.channel.send(embed);
    }
}