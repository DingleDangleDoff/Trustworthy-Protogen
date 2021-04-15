var object = ['Rock','Paper','Scissors']
module.exports = {
    name: 'rps',
    description: "Rock, Paper, Scissors",
    execute(Client, message, args, Discord){
        message.reply(object[Math.floor(Math.random() * object.length)]);
    }
}