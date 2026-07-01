const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`البوت جاهز: ${client.user.tag}`);
});

// هنا سنضع التوكن لاحقاً في إعدادات Render
client.login(process.env.TOKEN);

