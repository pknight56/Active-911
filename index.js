// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Dispatching ${client.guilds.size} server`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  
  if(command === "dispatch") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const filter = m => m.author.id === message.author.id;
    message.channel.send({embed: {
        color: 16711683,
        title: "**:rotating_light:Please choose a Call:rotating_light:**",description: "*Will expire in 30 seconds*",}}).then(q => q.delete(15000))
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 30000
    }).then(collected => {
        let dispatchtime = message.createdAt
      collected.delete(15000);
      if (collected.first().content === 'cancel') {
        return message.reply("Canceled.");
      }
  

let call = collected.first().content;

message.channel.send({embed: {
    color: 16711683,
    title: ":rotating_light:Please choose a Place:rotating_light:",description: "*Will expire in 30 seconds*",}}).then(q => q.delete(15000))
message.channel.awaitMessages(filter, {
  max: 1,
  time: 30000
}).then(collectedp => {
  collectedp.delete(15000);
  if (collectedp.first().content === 'cancel') {
    return message.reply("Canceled.");
  }


let place = collectedp.first().content;

message.channel.send({embed: {
    color: 16711683,
    title: ":rotating_light:Please choose an Address:rotating_light:",description: "*Will expire in 30 seconds*",}}).then(q => q.delete(15000))
message.channel.awaitMessages(filter, {
  max: 1,
  time: 30000
}).then(collectedA => {
  collectedA.delete(15000);
  if (collectedA.first().content === 'cancel') {
    return message.reply("Canceled.");
  }


let address = collectedA.first().content;


message.channel.send({embed: {
    color: 16711683,
    title: ":rotating_light:Please choose a City:rotating_light:",description: "*Will expire in 30 seconds*",}}).then(q => q.delete(15000))
message.channel.awaitMessages(filter, {
  max: 1,
  time: 30000
}).then(collectedc => {
  collectedc.delete(15000);
  if (collectedc.first().content === 'cancel') {
    return message.reply("Canceled.");
  }

  switch(collectedc.first().content) {
    case "W":
       city = "Westover"
    break;
    case "K":
       city = "Kensington"
    break;
    case "PS":
       city = "Palm Shores"
    break;
    case "SB":
       city = "South Beach"
    break;
    case "Wb":
       city = "Woodbury"
    break;
    default:
    city = collectedc.first().content
  }


 
message.channel.send({embed: {
    color: 16711683,
    title: ":rotating_light:Please choose an Alarm Status:rotating_light:",description: "*Will expire in 30 seconds*",}}).then(q => q.delete(15000))
message.channel.awaitMessages(filter, {
  max: 1,
  time: 30000
}).then(collecteds => {
  collecteds.delete(15000);
  if (collecteds.first().content === 'cancel') {
    return message.reply("Canceled.");
  }


let alarm = collecteds.first().content;

message.channel.send({embed: {
    color: 16711683,
    title: ":rotating_light:Please choose a Map:rotating_light:",description: "*Will expire in 30 seconds*",}}).then(q => q.delete(15000))
message.channel.awaitMessages(filter, {
  max: 1,
  time: 30000
}).then(collectedm => {
  collectedm.delete(15000);
  if (collectedm.first().content === 'cancel') {
    return message.reply("Canceled.");
  }


let map = collectedm.first().content;

message.channel.send({embed: {
    color: 16711683,
    title: ":rotating_light:Please assign Units:rotating_light:",description: "*Will expire in 30 seconds*",}}).then(q => q.delete(15000))
message.channel.awaitMessages(filter, {
  max: 1,
  time: 30000
}).then(collectedu => {
  collectedu.delete(15000);
  if (collectedu.first().content === 'cancel') {
    return message.reply("Canceled.");
  }


let units = collectedu.first().content;

message.channel.send({embed: {
    color: 16711683,
    title: ":rotating_light:Please add additional Info:rotating_light:",description: "*Will expire in 30 seconds*",}}).then(q => q.delete(15000))
message.channel.awaitMessages(filter, {
  max: 1,
  time: 30000
}).then(collectedi => {
  collectedi.delete(15000);
  if (collectedi.first().content === 'cancel') {
    return message.reply("Canceled.");
  }


let info = collectedi.first().content;

message.channel.send({embed: {
    color: 16711683,
    title: ":rotating_light:**Please choose a Channel**:rotating_light:",
    description: "*Will expire in 30 seconds*",}}).then(q => q.delete(15000))
message.channel.awaitMessages(filter, {
  max: 1,
  time: 30000
}).then(collectedch => {
  collectedch.delete(15000);
  if (collectedch.first().content === 'cancel') {
    return message.reply("Canceled.");
  }


let opschannel = collectedch.first().content;

const embed = new Discord.RichEmbed()
.setColor(16711683)
.addField("**CALL:**",`${call}`)
.addField("**PLACE:**",`${place}`)
.addField("**ADDRESS:**",`${address}`)
.addField("**CITY:**",`${city}`)
.addField("**ALARM STATUS:**",`${alarm}` + ` Alarm`)
.addField("**TIME/DATE:**",`${dispatchtime}`)
.addField("**MAP:**",`${map}`)
.addField("**UNITS:**",`${units}`)
.addField("**INFO:**",`${info}`)
.addField("**CHANNEL:**",`${opschannel}`)

const embed2 = new Discord.RichEmbed()
.setColor(16711683)
.addField("**Call Dispatched Successfully**", `${message.createdAt}`)
.addField("**Info**", `${call},${place},${address},${alarm},${dispatchtime},${map},${units},${info},${opschannel}`)


client.channels.get(config.output).send(embed);
client.channels.get(config.output).send(units)

client.channels.get(config.confirm).send(embed2);

message.channel.fetchMessages({ limit: 100 }).then(messages => message.channel.bulkDelete(messages.filter(a => !a.author.bot)))

}).catch(err => {
    console.log(err)
});

}).catch(err => {
    console.log(err)
})

}).catch(err => {
    console.log(err)

})

}).catch(err => {
    console.log(err)
})

}).catch(err => {
    console.log(err)
})

}).catch(err => {
    console.log(err)
})

}).catch(err => {
    console.log(err)
})

}).catch(err => {
        console.log(err)
})

}).catch(err => {
    console.log(err)
})
 





}
  
  
  
});

client.login(config.token);
