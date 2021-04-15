const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const {MessageEmbed} = require('discord.js');

const queue = new Map();

module.exports = {
    name: 'play',
    aliases: ['skip', 'stop', 'p'],
    description: 'Plays music in your voice channel',
    async execute(Client, message, args, Discord, cmd){


        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send('You need to join a voice channel first!');
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You do not have permission');
        if (!permissions.has('SPEAK')) return message.channel.send('You do not have permission');

        const server_queue = queue.get(message.guild.id);

        if (cmd === 'play' || cmd ==='p'){
            if (!args.length) return message.channel.send('What do i play?');
            let song = {};

            if (ytdl.validateURL(args[0])) {
                const song_info = await ytdl.getInfo(args[0]);
                song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url, channelName: song_info.videoDetails.ownerChannelName, channel: song_info.videoDetails.ownerProfileUrl, length: song_info.videoDetails.lengthSeconds }
                //console.log(song)//---------------------------------------------
            } else {
                const video_finder = async (query) =>{
                    const video_result = await ytSearch(query);
                    return (video_result.videos.length > 1) ? video_result.videos[0] : null;
                }

                const video = await video_finder(args.join(' '));
                console.log(video)
                if (video){
                    song = { title: video.title, url: video.url }
                } else {
                     message.channel.send('Error finding video.');
                }
            }

            if (!server_queue){

                const queue_constructor = {
                    voice_channel: voice_channel,
                    text_channel: message.channel,
                    connection: null,
                    songs: []
                }
                
                queue.set(message.guild.id, queue_constructor);
                queue_constructor.songs.push(song);
    
                try {
                    const connection = await voice_channel.join();
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.songs[0]);
                } catch (err) {
                    queue.delete(message.guild.id);
                    message.channel.send('There was an error connecting');
                    throw err;
                }
            } else{
                server_queue.songs.push(song);
                var id = song.url.replace('https://www.youtube.com/watch?v=', '');
                var minutes = Math.floor(song.length/60)
                var seconds = Math.floor((song.length/60-minutes)*60)
                const embed = new MessageEmbed() //---------------------------------------------------------------------------------------
                    .setTitle(song.title)
                    .setURL(song.url)
                    .setAuthor("Added to queue", "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/395_Youtube_logo-512.png", "https://www.youtube.com/")
                    .setThumbnail(`https://img.youtube.com/vi/${id}/0.jpg`)
                    .addFields(
                        {name: 'Video Length', value: minutes + ':' + seconds, inline: true},
                        {name: 'Time until playing', value: 'Place:Holder', inline: true},
                        {name: 'Channel', value: song.channelName, inline: true},
                    )
                    .setColor('#ff0000')
                    .setTimestamp();
                return message.channel.send(embed); //------------------------------------------------------------------------------------
            }
        }

        else if(cmd === 'skip') skip_song(message, server_queue);
        else if(cmd === 'stop') stop_song(message, server_queue);
    }
    
}

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);

    if (!song) {
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 1 })
    .on('finish', () => {
        song_queue.songs.shift();
        video_player(guild, song_queue.songs[0]);
    });
    var id = song.url.replace('https://www.youtube.com/watch?v=', '');
    var minutes = Math.floor(song.length/60)
    var seconds = Math.floor((song.length/60-minutes)*60)
    const embed = new MessageEmbed() //---------------------------------------------------------------------------------------------------
        .setTitle(song.title)
         .setURL(song.url)
         .setAuthor("Now playing", "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/395_Youtube_logo-512.png", "https://www.youtube.com/")
        .setThumbnail(`https://img.youtube.com/vi/${id}/0.jpg`)
        .addFields(
             {name: 'Video Length', value: minutes + ':' + seconds, inline: true},
             {name: 'Channel', value: song.channelName, inline: true},
         )
          .setColor('#ff0000')
          .setTimestamp();
    await song_queue.text_channel.send(embed) //-------------------------------------------------------------------------------------------
}

const skip_song = (message, server_queue) => {
    if (!message.member.voice.channel) return message.channel.send('You are not in a voice channel');
    if(!server_queue){
        return message.channel.send(`There are no songs in queue`);
    }
    server_queue.connection.dispatcher.end();
}

const stop_song = (message, server_queue) => {
    if (!message.member.voice.channel) return message.channel.send('You are not in a voice channel');
    if (message.member.voice.channel) return message.channel.send('Stopping song');
    server_queue.songs = [];
    server_queue.connection.dispatcher.end();
}