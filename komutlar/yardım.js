const Discord = require("discord.js");

module.exports = {
  kod: "yardım",
async run(client, message, args){

    //Oyuncular Şehri - ArdaDemr;
    //Gerekli komutları sizin doldurmanız gerek

var page = 0;
 
let arr = [];
let emojiarr = message.guild.emojis.cache.array();
for(let i =0; Number(i + "0") < (Math.round(emojiarr.length/10)*10 +1); ++i) {
var on = emojiarr.slice(Number(i + "0"), Number(i + "0")+10)
arr.push(on.toString())
}

let embd = new Discord.MessageEmbed()
message.channel.send(embd
.setTitle('Rechard Bot Yardım Menüsü')
.setDescription(arr[0])
.setColor('RANDOM')
.setFooter(`Ana Menüye Dönmek İçin 🔄 Tepkisine Tıkla`, message.author.avatarURL())
.setDescription(`
<a:ok:842891116805226517> 👤|Kullanıcı Komutları»Kullanıcıların Kullanabileceği Komutları Gösterir!

<a:ok:842891116805226517> 🛠|Yetkili Komutları»Sadece Yetkililerin Kullanabileceği Komutları Gösterir!

<a:ok:842891116805226517>️ ⚙️|Ayarlamalı Komutlar»Sadece Yöneticilerin Kullanabileceği Komutları Gösterir

<a:ok:842891116805226517> 🎶|Müzik Komutları»Herkesin Kullanabileceği Müzik Komutlarını Gösterir!

<a:ok:842891116805226517> ⚔️|Eğlence Komutları»Herkesin Kullanabileceği Eğlence Komutlarını Gösterir
`)).then(async msg => {
      await msg.react("👤");
      await msg.react("🛠");
      await msg.react("⚙️");
      await msg.react("🎶");
      await msg.react("⚔️");
      await msg.react("🔄");
      let filter = (reaction, user) => user.id !== message.client.user.id && user.id === message.author.id;

      var collector = msg.createReactionCollector(filter, {
        time: 600000000
      });

      collector.on("collect", async (reaction, user) => {
        switch (reaction.emoji.name) {
          case "🔄":
            reaction.users.remove(user).catch(console.error);
            if (page == 0) return;
            --page

              embd.setColor("RANDOM");
              embd.setTitle('Rechard Bot Yardım Menüsü')
              embd.setFooter(`Ana Menüye Dönmek İçin 🔄 Tepkisine Tıkla`, message.author.avatarURL())
              embd.setDescription
              (`
<a:ok:842891116805226517> 👤|Kullanıcı Komutları»Kullanıcıların Kullanabileceği Komutları Gösterir!

<a:ok:842891116805226517> 🛠|Yetkili Komutları»Sadece Yetkililerin Kullanabileceği Komutları Gösterir!

<a:ok:842891116805226517> ⚙️|Ayarlamalı Komutlar»Sadece Yöneticilerin Kullanabileceği Komutları Gösterir!


🎶|Müzik Komutları»Herkesin Kullanabileceği Müzik Komutlarını Gösterir!

⚔️|Eğlence Komutları»Herkesin Kullanabileceği Eğlence Komutlarını Gösterir!
              `)
            msg.edit(embd)
           break;
          case "👤":
            if (page == arr.length) return;
            ++page
            reaction.users.remove(user).catch(console.error);
              embd.setTitle(`Rechard Bot Kullanıcı Komutları`)
              embd.setColor("RANDOM");
              embd.setDescription(`
> 👤|r!afk: Afk Olursunuz.

> 👤|r!avatar: Avatarınızı Gösterir.
              `)
            msg.edit(embd)
          break;
          case "🛠":
          if (page == arr.lenght) return;
            ++page
            reaction.users.remove(user).catch(console.error)
            embd.setTitle('Rechard Bot Yetkili Komutları')
            embd.setColor('RANDOM')
            embd.setDescription(`
🛠|Yetkili Komutları Bir Süre Boyunca Ekli Olmayacaktır Fakat Daha Sonra Eklenecektir`)
            msg.edit(embd)
            break;
            case "⚙️" :
            if (page == arr.lenght)
            return;
            ++page
            reaction.users.remove(user).catch(console.error)
            embd.setTitle('Rechard Bot Ayarlamalı Komutlar')
            embd.setColor('RANDOM')
            embd.setFooter(`Ana Menüye Dönmek İçin 🔄 Tepkisine Tıkla`, message.author.avatarURL())
            embd.setDescription(`
⚙️|r!sa-as: Oto sa-ası Ayarlarsınız

⚙️|r!prefix: Botun Prefixini Ayarlarsınız

⚙️|r!yetkili-etiket: Normal Üyelerin Yetkilileri Etiketlemesini Engellersiniz

⚙️|r!reklam-engel: Yönetici Yetkisine Sahip Olmayan Üyelerin Reklam Yapmasını Engellersiniz
`)
            msg.edit(embd)
            break;
            case "🎶":
            if (page == arr.lenght)
            return;
            ++page
            reaction.users.remove(user).catch(console.error)
            embd.setTitle('Rechard Bot Müzik Komutları')
            embd.setColor('RANDOM')
            embd.setDescription(`
🎶|r!oynat: İsmini Yazdığınız Şarkıyı Çalar

🎶|r!ayrıl: Botu Ses Kanalından Çıkartırsınız
            `)
            msg.edit(embd)
            break;
            case "⚔️" :
            if (page == arr.lenght)
            return;
            ++page
            reaction.users.remove(user).catch(console.error)
            embd.setTitle('Rechard Bot Eğlence Komutları')
            embd.setColor('RANDOM')
            embd.setDescription(`
⚔️|r!token: Botun Tokenini Öğrenirsiniz

⚔️|r!korona: Türkiyenin Korona Tablosunu Gösterir
            `)
            msg.edit(embd)
        }
      });
    })
}
}