const Discord = require('discord.js') // discord.js modülü tanımlıyoruz.
const client = new Discord.Client();// client tanımalamsı
const { MessageEmbed } = ('discord.js')
const { readdirSync } = require('fs'); // tanımlamalar
const { join } = require('path'); // tanımlamalar
const express = require('express')
const db = require("wio.db")
const data = require("quick.db")
const keep_alive = require('./keep_alive.js')
const fs = require("fs");
client.commands= new Discord.Collection(); // komutları alıyoruz

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); // Komutları Ayarlıyoruz.
}
///////rechard sohbet
client.on("message", message => {
  if (!message.guild)return;
  if (
    message.content.toLowerCase() === "rechard nasılsın" || message.content.toLowerCase() === "rechard merhaba nasılsın"||
    message.content.toLowerCase() === "@Rechard#4560 nasılsın"||
    message.content.toLowerCase() === "<@!811648533115306034> merhaba nasılsın")
    message.channel.send('İyi Sen?')
})
///////sa-as//////
client.on("message", message => {
  if (!message.guild) return;
  if (!db.has("sa" + message.guild.id)) return;
  if (
    message.content.toLowerCase() === "sa" ||
    message.content.toLowerCase() === "sea" ||
    message.content.toLowerCase() === "selamın aleyküm" ||
    message.content.toLowerCase() === "selamun aleyküm" ||
    message.content.toLowerCase() === "s.a." ||
    message.content.toLowerCase() === "s.a" ||
    message.content.toLowerCase() === "s a" ||
    message.content.toLowerCase() === "selam"){
  message.channel.send("**Aleyküm Selam**, Nasılsın?")
    }
})
///////reklam-engel//////
client.on("message", message => {
  if (!message.guild) return;
  if (
  message.content.toLowerCase().includes === "discord.app"|| 
  message.content.toLowerCase().includes === "discord.gg"||
  message.content.toLowerCase().includes === "discordapp"||
 message.content.toLowerCase().includes === "discordgg"||
 message.content.toLowerCase().includes === ".com"||
 message.content.toLowerCase().includes === ".net"||
 message.content.toLowerCase().includes === ".xyz"|| 
 message.content.toLowerCase().includes === ".tk" || 
 message.content.toLowerCase().includes === ".pw"|| 
 message.content.toLowerCase().includes === ".io"||
 message.content.toLowerCase().includes === ".me"|| 
 message.content.toLowerCase().includes === ".gg"||
 message.content.toLowerCase().includes === "www."||
 message.content.toLowerCase().includes === "https"||
 message.content.toLowerCase().includes === "http"||
 message.content.toLowerCase().includes === ".gl"||
 message.content.toLowerCase().includes === ".org"||
 message.content.toLowerCase().includes === ".com.tr"||
 message.content.toLowerCase().includes === ".biz"||
 message.content.toLowerCase().includes === ".party"||
 message.content.toLowerCase().includes === ".rf.gd"||
 message.content.toLowerCase().includes === ".az"){
  if (!db.has("reklam" + message.guild.id)) return;
  if (!message.member.hasPermission("ADMINISTRATOR")){
    message.delete()
    message.reply('Bu Sunucuda Reklam Yapmana İzin Vermiyorum Devam Edersen Cezalandırılacaksın')
  }
}
})
////////yetkili-etiket/////
client.on("message", message => {
  if (!message.guild) return;
  if (message.member.hasPermission("ADMINISTRATOR")) return;
  const etiketler = [...message.mentions.members]
  if (etiketler < 1) return;
  if (!db.has("yetkilietiket" + message.guild.id)) return;
  etiketler.forEach(user => {
    const member = message.guild.members.cache.get(user[0])
    if (member.hasPermission("ADMINISTRATOR")){
    message.delete()
    message.reply("Bu Sunucuda Yetkilileri Etiketleyemezsin Devam Edersen Cezalandırılacaksın")
    }
  })
});
///////otorol////
client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
  let otorole =  JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
      let arole = otorole[member.guild.id].sayi
  let giriscikis = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));  
  let embed = new Discord.MessageEmbed()
    .setTitle('Otorol Sistemi')
    .setDescription(`:loudspeaker: :inbox_tray:  @${member.user.tag}'a Otorol Verildi `)
