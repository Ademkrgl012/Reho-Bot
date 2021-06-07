const Discord = require('discord.js');
const db = require('quick.db')
module.exports = {
  kod: "capslock-engel",
async run(client, message, args){
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || "r!"
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Bu Komudu Kullanmak İçin Yeterli `Yetkiye` Sahip Değilsin!")
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`)
    message.channel.send(`Capslock engelleme sistemi, kapatıldı!`)
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'acik')
    message.channel.send(`Capslock engelleme sistemi, aktif!`)
  }
}
};