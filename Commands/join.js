const Client = require("../index.js")
const {MessageAttachment} = require('discord.js')
Client.on("message", async message => {
    if (message.channel.type !== "dm") return; // not in dm
    if (!users.has(message.author.id)) return; // user is not in chatroom
    if (message.content.startsWith("<")) return;
    const image = new MessageAttachment('https://cdn.discordapp.com/attachments/607359984426156032/836237798461014016/image7.png')
    broadcastToGroup(users.get(message.channel.id),`**${users.get(message.author.id)}:** ` + message.content, image)
    console.log(image)
})
const users = new Map()
const letters = new Map([
    ['Γ', false],
    ['Δ', false],
    ['Θ', false],
    ['Λ', false],
    ['Ξ', false],
    ['Π', false],
    ['Σ', false],
    ['Φ', false],
    ['Ψ', false],
    ['Ω', false]
])
function freeLetter(letter) {
    if (!letters.has(letter)) return false;
    letters.set(letter, false )
}

function getRandomLetter() {
    available = []
    for (let [letter, taken] of letters) {
      if (!taken) available.push(letter)
    }
    let letter = available[Math.floor(Math.random()*available.length)]

    letters.set(letter, true)

    return letter || false
}

async function broadcastToGroup( who, message ) {
    for (let [userId] of users) {
        let user = await Client.users.fetch(userId);
        let dmChannel = await user.createDM()

           dmChannel.send( `${who ? `**${who || "UNKNOWN"}**: ` : ""}${message}` ).catch()
       }
}
module.exports = {
    name: 'join',
    aliases: ['leave'],
    description: "Join an anonymous dm group with anyone else who is in it",
    async execute(Client, message, args, Discord, cmd){
        if (message.channel.type !== "dm") return message.reply("You must be in a DM to use this command");
        if (users.has(message.author.id)) return message.channel.send('You are already in one');
        if (cmd === "join") {
            if (users.has(message.author.id)) return; // user is already in
            if (users.size >= 10) return; // full
            
            let letter = getRandomLetter();
            if (!letter) return; // no letter available (bug!)
            users.set(message.author.id, letter)
            message.channel.send(`Joined dm group. You are user **${letter}**, there are currently **${users.size}** people in the group, use <leave to leave`)
            broadcastToGroup(undefined, `__**${letter}** has joined the group chat.__`)
        
        } else if (cmd === "leave") {
            if (!users.has(message.author.id)) return message.channel.send('You need to join first');
            let letter = users.get(message.author.id)
            message.channel.send('Leaving dm')
            freeLetter( letter )
            users.delete(message.author.id)
            broadcastToGroup(undefined, `__**${letter}** has left the group chat.__`)
        }
    }
}
//Mega help by jakey (If not pretty much all him)