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
        .setDescription('**Bot Prefix:**  <.\n\n**ANNONPOST**     Use this to post in any channel using its id\n**ASK**     Ask almost any question and i *might* answer it\n**AVATAR**     Gets a users avatar by id or ping\n**CONFESS**     Use in dms to send a message to the confessions channels\n**CONVERT**     Convert units from metric to imperial and vice versa\n**E6**     Gets a post from e6 by tag\n**EMBED**     Test embed command\n**FOX** Gets a picture of a fox but can get other animals too (Fox, Snake, Axo, Wolf, Bunny)\n**HELP**     This command\n**IMAGE**     Gets an image from google images\n**INFO**     General info on the bot\n**Join**     Joins anonymous group DM, can also use <leave to leave\n**MATH**     Does math\n**MYSTERY**     ???\n**PING**     Gets ping\n**PLAY**     Plays music in vc, p, stop and skip work too\n**REMIND**     Sets a reminder\n**ROLL**     Rolls a die\n**RPS**     Rock paper scissors\n**SAY**     Make me say anything\n**TEST**     Test command\n**WEATHER**     Gets the weather for wherever you say')
        .addFields([])
        .setFooter('Created by DingleDangleDoff with help by Jakey and ferox')
        .setTimestamp()
    message.channel.send(embed)
    }
}
