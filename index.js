const mySecret = process.env['token']
const Discord = require('discord.js') // discord.js modülü tanımlıyoruz.
const client = new Discord.Client();// client tanımalamsı
const { MessageEmbed } = ('discord.js')
const { readdirSync } = require('fs'); // tanımlamalar
const { join } = require('path'); // tanımlamalar
const express = require('express')
const db = require("wio.db")

const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
})
app.listen(process.env.PORT);
const log = message => {
  console.log(` ${message}`);
};

client.commands= new Discord.Collection(); // komutları alıyoruz

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); // Komutları Ayarlıyoruz.
}

client.on("error", console.error);

client.on("ready", async ready => {

console.log(`${client.user.tag}! Adlı Bot Aktif`);

var randomMesajlar = [

    "YAPIM AŞAMASINDA",
    "r!ping",
    "r!avatar",
    "r!oynat",
    "r!ayrıl",
    "Sahibim: △ Thé Adem#7586"
  ]



setInterval(function() {
    var randomMesajlar1 = randomMesajlar[Math.floor(Math.random() * (randomMesajlar.length))]
    client.user.setActivity(`${randomMesajlar1}`);

}, 2 * 2500);

  
client.user.setStatus("idle");
})
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
client.login(process.env.token)