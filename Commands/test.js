const {MessageAttachment} = require('discord.js')
const image = new MessageAttachment('https://cdn.discordapp.com/attachments/607359984426156032/836237798461014016/image7.png')
module.exports = {
    name: 'test',
    description: "To test things",
    execute(Client, message, args, Discord){
      message.channel.send('Test', image)
        
    }
}