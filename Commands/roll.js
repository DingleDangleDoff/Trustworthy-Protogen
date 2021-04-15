var number = ['<:1:657502468141481984>','<:2:657502468246339584>','<:3:657502468065984514>','<:4:657502469286526976>','<:5:657502467986161675>','<:5:657502467986161675>']
module.exports = {
    name: 'roll',
    description: "Rolls a die",
    execute(Client, message, args, Discord){
        message.reply(number[Math.floor(Math.random() * number.length)]);
    }
}