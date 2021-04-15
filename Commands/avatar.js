const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'avatar',
    description: "Gets an avatar",
    async execute(Client, message, args, Discord) {
        let user = message.author;
  if (args[0]) {
    //If there are any arguments, try resolve a user from them
    if (message.mentions.users.size > 0) {
      user = message.mentions.users.first()
      //Assign the first user mentioned to user
    } else { //No mentions, but we still have at least an argument
      //Try resolve (fetch) a user with the first provided argument
      user = await Client.users.fetch(args[0]).catch(err => {
        //console.log(err)
        message.channel.send('Please use a valid user ID')
      });
    }
    if (!user) return; //message.channel.send('Please use a valid user ID'); //No valid user was found, so we can't do anythin
  }
  if (message.guild === null) {colour = '#000000'} else {colour = message.guild.me.displayColor}
  const embed = new MessageEmbed()
    .setTitle(user.username)
    .setURL(user.avatarURL({dynamic: true,size: 4096}))
    .setColor(colour)
    .setImage(user.avatarURL({dynamic: true,size: 4096}))
    .setTimestamp()
    message.channel.send({embed});
    } 
} 

//Pretty much made by jakey