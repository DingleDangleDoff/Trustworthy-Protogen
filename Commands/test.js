module.exports = {
    name: 'test',
    description: "To test things",
    execute(Client, message, args, Discord){
      message.channel.send('Working!')
        
    }
}