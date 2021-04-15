const {MessageEmbed} = require('discord.js')
var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
      headless: true
    },
})

module.exports = {
    name: 'image',
    description: "Gets image from google images",
    async execute(Client, message, args, Discord){
        const image_query = args.join(' ');
        let request = args.join(" ");
        if (!image_query) return message.channel.send('But there was nothing there...')

        const image_results = await google.scrape(image_query, 1);
        if (message.guild === null) {colour = '#000000'} else {colour = message.guild.me.displayColor}
        const embed = new MessageEmbed()
            .setAuthor(request, "https://www.google.com/favicon.ico","https://www.google.com/")
            .setColor(colour)
            .setImage(image_results[0].url)
            .setTimestamp()
        message.channel.send(embed)
    }
}