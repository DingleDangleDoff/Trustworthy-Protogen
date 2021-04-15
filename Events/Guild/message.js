module.exports = (Discord, Client, message) => {
    const Prefix = '<';
    if(!message.content.startsWith(Prefix) || message.author.bot) return;

    const args = message.content.slice(Prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = Client.commands.get(cmd) || Client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    try{
        command.execute(Client, message, args, Discord, cmd);
    } catch (err) {
        //message.reply('There was an error trying to execute the command');
        //console.log(err);
    }
     
}