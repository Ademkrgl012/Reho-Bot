module.exports = {
	kod: 'avatar',
	async run(client, message, args) {
		const { MessageEmbed } = require('discord.js');
		const embed = new MessageEmbed()
			.setTitle('Avatarınız Aşağıda')
			.setColor('RANDOM')
			.setImage(message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 1024}))
			.setFooter(`${message.author.tag}, Tarafından İstendi.`, message.author.avatarURL())
 message.channel.send(embed);
	}
}
