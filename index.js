const Discord = require('discord.js'); // discord.js modülü tanımlıyoruz.
const client = new Discord.Client();
const { readdirSync } = require('fs');
const { join } = require('path');
const { MessageEmbed } = 'discord.js';
const express = require('express');
const db = require('quick.db');
const fs = require('fs');
client.commands = new Discord.Collection(); // komutları alıyoruz
const commandFiles = readdirSync(join(__dirname, 'komutlar')).filter(file =>
	file.endsWith('.js')
); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.
for (const file of commandFiles) {
	const command = require(join(__dirname, 'komutlar', `${file}`));
	client.commands.set(command.kod, command); // Komutları Ayarlıyoruz.
}
////////
client.on('ready', async ready => {
	console.log(`${client.user.tag} Adlı Botum Aktif`);

	var randomMesajlar = [
		'YAPIM AŞAMASINDA',
		'r!yardım',
		'r!davet',
		'Sahibim: Adem BUT Yalnız Olan#1881'
	];
	setInterval(function() {
		var randomMesajlar1 =
			randomMesajlar[Math.floor(Math.random() * randomMesajlar.length)];
		client.user.setActivity(`${randomMesajlar1}`);
	}, 2 * 2500);

	client.user.setStatus('idle');
});

/////////KOMUTLAR;

///////CANVASLI-GİRIŞ-ÇIKIŞ
client.on('guildMemberRemove', async member => {
	//let resimkanal = JSON.parse(fs.readFileSync("./ayarlar/gç.json", "utf8"));
	//const canvaskanal = member.guild.channels.cache.get(resimkanal[member.guild.id].resim);
	if (db.has(`gçkanal_${member.guild.id}`) === false) return;
	var canvaskanal = member.guild.channels.cache.get(
		db.fetch(`gçkanal_${member.guild.id}`)
	);
	if (!canvaskanal) return;

	const request = require('node-superfetch');
	const Canvas = require('canvas'),
		Image = Canvas.Image,
		Font = Canvas.Font,
		path = require('path');

	var randomMsg = ['Sunucudan Ayrıldı😪'];
	var randomMsg_integer =
		randomMsg[Math.floor(Math.random() * randomMsg.length)];

	let msj = await db.fetch(`cikisM_${member.guild.id}`);
	if (!msj) msj = `{uye}, ${randomMsg_integer}`;

	const canvas = Canvas.createCanvas(960, 422);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage(
		'https://cdn.discordapp.com/attachments/847971841787691068/848937892579115028/PicsArt_05-31-05.54.36.jpg'
	);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = `#D3D3D3`;
	ctx.font = `37px "Warsaw"`;
	ctx.textAlign = 'center';

	let avatarURL = member.user.displayAvatarURL({
		format: 'png',
		dynamic: true,
		size: 1024
	});
	const { body } = await request.get(avatarURL);
	const avatar = await Canvas.loadImage(body);

	ctx.beginPath();
	ctx.lineWidth = 4;
	ctx.fill();
	ctx.lineWidth = 4;
	ctx.arc(485, 145, 100, 0, Math.PI * 2, true);
	ctx.clip();
	ctx.drawImage(avatar, 385, 45, 200, 200);

	const attachment = new Discord.MessageAttachment(
		canvas.toBuffer(),
		'Rechard Bot-Güle-Güle.png'
	);

	canvaskanal.send(
		msj.replace('{uye}', member).replace('{sunucu}', member.guild.name),
		attachment
	);
	if (member.user.bot)
		return canvaskanal.send(`${member.user.tag}, Adlı Bot Sunucudan Ayrıldı`);
});

