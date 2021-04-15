const {MessageEmbed} = require('discord.js');
const ms = require('ms');
module.exports = {
    name: 'remind',
    description: "Sets a reminder ",
    async execute(Client, message, args, Discord, cmd){
        let time = args[0];
        let user = message.author
        let reminder = args.splice(1).join(' ')

        if (!args[0]) return message.channel.send('You need to say the time')
        if (
            !args[0].endsWith("d") &&   
            !args[0].endsWith("m") &&
            !args[0].endsWith("h") &&
            !args[0].endsWith("s")
        )


            return message.channel.send('Please use **d**, **m**, **h**, or **s**.')
        if (!reminder) return message.channel.send('Please tell me what you want to be reminded of')

        message.channel.send(`You will be reminded in ${time}`)

        const reminderdm = new MessageEmbed()
        .setColor('#000000')
        .setTitle('**REMINDER**')
        .setDescription(`**It has been ${time}, Your reminder is:** ${reminder}`)  

        setTimeout(async function () {
           try{

            await user.send(reminderdm)
           }catch(err){

           } 
           
        }, ms(time));
    }
}