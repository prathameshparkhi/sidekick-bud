require("dotenv").config();

const axios = require("axios");
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

// PING
app.command("/sidekick-bud-ping", async ({ ack, respond }) => {
  const start = Date.now();
  await ack();

  const latency = Date.now() - start;
  await respond({
    text: `Pong!\nLatency: ${latency}ms`
  });
});

// HELP
app.command("/sidekick-bud-help", async ({ ack, respond }) => {
  await ack();

  await respond({
    text: `Available Commands:
/sidekick-bud-ping - Check bot latency
/sidekick-bud-help - Show available commands
/sidekick-bud-catfact - Get a cat fact
/sidekick-bud-joke - Get a random joke`
  });
});

// CAT FACT
app.command("/sidekick-bud-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get(
      "https://catfact.ninja/fact",
      { timeout: 8000 }
    );

    await respond({
      text: `🐱 Cat Fact:\n${response.data.fact}`
    });
  } catch (err) {
    console.error("Cat fact error:", err.message);
    await respond({
      text: "Couldn't fetch a cat fact right now. Try again!"
    });
  }
});

// JOKE
app.command("/sidekick-bud-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke",
      { timeout: 8000 }
    );

    const { setup, punchline } = response.data;

    await respond({
      text: `😂 ${setup}\n\n${punchline}`
    });
  } catch (err) {
    console.error("Joke error:", err.message);
    await respond({
      text: "My joke generator is taking a break. Try again shortly! 😅"
    });
  }
});

// START THE APP AFTER REGISTERING ALL HANDLERS
(async () => {
  try {
    await app.start();
    console.log("Sidekick Bud is running!");
  } catch (err) {
    console.error("Failed to start Sidekick Bud:", err);
  }
})();