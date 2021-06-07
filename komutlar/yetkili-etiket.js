module.exports = {
  name: "yetkili-etiket",
  async run(client, message, args){
    const db = require('quick.db')
    if (!message.member.hasPermission("ADMINISTATOR")) return message.channel.send("Bu Komudu Kullanabilmek İçin Yetkin Yok")
    if (!args[0])return message.reply("Geçersiz Ayar Lütfen `aç` Ya Da `kapat` Yazınız")
    let ayar = args[0].toLowerCase()
    if (ayar === "aç"){
      db.set("yetkilietiket" + message.guild.id, true)
      message.channel.send("Yetkili Etiket Engel Başarıyla Açıldı")
    } else if (ayar === "kapat"){
      if (!db.has("yetkilietiket" + message.guild.id))
      message.channel.send("Yetkili Etiket Engel Kapatıldı")
    } else {
      message.reply("Geçersiz Ayar Lütfen `aç` Ya Da `kapat` Yazınız")
    }
    }
  }