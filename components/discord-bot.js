const Discord = require("discord.js");
const client = new Discord.Client();

async function startDiscordBot() {
  try {
    const token = process.env.DISCORD_BOT_TOKEN;
    await client.login(token);
    console.log(`Logged in as ${client.user.tag}!`);
    // Your bot code here...
  } catch (error) {
    console.error(error);
  }
}

export { startDiscordBot };
