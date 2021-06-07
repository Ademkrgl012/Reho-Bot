const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "sa-as",
  async run(client, message, args){
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Bu Komudu Kullanabilmek İçin `Mesajları Yönet` Yetkisine Sahip Olmalısın!')
    if (!args[0]) return message.channel.send('Lütfen `aç` Ya Da `kapat` Yazınız')
    let ayar = args[0].toLowerCase()
    if (ayar === "aç"){
      db.set("sa" + message.guild.id, "açık")
      const embed = new MessageEmbed()
      .setTitle("Sa-As Ayarı Değiştirildi")
      .setDescription("Başarıyla Sunucunuzun `sa-as` Ayarı `Açıldı.`.")
      .setColor("RANDOM")
      message.channel.send(embed)
    } else if (ayar === "kapat"){
     if (!db.fetch("sa" + message.guild.id)) return message.reply("Sa-As Ayarı Bu Sunucuda Zaten Kapalı")
     db.delete("sa" + message.guild.id)
     const embed = new MessageEmbed()
     .setTitle("Sa-As Ayarı Değiştirildi")
     .setDescription("Başarıyla Sunucunuzun `sa-as` Ayarı `kapatıldı.`.")
     .setColor("RANDOM")
     message.channel.send(embed)
    } else {
      message.reply("Geçersiz Ayar Lütfen `aç` Veya `kapat` Yazınız.")
    }
  }
}