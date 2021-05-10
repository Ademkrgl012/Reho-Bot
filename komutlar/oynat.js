const player = require('discordjs-ytdl-advanced')
const { MessageEmbed } = require('discord.js')

module.exports = {
  

kod: "oynat",
async run (client, message, args){
  if(!message.member.voice.channel) return message.channel.send('Bir Sesli Kanala Gir')
  if (!args[0]) return message.channel.send('Lütfen Bir Şarkı İsmi Girin!')
  if (message.member.voice.channel){
    const connection = await message.member.voice.channel.join()
    const şarkı = await player(args.join(" "))
    şarkı.play(connection)
    const embed = new MessageEmbed()
    .addField("🎵 Şarkı Adı", `\n**${şarkı.title}**\n`)
    .setImage(şarkı.thumbnail)
    .addField("📀Şarkı Kanalı", `\n**${şarkı.channel}**\n`)
    .addField(":timer:Şarkı Süresi", `\n**${şarkı.time}**\n`)
    .setColor('RANDOM')
    message.channel.send(embed)
  }
}
}