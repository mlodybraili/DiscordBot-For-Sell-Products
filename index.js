// Bot created by mlody braili#0029
// Bot created for use

const { Client, MessageEmbed, Message } = require('discord.js')

const client = new Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING"],
    partials: ["USER", "REACTION", "MESSAGE", "GUILD_SCHEDULED_EVENT", "GUILD_MEMBER", "CHANNEL"]
})
const { token, prefix, status, typestatus, color, roleforproduct, linkproduct, nameproduct, versionproduct, statusproduct } = require('./config.json')


client.on('ready', () => {
    console.log("[+] Bot is Online!")
    console.log("[+] Author bot : mlody braili#0029")
    client.user.setActivity(status, { type: typestatus });
})

client.on('messageCreate', (msg) => {
    if (msg.content == prefix + "download")
    {
      if (msg.member.roles.cache.has(roleforproduct))
      {
        msg.reply("Product sent to dm!")
        const productembed = new MessageEmbed()
        .setTitle("PRODUCT FOR YOU!")
        .addField("Name:", nameproduct)
        .addField("Version:", versionproduct)
        .addField("Download:", linkproduct)
        .setColor(color)
        .setFooter({ text: msg.author.tag, iconURL:   msg.author.displayAvatarURL()})
        msg.author.send({ embeds: [productembed] })
      }
      else
      {
        msg.reply("You don't have a rank for get product!")
      }
        
    }
    if (msg.content == prefix + "status")
    {
      if (statusproduct == "detected")
      {
        const statusembed = new MessageEmbed()
        .setTitle("STATUS PRODUCT")
        .addField("Status:", "Detected :red_circle:")
        .setColor(color)
        .setFooter({ text: msg.author.tag, iconURL:   msg.author.displayAvatarURL()})
        msg.channel.send({ embeds: [statusembed] })
      }
      else if (statusproduct == "unsafe")
      {
        const statusembed = new MessageEmbed()
        .setTitle("STATUS PRODUCT")
        .addField("Status:", "UnSafe :yellow_circle:")
        .setColor(color)
        .setFooter({ text: msg.author.tag, iconURL:   msg.author.displayAvatarURL()})
        msg.channel.send({ embeds: [statusembed] })
      }
      else if (statusproduct == "undetected")
      {
        const statusembed = new MessageEmbed()
        .setTitle("STATUS PRODUCT")
        .addField("Status:", "Undetected :green_circle:")
        .setColor(color)
        .setFooter({ text: msg.author.tag, iconURL:   msg.author.displayAvatarURL()})
        msg.channel.send({ embeds: [statusembed] })
      }

    }
})

client.login(token)


// Bot created by mlody braili#0029
// Bot created for use
