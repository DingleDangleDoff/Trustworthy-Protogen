const {MessageEmbed} = require('discord.js');
const fs = require('fs');
const fileName = './confesscount.json';
const file = require(fileName);

module.exports = {
    name: 'confess',
    description: "Use in dms to confess your sins",
    async execute(Client, message, args, Discord, cmd){
        if (message.guild === null) {
            //let confession = args.join(" ");
            //let image = message.attachments.size > 0 ? message.attachments.array()[0].url : null
            if (message.content.includes('https://cdn.discordapp.com/attachments/')) {
                var image = args[0];
            } else var image = message.attachments.size > 0 ? message.attachments.array()[0].url : null;
            if (message.content.includes('https://cdn.discordapp.com/attachments/')) {
                args.shift()
                var confession = args.join(" ");
            } else var confession = args.join(" ");
            if (confession || image || (confession && image)){
                //let colour;
                //(message.guild && message.guild.me.displayColor) ? message.guild.me.displayColor : colour = "#000000";
                const confessionChannel = Client.channels.cache.get("748949920957988954"); //SFW Channel------------------
                const nsfwConfessionChannel = Client.channels.cache.get("818153913923797012");//NSFW Channel -------------
                const embed = new MessageEmbed() // Embed that will be sent to channel
                .setColor(confessionChannel.guild.me.displayColor || "#000000")
                .setDescription(confession)
                .setImage(image)
                .setFooter("Use <confess in dms to confess")
                .setTimestamp()

                const preview = new MessageEmbed() // Embed that will show preview
                .setAuthor('Preview confession', "https://cdn.discordapp.com/attachments/818144776758231060/829260257187725342/qraswsrhhhx.png")
                .setColor('#FFFF00')
                .setDescription(confession)
                .setImage(image)
                .setFooter("✅ SFW, 🔞 NSFW, ❌ Cancel confession")
                .setTimestamp()
                
                let confirmMessage = await message.channel.send(preview); // The reactions that get added to the preview embed
                confirmMessage.react('✅');
                confirmMessage.react('🔞');
                confirmMessage.react('❌');
                
                const filter = (reaction, user) => (['✅', '🔞', '❌'].includes(reaction.emoji.name) && !user.bot) // Reaction collector to send to correct channel or delete
                const collector = await confirmMessage.createReactionCollector(filter, {time: 60000, max: 1})
                collector.on('collect', (reaction, user) => {
                    switch (reaction.emoji.name) {
                        case '✅':
                            collector.stop();
                            file.sfw += 1
                            fs.writeFileSync('./Commands/confesscount.json', JSON.stringify(file), function writeJSON(err) {
                                if (err) return console.log(err);
                              });
                            embed.setAuthor(`Anonymous confession #${file.sfw}`, "https://cdn.discordapp.com/attachments/818144776758231060/829260257187725342/qraswsrhhhx.png")
                            confessionChannel.send(embed)
                            preview.setColor('#00FF00');
                            confirmMessage.edit(preview);
                            message.channel.send('Confession sent');
                        break;
                        case '🔞':
                            collector.stop();
                            file.nsfw += 1
                            fs.writeFileSync('./Commands/confesscount.json', JSON.stringify(file), function writeJSON(err) {
                                if (err) return console.log(err);
                              });
                            embed.setAuthor(`Anonymous confession #${file.nsfw}`, "https://cdn.discordapp.com/attachments/818144776758231060/829260938296557608/c8246f876f59eeaccad86a40948d9942.png")
                            nsfwConfessionChannel.send(embed)
                            preview.setColor('#00FF00');
                            confirmMessage.edit(preview);
                            message.channel.send('Confession sent as NSFW');
                        break;
                        case '❌':
                            collector.stop();
                            preview.setColor('#FF0000');
                            confirmMessage.edit(preview);
                            message.channel.send('Canceled confession');
                        break;
                    }
                })
            } else {
                message.channel.send('There must be an image and/or text to confess');
            }
        }else{
            message.channel.send('You must be in dms to use this');
        }
    }
}