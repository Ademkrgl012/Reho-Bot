const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "prefix-sıfırla",
  async run(client, message, args){
    if (!message.member.hasPermission("ADMINISTATOR")) return message.channel.send("Bu Komudu Kullanabilmek İçin Yeterli Yetkiye Sahip Değilsin!")
    db.delete("PREFIX" + message.guild.id)
    const embed = new MessageEmbed()
    .setTitle("Başarıyla Prefix Sıfırlarndı")
    .setColor("RANDOM")
    .setDescription("Başarıyla Prefix'iniz Sıfırlandı. Yeni Prefix'iniz **r!**")
    .setFooter("Prefix Değiştirmek İçin r!prefix Yazabilirsiniz")
    message.channel.send(embed)
  }
}