client.on('guildMemberAdd', async member => {
	if (db.has(`gçkanal_${member.guild.id}`) === false) return;
	var canvaskanal = member.guild.channels.cache.get(
		db.fetch(`gçkanal_${member.guild.id}`)
	);

	if (!canvaskanal || canvaskanal === undefined) return;
	const request = require('node-superfetch');
	const Canvas = require('canvas'),
		Image = Canvas.Image,
		Font = Canvas.Font,
		path = require('path');

	var randomMsg = [`Sunucuya Katıldı😃`];
	var randomMsg_integer =
		randomMsg[Math.floor(Math.random() * randomMsg.length)];

	let paket = await db.fetch(`pakets_${member.id}`);
	let msj = await db.fetch(`cikisM_${member.guild.id}`);
	if (!msj) msj = `{uye}, ${randomMsg_integer}`;
	const canvas = Canvas.createCanvas(960, 422);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage(
		'https://cdn.discordapp.com/attachments/847971841787691068/848937892307009536/PicsArt_05-31-05.53.56.jpg'
	);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = `#ffffff`;
	ctx.font = `37px "Warsaw"`;
	ctx.textAlign = 'center';

	let avatarURL = member.user.displayAvatarURL({
		format: 'png',
		dynamic: true,
		size: 1024
	});
	const { body } = await request.get(avatarURL);
	const avatar = await Canvas.loadImage(body);

	ctx.beginPath();
	ctx.lineWidth = 4;
	ctx.fill();
	ctx.lineWidth = 4;
	ctx.arc(485, 145, 100, 0, Math.PI * 2, true);
	ctx.clip();
	ctx.drawImage(avatar, 385, 45, 200, 200);

	const attachment = new Discord.MessageAttachment(
		canvas.toBuffer(),
		'Rechard Bot-Hosgeldin.png'
	);

	canvaskanal.send(
		msj.replace('{uye}', member).replace('{sunucu}', member.guild.name),
		attachment
	);
	if (member.user.bot)
		return canvaskanal.send(` ${member.user.tag}, Adlı Bot Sunucuya Katıldı!`);
});
///////sa-as//////
client.on('message', message => {
	if (!message.guild) return;
	if (!db.has('sa' + message.guild.id)) return;
	if (
		message.content.toLowerCase() === 'sa' ||
		message.content.toLowerCase() === 'sea' ||
		message.content.toLowerCase() === 'selamın aleyküm' ||
		message.content.toLowerCase() === 'selamun aleyküm' ||
		message.content.toLowerCase() === 's.a.' ||
		message.content.toLowerCase() === 's.a' ||
		message.content.toLowerCase() === 's a' ||
		message.content.toLowerCase() === 'selam'
	) {
		message.channel.send('**Aleyküm Selam**, Nasılsın?');
	}
});
///////reklam-engel//////
client.on('message', message => {
	if (!message.guild) return;
	if (
		message.content.toLowerCase().includes === 'discord.app' ||
		message.content.toLowerCase().includes === 'discord.gg' ||
		message.content.toLowerCase().includes === 'discordapp' ||
		message.content.toLowerCase().includes === 'discordgg' ||
		message.content.toLowerCase().includes === '.com' ||
		message.content.toLowerCase().includes === '.net' ||
		message.content.toLowerCase().includes === '.xyz' ||
		message.content.toLowerCase().includes === '.tk' ||
		message.content.toLowerCase().includes === '.pw' ||
		message.content.toLowerCase().includes === '.io' ||
		message.content.toLowerCase().includes === '.me' ||
		message.content.toLowerCase().includes === '.gg' ||
		message.content.toLowerCase().includes === 'www.' ||
		message.content.toLowerCase().includes === 'https' ||
		message.content.toLowerCase().includes === 'http' ||
		message.content.toLowerCase().includes === '.gl' ||
		message.content.toLowerCase().includes === '.org' ||
		message.content.toLowerCase().includes === '.com.tr' ||
		message.content.toLowerCase().includes === '.biz' ||
		message.content.toLowerCase().includes === '.party' ||
		message.content.toLowerCase().includes === '.rf.gd' ||
		message.content.toLowerCase().includes === '.az'
	) {
		if (!db.has('reklam' + message.guild.id))
			if (!message.member.hasPermission('ADMINISTRATOR')) {
				message.delete();
				message.reply(
					'Bu Sunucuda Reklam Yapmana İzin Vermiyorum Devam Edersen Cezalandırılacaksın'
				);
			}
	}
});
////////yetkili-etiket/////
client.on('message', message => {
	if (!message.guild) return;
	if (message.member.hasPermission('ADMINISTRATOR')) return;
	const etiketler = [...message.mentions.members];
	if (etiketler < 1) return;
	if (!db.has('yetkilietiket' + message.guild.id)) return;
	etiketler.forEach(user => {
		const member = message.guild.members.cache.get(user[0]);
		if (member.hasPermission('ADMINISTRATOR')) {
			message.delete();
			message.reply(
				'Bu Sunucuda Yetkilileri Etiketleyemezsin Devam Edersen Cezalandırılacaksın'
			);
		}
	});
});
////////otorol
client.on('guildMemberAdd', async member => {
	let kanal1 = await db.fetch(`otorolkanal_${member.guild.id}`);
	let rol1 = await db.fetch(`otorolrol_${member.guild.id}`);
	let kanal = member.guild.channels.cache.get(kanal1);
	let rol = member.guild.roles.cache.get(rol1);
	if (!kanal) return;
	if (!rol) return;
	kanal.send(
		`${member} adlı kullanıcıya başarıyla **@${rol.name}** rolü verildi.:+1:`
	);
	member.roles.add(rol);
});
//////capslock
client.on('message', async msg => {
	if (msg.channel.type === 'dm') return;
	if (msg.author.bot) return;
	if (msg.content.length > 4) {
		if (db.fetch(`capslock_${msg.guild.id}`)) {
			let caps = msg.content.toUpperCase();
			if (msg.content == caps) {
				if (!msg.member.hasPermission('ADMINISTRATOR')) {
					if (!msg.mentions.users.first()) {
						msg.delete();
						return msg.channel
							.send(
								`✋ ${
									msg.author
								}, Bu sunucuda, büyük harf kullanımı engellenmekte!`
							)
							.then(m => m.delete(5000));
					}
				}
			}
		}
	}
});
/////////
client.on('message', async message => {
	if (message.author.bot) return;
	if (!message.guild) {
		const PREFIX = 'r!';
	} else if (db.has('PREFIX' + message.guild.id)) {
		var PREFIX = db.fetch('PREFIX' + message.guild.id);
	} else {
		const PREFIX = 'r!';
	}
	if (message.content.startsWith(PREFIX)) {
		const args = message.content
			.slice(PREFIX.length)
			.trim()
			.split(/ +/);

		const command = args.shift().toLowerCase();
		if (!client.commands.has(command))
			return message.channel.send(
				`Komut dosyamda **${command}** adlı bir komut bulamadım.`
			);
	}
});

/////////
client.login('ODQ5MDIzMDk1NDQ3NzQ4NjA4.YLVIYA.nypmsJlXtt64HYJrPngoOHctCIU');
