const WolframAlphaAPI = require('wolfram-alpha-node');
const waApi = WolframAlphaAPI("YWPXT6-RGLG5G5LH6");
module.exports = {
    name: 'ask',
    description: "Ask any question and this command might answer it",
    async execute(Client, message, args, Discord, cmd){
        var question = args.join(" ")
        try{
            //console.log(await waApi.getFull(question))
            message.channel.send(await waApi.getShort(question))
        }catch(e){
            //console.log(e.message)
            message.channel.send('I did not understand what you where trying to say, try asking another question. ' + e.message)
        }
    }
}