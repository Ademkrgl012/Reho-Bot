const db = require('quick.db');
const Discord = require('discord.js')
module.exports = {
  name: "otorol",
async run(client, message, args){
let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR"))return message.channel.send('Bu Komudu Kulllanmak İçin Gerekli `Yetkiye` Sahip Değilsin!')
if(!rol) return message.channel.send(`<:dikkat:823175456705609730>Lütfen rol etiketle`)
if(!kanal) return message.channel.send(`<:dikkat:823175456705609730>Lütfen kanal etiketle`)
db.set(`otorolrol_${message.guild.id}`, rol.id)
db.set(`otorolkanal_${message.guild.id}` ,kanal.id)
message.channel.send(`Otorol rolü **@${rol.name}** olarak, bildirimin gideceği kanal ise **#${kanal.name}** olarak ayarlandı.:+1: \n **Not: Botun Rolu en üste olmazsa Çalışmaz**`)
}
};