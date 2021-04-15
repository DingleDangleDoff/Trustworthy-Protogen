const Discord = require('discord.js');
const Client = new Discord.Client();
const fs = require('fs')

const Token = 'NTI5MTAzMDA5OTYwMDM0MzA0.XeT0rw.PRB0tvvHgIsx4TL1nfG4VqQcHcM';

Client.commands = new Discord.Collection();
Client.events = new Discord.Collection();

['Command_handler', 'Event_handler'].forEach(handler =>{
    require(`./Handlers/${handler}`)(Client, Discord);
})

Client.on('ready', () =>{
    module.exports = Client

    Client.user.setActivity('You are a homosexual');
});

Client.login(Token)