const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports = {
  name: "say",
async run(client, message, args){

if(!["31D"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "842501693542498344";
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `<a:bot_0:839407432278081567>`,
'1': `<a:bot_1:839406879276531733>`,
'2': `<a:bot_2:839408057410650153>`,
'3': `<a:bot_3:839407871677825084>`,
'4': `<a:bot_4:839407356433793064>`,                       
'5': `<a:bot_5:839407248647913474>`,
'6': `<a:bot_6:839407022885306438>`,
'7': `<a:bot_7:839406984398241802>`,
'8': `<a:bot_8:839407740383658004>`,
'9': `<a:bot_9:839408146966511626>`}[d];})}
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
'0': `<a:bot_0:839407432278081567>`,
'1': `<a:bot_1:839406879276531733>`,
'2': `<a:bot_2:839408057410650153>`,
'3': `<a:bot_3:839407871677825084>`,
'4': `<a:bot_4:839407356433793064>`,                       
'5': `<a:bot_5:839407248647913474>`,
'6': `<a:bot_6:839407022885306438>`,
'7': `<a:bot_7:839406984398241802>`,
'8': `<a:bot_8:839407740383658004>`,
'9': `<a:bot_9:839408146966511626>`}[d];})}

var taglılar = 0;
let tag = "✧";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
'0': `<a:bot_0:839407432278081567>`,
'1': `<a:bot_1:839406879276531733>`,
'2': `<a:bot_2:839408057410650153>`,
'3': `<a:bot_3:839407871677825084>`,
'4': `<a:bot_4:839407356433793064>`,                       
'5': `<a:bot_5:839407248647913474>`,
'6': `<a:bot_6:839407022885306438>`,
'7': `<a:bot_7:839406984398241802>`,
'8': `<a:bot_8:839407740383658004>`,
'9': `<a:bot_9:839408146966511626>`}[d];})}

  
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
'0': `<a:bot_0:839407432278081567>`,
'1': `<a:bot_1:839406879276531733>`,
'2': `<a:bot_2:839408057410650153>`,
'3': `<a:bot_3:839407871677825084>`,
'4': `<a:bot_4:839407356433793064>`,                       
'5': `<a:bot_5:839407248647913474>`,
'6': `<a:bot_6:839407022885306438>`,
'7': `<a:bot_7:839406984398241802>`,
'8': `<a:bot_8:839407740383658004>`,
'9': `<a:bot_9:839408146966511626>`}[d];})}
  
  
  
var booster = message.guild.roles.cache.get("788071006728093706").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
'0': `<a:bot_0:839407432278081567>`,
'1': `<a:bot_1:839406879276531733>`,
'2': `<a:bot_2:839408057410650153>`,
'3': `<a:bot_3:839407871677825084>`,
'4': `<a:bot_4:839407356433793064>`,                       
'5': `<a:bot_5:839407248647913474>`,
'6': `<a:bot_6:839407022885306438>`,
'7': `<a:bot_7:839406984398241802>`,
'8': `<a:bot_8:839407740383658004>`,
'9': `<a:bot_9:839408146966511626>`}[d];})}

  var erk = message.guild.roles.cache.get("842866306029846529").members.size
var erk = erk.toString().replace(/ /g, "    ")
var üs6 = erk.match(/([0-9])/g)
erk = erk.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs6) {
erk = erk.replace(/([0-9])/g, d => {
return {
'0': `<a:bot_0:839407432278081567>`,
'1': `<a:bot_1:839406879276531733>`,
'2': `<a:bot_2:839408057410650153>`,
'3': `<a:bot_3:839407871677825084>`,
'4': `<a:bot_4:839407356433793064>`,                       
'5': `<a:bot_5:839407248647913474>`,
'6': `<a:bot_6:839407022885306438>`,
'7': `<a:bot_7:839406984398241802>`,
'8': `<a:bot_8:839407740383658004>`,
'9': `<a:bot_9:839408146966511626>`}[d];})}
  
  var karı = message.guild.roles.cache.get("846794137050939433").members.size
var karı = karı.toString().replace(/ /g, "    ")
var üs7 = karı.match(/([0-9])/g)
karı = karı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs7) {
karı = karı.replace(/([0-9])/g, d => {
return {
'0': `<a:bot_0:839407432278081567>`,
'1': `<a:bot_1:839406879276531733>`,
'2': `<a:bot_2:839408057410650153>`,
'3': `<a:bot_3:839407871677825084>`,
'4': `<a:bot_4:839407356433793064>`,                       
'5': `<a:bot_5:839407248647913474>`,
'6': `<a:bot_6:839407022885306438>`,
'7': `<a:bot_7:839406984398241802>`,
'8': `<a:bot_8:839407740383658004>`,
'9': `<a:bot_9:839408146966511626>`}[d];})}

  
const embed1 = new Discord.MessageEmbed()
.setColor('0x0088ff')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
**Sunucuda Toplam** ${üyesayısı} **Üye Bulunmakta.** 
**Sunucuda Toplam** ${cevirimici} **Üye Çevrimiçi Bulunuyor.** 
**Ses Kanallarında** ${sessayı} **Üye Sohbet Ediyor.**
**Tagımızda Toplam ** ${taglılar} **Üye Bulunmakta.**
**Sunucuda Toplam ${booster} Booster Üye Bulunmakta.**
**Sunucuda Toplam ${erk} Erkek Üye Bulunmakta.**
**Sunucuda Toplam ${karı} Kız Üye Bulunmakta.**`)



msg.channel.send(embed1);
  
  }
};