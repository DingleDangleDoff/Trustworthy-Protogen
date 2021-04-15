const {MessageEmbed} = require('discord.js');
const weather = require('weather-js');
module.exports = {
    name: 'weather',
    description: "Gets the weather to whatever place you ask",
    async execute(Client, message, args, Discord, cmd){
        weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
            // 'C' can be changed to 'F' for farneheit results
            if(error) return message.channel.send(error);
            if(!args[0]) return message.channel.send('Please specify a location')
    
            if(result === undefined || result.length === 0) return message.channel.send('Not a real place');
    
            var current = result[0].current;
            var location = result[0].location;
            var forecast = result[0].forecast;
    
            if (message.guild === null) {colour = '#000000'} else {colour = message.guild.me.displayColor}
            const embed = new MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather forecast for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor(colour)
                .addField('Timezone', `UTC${location.timezone}`, true)
                .addField('Observation Time', `${current.observationtime}`, true)
                .addField('Temperature', `${current.temperature}°C (`+`${(current.temperature)*9/5+32}°F)`, true)
                .addField('Wind', current.winddisplay, true)
                .addField('Low/High', `${forecast[0].low}°C / ${forecast[0].high}°C`, true)
                .addField('Humidity', `${current.humidity}%`, true)
    
    
            message.channel.send(embed)
            //console.log(forecast)
            })        
    }
}
//Pretty much stolen by someone else