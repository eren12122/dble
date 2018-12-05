const Discord = require('discord.js');
exports.run = function(client, message, args) {
    if (message.author.id === "519210018583609365") {
    let dmkisi = message.mentions.users.first();
    if (!dmkisi) return message.channel.send(':x: **DM Atacağın Kişiyi Seçmelisin**');
    let dm = args.slice(1).join(' ');
    if (!dm) return message.channel.send(':x: **DM Atcağım Yazıyı yazmalısın!**');
    message.delete();
    const dmat = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle(`**${dm}**`)
    dmkisi.sendEmbed(dmat);
    const dmtamam = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('İşlem Tamamlandı :white_check_mark:')
    .setFooter('Pop Bot')
    message.channel.sendEmbed(dmtamam);
    } else {
        message.channel.send(':x: **Bu Komutu Sadece  Kullanabilir!**');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dm',
  description: 'Özel komut.',
  usage: 'dm'
};