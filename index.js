const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "whateveryouwant ";

client.once('ready',()=>{
    console.log('Mute ready!');
});
client.once('reconnecting', () => {
    console.log('Reconnecting!');
});
client.once('disconnect', () => {
    console.log('Disconnect!');
});
client.on('guildMemberSpeaking', async member=>{
    if (member.id === 'memberyouwanttomutesid'){
        console.log('member speaking');
        member.voice.setMute(true);
    }
});
client.on('message', async message=>{
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.content.startsWith(`${prefix}begin`)){
        console.log('starting the hell');
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel){
            return message.channel.send('no vc');
        }
        var connectzion = await voiceChannel.join();
    }
    if (message.content.startsWith(`${prefix}end`)){
        console.log('leaving');
        const voiceChannel = message.member.voice.channel;
        voiceChannel.leave();
    }
});
client.login('discordidgoeshere')