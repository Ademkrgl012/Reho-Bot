const Discord = require("discord.js");
const db = require('quick.db')
module.exports = {
  kod: "yardım",
async run(client, message, args){

    //Oyuncular Şehri - ArdaDemr;
    //Gerekli komutları sizin doldurmanız gerek
 if(!message.guild){
   var prefix = "r!"
 }else if(db.has("prefix" + message.guild.id)){
  var prefix = db.fetch("prefix" + message.guild.id)
 }else{
   var prefix = "r!"
 }

var page = 0;
 
let arr = [];
let emojiarr = message.guild.emojis.cache.array();
for(let i =0; Number(i + "0") < (Math.round(emojiarr.length/10)*10 +1); ++i) {
var on = emojiarr.slice(Number(i + "0"), Number(i + "0")+10)
arr.push(on.toString())
}

let embd = new Discord.MessageEmbed()
message.channel.send(embd
.setTitle('**  » Rechard Bot**')
.setDescription(arr[0])
.setImage('https://cdn.discordapp.com/attachments/847971838633312276/849105429769355274/standard.gif')
.setColor('RANDOM')
.setFooter(`Ana Menüye Dönmek İçin 🔄 Tepkisine Tıkla`, message.author.avatarURL())
.setDescription(`
**» Bağlantılar**
**[Destek Sunucusu](https://discord.gg/jSUTTWrrqh)** **•** **[Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=849023095447748608&permissions=8&scope=bot)** **•**
Bir Komut Hakkında Detaylı __Yardım İçin__:
**${prefix}yardım**

> 👤|Kullanıcı Komutları»Kullanıcıların Kullanabileceği Komutları Gösterir

> 🛠|Yetkili Komutları»Sadece Yetkililerin Kullanabileceği Komutları Gösterir!

> ⚙️|Ayarlamalı Komutlar»Sadece Yöneticilerin Kullanabileceği Komutları Gösterir

> 🎶|Müzik Komutları»Herkesin Kullanabileceği Müzik Komutlarını Gösterir!

> ⚔️|Eğlence Komutları»Herkesin Kullanabileceği Eğlence Komutlarını Gösterir
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
              embd.setImage('https://cdn.discordapp.com/attachments/847971838633312276/849105429769355274/standard.gif')
              embd.setTitle('**  » Rechard Bot**')
              embd.setFooter(`Ana Menüye Dönmek İçin 🔄 Tepkisine Tıkla`, message.author.avatarURL())
              embd.setDescription
              (`
**» Bağlantılar**
**[Destek Sunucusu](https://discord.gg/jSUTTWrrqh)** **•** **[Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=849023095447748608&permissions=8&scope=bot)** **•**
Bir Komut Hakkında Detaylı __Yardım İçin__:
**${prefix}yardım**

> 👤|Kullanıcı Komutları»Kullanıcıların Kullanabileceği Komutları Gösterir!

> 🛠|Yetkili Komutları»Sadece Yetkililerin Kullanabileceği Komutları Gösterir!

> ⚙️|Ayarlamalı Komutlar»Sadece Yöneticilerin Kullanabileceği Komutları Gösterir!

> 🎶|Müzik Komutları»Herkesin Kullanabileceği Müzik Komutlarını Gösterir!

> ⚔️|Eğlence Komutları»Herkesin Kullanabileceği Eğlence Komutlarını Gösterir!
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
> 👤|${prefix}afk: Afk Olursunuz.

> 👤|${prefix}avatar: Avatarınızı Gösterir.
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
⚙️|${prefix}sa-as: Oto sa-ası Ayarlar.

⚙️|${prefix}prefix-ayarla: Botun Prefixini Ayarlar.

⚙️|${prefix}yetkili-etiket: Üyelerin Yetkilileri Etiketlemesini Engeller

⚙️|${prefix}reklam-engel: Yönetici Yetkisine Sahip Olmayan Üyelerin Reklam Yapmasını Engeller.

⚙️|${prefix}gç-ayarla: Resimli Giriş Çıkışı Ayarlar.

⚙️|${prefix}gç-sıfırla: Resimli Giriş Çıkışı Kapatır.

⚙️|${prefix}capslock-engel: Üyelerin Büyük Harf Kullanmasını Engeller.
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
🎶|${prefix}çal: İsmini Yazdığınız Şarkıyı Çalar.

🎶|${prefix}durdur: Çalınan Şarkıyı Durdurur.

🎶|${prefix}devam: Durdurulan Şarkıyı Devam Ettirir.

🎶|${prefix}atla: Çalınan Şarkıyı Geçer.

🎶|${prefix}kuyruk: Şarkı Kuyruğunu Gösterir.

🎶|${prefix}np: Çalınan Şarkıyı Gösterir.

🎶|${prefix}ayrıl: Botu Ses Kanalından Çıkartırsınız.
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
⚔️|${prefix}token: Botun Tokenini Öğrenirsiniz

⚔️|${prefix}korona: Türkiyenin Korona Tablosunu Gösterir
            `)
            msg.edit(embd)
        }
      });
})
}}