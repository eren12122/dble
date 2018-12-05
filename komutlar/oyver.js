const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Kardeşim Bi **dm** bak attım oraya şimdi milletin içinde atmayalım . :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('**Oy Ver Komutu** \n https://discordbots.org/bot/519216364469223434');
    return message.author.sendEmbed(pingozel)
};

//Hazırlayan SemihMehmetTR

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oyver'],
  permLevel: 0
};

exports.help = {
  name: 'oyver',
  description: 'Botun davet linkini gönderir.',
  usage: 'oyver'
};
