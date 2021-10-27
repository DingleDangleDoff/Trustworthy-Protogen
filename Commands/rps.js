var object = ['Rock','Paper','Scissors']
var choices = ['rock','paper','scissors']
module.exports = {
    name: 'rps',
    description: "Rock, Paper, Scissors",
    execute(Client, message, args, Discord){
        const botchoice = object[Math.floor(Math.random() * object.length)]
        const playerchoice = args[0]
        
        if (!playerchoice) return message.channel.send('You did not choose anything, so I automatically win')
        //if (!choices.includes(playerchoice)) return message.channel.send(`I choose ${botchoice} but because you chose ${playerchoice} witch is not even a proper option, I win`);
        if (playerchoice.toLowerCase() === botchoice.toLocaleLowerCase()) return message.channel.send(`It's a tie!`)
        
        switch (playerchoice.toLowerCase()){
            case 'rock': {
                if (botchoice === 'Paper') return message.reply(`You chose ${args[0]}, I chose ${botchoice}, I win`);
                else return message.reply(`You chose ${args[0]}, I chose ${botchoice}, You win`);
            }
            case 'paper': {
                if (botchoice === 'Scissors') return message.reply(`You chose ${args[0]}, I chose ${botchoice}, I win`);
                else return message.reply(`You chose ${args[0]}, I chose ${botchoice}, You win`);        
            }
            case 'scissors': {
                if (botchoice === 'Rock') return message.reply(`You chose ${args[0]}, I chose ${botchoice}, I win`);
                else return message.reply(`You chose ${args[0]}, I chose ${botchoice}, You win`);
            }
            default :{
                return message.channel.send(`I choose ${botchoice} but because you chose ${playerchoice} witch is not even a proper option, I win`);
            }
        }
    }
}