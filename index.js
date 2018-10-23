const Discord = require('discord.js');
const client = new Discord.Client();
var token = require("./config/token.json")
const commands = []

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame("Bot Discord opensource développé par la team IdoTek. https://github.com/IdoTekTeams/OpenSourceBot" , "https://twitch.tv/idotek")
  });



client.on('message', msg => {
   if(!msg.author.bot) {
       if(msg.content.startsWith("?")) {
           var args = msg.content.replace("?", "").split(" ");
           if(commands.includes(args[0])) {
                   
               if(args[0] == commands[0]) {
                   
               } else if(args[0] == commands[1]) {

               }
           }
       }
   }
});


client.login(token.token);