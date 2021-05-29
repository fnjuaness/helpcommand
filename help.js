const Discord = require(`discord.js`);
const client = new Discord.Client();
const { Client, MessageEmbed } = require(`discord.js`);

module.exports = {
name: "helpM",
alias: ["ayudame"],

execute (client, message, args){

const embedprincipal = new Discord.MessageEmbed()
.setTimestamp()
.setTitle(`bienvenido al looby de ayuda!`)
.setDescription(`reacciona a ⚡ para ir a mis comandos\nreacciona a ✔ para volver al inicio!`)
.setFooter(`bienvenido!`)
.setColor("RED")

const embedcomandos = new Discord.MessageEmbed()
.setTimestamp()
.setTitle(`apartado de comandos!`)
.addField("t/wasted", `crea una imagen wasted tipo GTA 5`)
.addField("t/apodo", `[nuevo apodo] cambia el apodo de un usuario!`)
.addField("t/sex-prefix", `[nuevo prefix] cambia mi prefix!`)
.addField("t/clear", `[numero de mensajes] elimina mensajes!`)
.addField("t/sugerencia", `[nueva sugerencia] envia un sugerencia`)

message.channel.send(embedprincipal).then(msg => {
  
msg.react("⚡")
msg.react("✔")

msg.awaitReactions((reaction, user) => {
  if(message.author.id !== user.id) return;
  if(reaction.emoji.name === `⚡`){
  msg.edit(embedcomandos)
}
  if(reaction.emoji.name === `✔`){
  msg.edit(embedprincipal)
}

})
})

}

}