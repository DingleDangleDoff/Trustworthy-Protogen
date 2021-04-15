const math = require('mathjs');
module.exports = {
    name: 'math',
    description: "Does math",
    async execute(Client, message, args, Discord, cmd){
        if(!args[0]) return message.channel.send('Please provide a question');

        let ans;

        try {
            ans = math.evaluate(args.join(" "))
        } catch (err) {
            return message.channel.send('Please try another question')
        }
        
        message.channel.send(ans);
    }
}