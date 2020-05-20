const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '$d'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '$c'){
        message.channel.send('#credits')
    }
   if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
   }
});

client2.on('message', message => {
  if(message.content === '$d'){
 message.channel.send('#daily')
  }
  if(message.content === '$c'){
 message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client3.on('message', message => {
  if(message.content === '$d'){
 message.channel.send('#daily')
  }
  if(message.content === '$c'){
 message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client4.on('message', message => {
  if (message.content === '$d') {
 message.channel.send('#daily')
  }
  if(message.content === '$c'){
 message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client5.on('message', message => {
  if(message.content === '$d'){
message.channel.send('#daily')
  }
  if(message.content === '$c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Killua , Farm Credit By killua, ez Farm - dix vitasse tjm3 credits 7ta t3ya **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Killua , Farm Credit By killua, ez Farm - dix vitasse tjm3 credits 7ta t3ya **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Killua , Farm Credit By killua, ez Farm - dix vitasse tjm3 credits 7ta t3ya **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client4.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Killua , Farm Credit By killua, ez Farm - dix vitasse tjm3 credits 7ta t3ya **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client5.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Killua , Farm Credit By killua, ez Farm - dix vitasse tjm3 credits 7ta t3ya **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});



client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN5);
