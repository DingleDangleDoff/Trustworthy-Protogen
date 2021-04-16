const {MessageEmbed} = require('discord.js')
const axios = require('axios')
const blacklist = {
    ["alien"] : true,
    ["breasts"] : true,
    ["brony"] : true,
    ["cartoon_network"] : true,
    ["cub"] : true,
    ["cum_inflation"] : true,
    ["deltarune"] : true,
    ["diaper"] : true,
    ["dieper"] : true,
    ["equestrian"] : true,
    ["equine"] : true,
    ["equine_penis"] : true,
    ["fart"] : true,
    ["female"] : true,
    ["feral"] : true,
    ["five_nights_at_freddy's"] : true,
    ["fisting"] : true,
    ["food_play"] : true,
    ["gynomorph"] : true,
    ["horse"] : true,
    ["human"] : true,
    ["hyper"] : true,
    ["inflation"] : true,
    ["intersex"] : true,
    ["loli"] : true,
    ["male_pregnancy"] : true,
    ["mario"] : true,
    ["mega"] : true,
    ["moobs"] : true,
    ["my_little_pony"] : true,
    ["not_furry"] : true,
    ["omo"] : true,
    ["omorashi"] : true,
    ["overweight"] : true,
    ["peeing"] : true,
    ["pussy"] : true,
    ["scat"] : true,
    ["sonic_the_hedgehog_(series)"] : true,
    ["spider"] : true,
    ["star_fox"] : true,
    ["teenage_mutant_ninja_turtles"] : true,
    ["urine"] : true,
    ["vore"] : true,
    ["watersports"] : true,
    ["wet_diaper"] : true,
    ["young"] : true,
    ["zootopia"] : true,
    ["rating:safe"] : true
}
module.exports = {
    name: 'e6',
    description: "Posts a random e621 image by tag",
    execute(Client, message, args, Discord, cmd){
        axios.get(`https://e621.net/posts.json?tags=${encodeURI(args.join(" "))}`, {headers: {'User-Agent': 'e6-f/1.0'}})
    .then(response => {
        let posts = response.data["posts"];

        posts = posts.filter(post => {
          for (let tag of post.tags["general"]) {
            if (blacklist[tag]) return false;
          }
          return true
        })

        const post = posts[Math.round(Math.random() * posts.length)]
        if (message.channel.nsfw) {
            const embed = new MessageEmbed()
                .setTitle("View on e621")
                .setURL("https://e621.net/posts/" + post.id)
                .setAuthor("e621", "https://e621.net/favicon.ico","https://e621.net/")
                .setColor('#2F64B4')
                .setDescription("Score | " + post.score.total)
                .setImage(post.file.url)
                .setTimestamp()
            message.channel.send({embed})
            //console.log(post.tags)
        } else {
            message.channel.send('Use this command in a NSFW channel');
        }
    })
    .catch(err => {
        console.log(err)
        message.channel.send('There was an error trying to post')
    })
    }
}

//Jakey pretty much made this one too