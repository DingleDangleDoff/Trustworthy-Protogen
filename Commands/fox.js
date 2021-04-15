const axios = require("axios");
const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'fox',
    aliases: ['snake', 'axo', 'axolotl', 'wolf', 'bunny'],
    description: "Gets a random animal image",
    execute(Client, message, args, Discord, cmd){
        
        switch(cmd){
            case 'fox': 
            axios.get("https://fur.im/fox/")
            .then(response => {
            const foxImage = response.data.file
            if (message.guild === null) {colour = '#000000'} else {colour = message.guild.me.displayColor}
            const embed = new MessageEmbed()
                .setAuthor('Fox', "https://cdn.discordapp.com/attachments/607359984426156032/826394866787418112/image7.png", foxImage)
                .setColor(colour)
                .setImage(foxImage)
                .setTimestamp()
            message.channel.send(embed)
                })
                .catch(err => {
                    console.log(err)
                    message.channel.send('There was an error trying to send a the fox')
                })
                break; //----------------------------------------------------------------------------------------------------------------
            case 'snake':
                axios.get("https://fur.im/snek/")
            .then(response => {
            const snakeImage = response.data.file
            if (message.guild === null) {colour = '#000000'} else {colour = message.guild.me.displayColor}
            const embed = new MessageEmbed()
                .setAuthor('Snake', "https://cdn.discordapp.com/attachments/818144776758231060/826773913634865162/unknown.png", snakeImage)
                .setColor(colour)
                .setImage(snakeImage)
                .setTimestamp()
            message.channel.send(embed)
                })
                .catch(err => {
                    console.log(err)
                    message.channel.send('There was an error trying to send a the snake')
                })
                break; //----------------------------------------------------------------------------------------------------------------
                case ('axo' || 'axolotl'):
                    axios.get("https://fur.im/axo/")
                .then(response => {
                const axoImage = response.data.file
                if (message.guild === null) {colour = '#000000'} else {colour = message.guild.me.displayColor}
                const embed = new MessageEmbed()
                    .setAuthor('Axolotl', "https://cdn.discordapp.com/attachments/818144776758231060/828540331883757568/GettyImages-1058304880-c-0b54061-scaled.png", axoImage)
                    .setColor(colour)
                    .setImage(axoImage)
                    .setTimestamp()
                message.channel.send(embed)
                    })
                    .catch(err => {
                        console.log(err)
                        message.channel.send('There was an error trying to send a the axolotl')
                    })
                    break; //----------------------------------------------------------------------------------------------------------------
                    case 'wolf':
                        axios.get("http://fur.im/wolf/")
                    .then(response => {
                    const wolfImage = response.data.file
                    if (message.guild === null) {colour = '#000000'} else {colour = message.guild.me.displayColor}
                    const embed = new MessageEmbed()
                        .setAuthor('Wolf', "https://cdn.discordapp.com/attachments/818144776758231060/828540776152825866/5568.png", wolfImage)
                        .setColor(colour)
                        .setImage(wolfImage)
                        .setTimestamp()
                    message.channel.send(embed)
                        })
                        .catch(err => {
                            console.log(err)
                            message.channel.send('There was an error trying to send a the wolf')
                        })
                        break; //----------------------------------------------------------------------------------------------------------------
                        case 'bunny':
                            axios.get("https://fur.im/bun/")
                        .then(response => {
                        const bunImage = response.data.file
                        if (message.guild === null) {colour = '#000000'} else {colour = message.guild.me.displayColor}
                        const embed = new MessageEmbed()
                            .setAuthor('Bunny', "https://cdn.discordapp.com/attachments/818144776758231060/828541961962127380/unknown.png", bunImage)
                            .setColor(colour)
                            .setImage(bunImage)
                            .setTimestamp()
                        message.channel.send(embed)
                            })
                            .catch(err => {
                                console.log(err)
                                message.channel.send('There was an error trying to send a the bunny')
                            })
                            break; //----------------------------------------------------------------------------------------------------------------
        }
    }
}