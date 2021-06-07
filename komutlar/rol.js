const discord = require('discord.js')
const client = new discord.Client();
const button = require('discord-buttons')(client);
module.exports = {
  name: "rol",
  async run(client, message, args){

  let rol = message.mentions.roles.first()
  let mesaj = args.slice(1).join(' ');
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu Komudu Kullanabilmek İçin Gerekli `Yetkiye` Sahip Değilsin!')
  if (!rol) return message.channel.send('Bir Rol Etiketleyiniz')
  if (mesaj.length < 1 )return message.channel.send('Bir Mesaj Yazınız')
  let btn = new button.MessageButton()
    .setStyle('red')
    .setLabel('Tepkiye Tıkla')
    .setID('click_to_function')
  let btn2 = new button.MessageButton()
  .setStyle('green')
  .setLabel('Tepkiye Tıkla')
  .setID('click_to_function2')
    message.channel.send(`${mesaj}`, {buttons:[btn,btn2]})
    if (!button.id === 'click_to_function') {
button.clicker.member.roles.add({rol})
      button.channel.send('Başarı İle ${rol} Rolü Verildi')
    }if (!button.id === 'click_to_function2') {
       if (button.clicker.member.roles.cache.get({rol})) {
            button.clicker.member.roles.add({rol})
            button.think(true);
            button.reply.edit(`${rol} Rolü Üzerinize Verildi!`)
    }
    }
     }
      };