.setColor("GREEN")
    .setFooter("XiR", client.user.avatarURL());

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.cache.get(member.guild.id).channels.cache.get(giriscikiskanalID);
    giriscikiskanali.send(`<a:sc_pembetik:825706830075658250>Hoşgeldin @${member} Rolün Başarıyla Verildi.`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }

});
//Kullanıcı sunucudan ayrıldığında ayarlanan kanala mesaj gönderelim.
client.on("guildMemberAdd", async (member) => {
      let autorole =  JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
      let role = autorole[member.guild.id].sayi

      member.roles.add(role)




});
//XiR
/////////
client.on("message", async message => {

    if(message.author.bot) return;
    if (!message.guild){
      var prefix = "r!"
    }else if (db.has("prefix" + message.guild.id)){
      var prefix = db.fetch("prefix" + message.guild.id)
    } else {
      var prefix = "r!"
    }
    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();
         if(!client.commands.has(command)) return message.channel.send(`Komut dosyamda **${command}** adlı bir komut bulamadım.`);


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
});
//////değişen oynuyor
client.on("ready", async ready => {

console.log(`${client.user.tag}! Adlı Bot Aktif`);

var randomMesajlar = [

    "YAPIM AŞAMASINDA",
    "r!yardım",
    "Sahibim: Adem BUT Yalnız Olan#1881"
  ]



setInterval(function() {
    var randomMesajlar1 = randomMesajlar[Math.floor(Math.random() * (randomMesajlar.length))]
    client.user.setActivity(`${randomMesajlar1}`);

}, 2 * 2500);

client.user.setStatus("dnd");
});
///////////////Afk/////
client.on("message", async (message) => {

    if (message.channel.type == "dm") return false;

    let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "r!";

    let kullanıcı = message.mentions.users.first() || message.author;
    let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`);
    let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`);
    let sebep = afkkullanıcı;

    if (message.author.bot) return;
    if (message.content.includes(`${prefix}afk`)) return;

    if (message.content.includes(`<@!${kullanıcı.id}>`)) {
      if (afkdkullanıcı) {
        message.channel.send(
          `\`${message.author.tag}\` adlı kullanıcı artık AFK değil.`
        );
        db.delete(`afk_${message.author.id}`);
      }
      if (afkkullanıcı)
        return message.channel.send(
          `${message.author}\`${kullanıcı.tag}\` şu anda AFK. Sebep : \`${sebep}\``
        );
    }

    if (!message.content.includes(`<@!${kullanıcı.id}>`)) {
      if (afkdkullanıcı) {
        let rMember = message.guild.members.cache.get(message.author.id);
        var nic = db.get(`${message.author.id}nick`);
        var nick = nic;
        rMember.setNickname(nick);
        message.reply(` adlı kullanıcı artık AFK değil.`);
        db.delete(`afk_${message.author.id}`);
      }
    }
  });
//////////buton
const disbut = require('discord-buttons')(client);

client.on('message', async (message) => {
    if (message.content.startsWith('!buton')) {
        let button = new disbut.MessageButton()
        .setStyle('red')
        .setLabel('Hayır')
        .setID('click_to_function') 

        let button2 = new disbut.MessageButton()
        .setStyle('green')
        .setLabel('Evet') 
        .setID('click_to_function2') 
        

        message.channel.send('Adem Reyzz Youtube Kanalına Abone Misin?', {
            buttons:[
                button,button2
            ]
        });
    };
});

client.on('clickButton', async (button) => {
  if (button.id === 'click_to_function') {
    button.channel.send(`${button.clicker.member} Aaaa ne ka ayıp ne ka ayıp :( Küstüm`);
  }
    if (button.id === 'click_to_function2') {
    button.channel.send(`${button.clicker.member} Teşekkürler adamsın :=)`);
  }
});

//////////bewk youtube Kanalın
client.on('message', async (message) => {
    if (message.content.toLowerCase() === 'berkay') {
        let button = new disbut.MessageButton()
        .setStyle('red')
        .setLabel('Hayır')
        .setID('click_to_function') 

        let button2 = new disbut.MessageButton()
        .setStyle('green')
        .setLabel('Evet') 
        .setID('click_to_function2') 
        

        message.channel.send('Berkay Altok Youtube Kanalına Abone Misin?', {
            buttons:[
                button,button2
            ]
        });
    };
});

client.on('clickButton', async (button) => {
  if (button.id === 'click_to_function') {
    button.channel.send(`${button.clicker.member} Aaaa ne ka ayıp ne ka ayıp :( Küstüm`);
  }
    if (button.id === 'click_to_function2') {
    button.channel.send(`${button.clicker.member} Teşekkürler adamsın :=)`);
  }
});

//////////tag alana role
client.on("userUpdate", async(old, nev) => {
if(old.username !== nev.username) {
if(!nev.username.includes("𐘎") && client.guilds.cache.get("848173657745653810").members.get(nev.id).roles.cache.has("848173657745653810")) {
client.guilds.cache.get("848173657745653810").members.get(nev.id).removeRole("848173657745653810")
client.channels.get("846418964724580392").send('**${ nev}, "tagınızı yazın" tagını çıkardığı için `GÖREVLİLER` tarafından <@&848173657745653810> rolü alındı!**')
}
if(nev.username.includes("𐘎") && !client.guilds.cache.get("848173657745653810").members.get(nev.id).roles.has("848173657745653810")) {
client.channels.get("846418964724580392").send('**${nev},"𐘎"tagını aldığı için Oyun Elitleri tarafından <@&848173657745653810> rolü verildi!**')
client.guilds.cache.get("848173657745653810").members.get(nev.id).addRole("848173657745653810")
}
}
})
//////////
client.login("ODExNjQ4NTMzMTE1MzA2MDM0.YC1QmQ.1mYTxJeWC48OyGwG-VMEfsz9aow");