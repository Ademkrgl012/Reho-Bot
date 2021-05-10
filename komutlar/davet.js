const { MessageEmbed } = require('discord.js')
module.exports = {
  kod: "davet",
  async run (client, message, args){
  const embed = new MessageEmbed()
  .setTitle("Davet Linkleri Altta Belirtilmiştir")
  .setColor("RANDOM")
    .addField("» **Sahibim**", "<@!564837933912293386>")
    .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/uXbFquhR2G)", )
    .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=811648533115306034&permissions=8&scope=bot)",)
    .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
    message.channel.send(embed)
}
}