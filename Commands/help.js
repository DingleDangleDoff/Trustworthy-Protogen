const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'help',
    description: "Shows the command you are using",
    execute(Client, message, args, Discord, cmd){
      if (message.guild === null) {colour = '#000000'} else {colour = message.guild.me.displayColor}
      const embed = new MessageEmbed()
        .setTitle("Commands")
        .setAuthor("Help", "https://cdn.discordapp.com/avatars/529103009960034304/8c487eb0b4f6f3200b73859827919f8b.webp?size=4096")
        .setColor(colour)
        .setDescription(`**Bot Prefix:**  <. Use <help (command) to find out more`)
        .addFields([])
        .setFooter('Created by DingleDangleDoff with help by Jakey')
        .setTimestamp()
      
      const categories = {};
      CommandEmitter.on("done", commands => {
        commandList = commands;
        for (let command of Object.keys(commandList)) {
            categories[commandList[command].category] = Object.values(commandList).filter(cmd => cmd.category === commandList[command].category)
        }
       for (let category of Object.keys(categories)) {
            let bigStr = "` ` `\n"
           for (let command of categories[category]) {
               bigStr += command.command + "\n"
           }
            bigStr += "` ` `"
            generalHelp.embed.fields.push({
                name: category,
                value: bigStr,
                inline: true
            })
       }
    })
    message.channel.send(embed)
    }
}
//Made by jakey