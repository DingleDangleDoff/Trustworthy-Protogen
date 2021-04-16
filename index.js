const Discord = require('discord.js');
const Client = new Discord.Client();
const fs = require('fs')
require('dotenv').config();


Client.commands = new Discord.Collection();
Client.events = new Discord.Collection();

['Command_handler', 'Event_handler'].forEach(handler =>{
    require(`./Handlers/${handler}`)(Client, Discord);
})

Client.on('ready', () =>{
    module.exports = Client

    Client.user.setActivity('You are a homosexual');
});

Client.login(process.env.TOKEN)