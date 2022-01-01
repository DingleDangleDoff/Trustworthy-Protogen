const {MessageEmbed, MessageActionRow, MessageSelectMenu} = require('discord.js');
module.exports = {
    name: 'lgame',
    description: "L Game with 2 people",
    async execute(Client, message, args, Discord, cmd){
        if (message.guild === null) {colour = '#000000'} else {colour = message.guild.me.displayColor}
        const embed = new MessageEmbed()
        .setTitle(`User's Turn`)
        .setDescription("(Red)")
        .setAuthor("L Game", "https://cdn.discordapp.com/attachments/607359984426156032/924690034366509106/IMG_3115.jpg")
        .setThumbnail('https://cdn.discordapp.com/attachments/818144776758231060/925703835161350164/unknown.png')
        .setColor(colour)
        .addField('Board', `🇩🟢⬛⬛⬛\n🇨🟥🟦🟦🟦\n🇧🟥🟥🟥🟦\n🇦⬛⬛⬛🟣\n*️⃣1️⃣2️⃣3️⃣4️⃣`, false)
        .setFooter(`Choose an orientation, Then location (Using corner of L as move point), Then move a white peice (To keep one where it is just "move" it to the position its already in`)

        const LROT = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('Custom-Id')
					.setPlaceholder('Placeholder')
					.addOptions([
						{
							label: 'Lable',
							description: 'Description',
							value: 'value',
						},
						{
							label: 'Other lable',
							description: 'This is also a description',
							value: 'another-value',
						},
					]),
			);
        
        message.channel.send({ content: "Test", components: [LROT] });
    }
}