const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
module.exports = {
  name: "reklam-engel",
  async run(client, message, args){
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komudu Kullanabilmek İçin `YÖNETİCİ` İznine Sahip Olmalısın!')
if (!args[0]) return message.channel.send('Lütfen `aç` Ya Da `kapat` Yazınız')
let ayar = args[0].toLowerCase()
if (ayar === 'aç'){
  db.set("reklam" + message.guild.id, "açık")
  ///////Açıldığında Embed
  const embed = new MessageEmbed()
  .setTitle('Reklam-Engel Ayarı Değiştirildi')
  .setDescription('Başarı İle Sunucunuzun `reklam-engel` Ayarı `Açıldı.`.')
  .setColor('RANDOM')
  message.channel.send(embed)
} else if (ayar === "kapat"){
  if (!db.fetch("reklam" + message.guild.id)) return message.reply('Reklam Engel Ayarı Bu Sunucuda Zaten Kapalı')
  db.delete("reklam" + message.guild.id)
  //////Kapatıldığındaki Embed
  .setTitle('Reklam-Engel Ayarı Değiştirildi')
  .setDescription('Başarı İle Sunucunuzun `reklam-engel` Ayarı `kapatıldı.`.')
  .setColor('RANDOM')
  message.channel.send(embed)
} else {
  message.reply('Geçersiz Ayar Lütfen `aç` Ya Da `kapat` Yazınız')
}
}
}