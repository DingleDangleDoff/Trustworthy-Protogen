const Client = require("../index.js")
const moment = require("moment");
require("moment-duration-format");
const duration = moment.duration(Client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
module.exports = {
    name: 'uptime',
    description: "Shows bot uptime",
    execute(Client, message, args, Discord, cmd){
        message.channel.send(duration);
    }
}
//No worko