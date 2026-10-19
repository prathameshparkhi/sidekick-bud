# Sidekick Bud 🤖

A Slack bot built with Node.js that brings useful commands, random cat facts, and jokes directly into your workspace.

## Features

- **Ping** — Check whether the bot is responsive and view approximate response latency.
- **Help** — Display the available commands.
- **Cat Facts** — Fetch random cat facts using the Cat Fact API.
- **Random Jokes** — Fetch jokes from the Official Joke API.

## Tech Stack

- **Node.js** — JavaScript runtime
- **Slack Bolt** — Slack app framework
- **Axios** — HTTP requests to external APIs
- **dotenv** — Local environment variable management
- **Slack Socket Mode** — Connect to Slack without exposing a public request URL

## Commands

| Command | Description |
|---|---|
| `/sidekick-bud-ping` | Check bot responsiveness |
| `/sidekick-bud-help` | List available commands |
| `/sidekick-bud-catfact` | Get a random cat fact |
| `/sidekick-bud-joke` | Get a random joke |

## Getting Started

### 1. Prerequisites

Install [Node.js](https://nodejs.org/) and create a Slack app at [Slack API](https://api.slack.com/apps).

### 2. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/sidekick-bud.git
cd sidekick-bud
```

Replace `YOUR-USERNAME` with your GitHub username.

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root:

```env
SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_APP_TOKEN=xapp-your-app-token
```

Replace the example values with your own tokens. Never commit your `.env` file or share your tokens publicly.

### 5. Configure your Slack app

- Enable Socket Mode.
- Generate an app-level token with the required `connections:write` scope.
- Configure the bot token and the permissions required by your bot.
- Add the slash commands listed above under **Slash Commands** in your Slack app settings.
- Install or reinstall the app in your workspace if Slack prompts you to do so.

### 6. Run the bot

```bash
node index.js
```

Keep the terminal running while you use the bot in Slack.

## Project Structure

```text
sidekick-bud/
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── .env              # Local secrets; never commit
```

## APIs Used

- [Cat Fact API](https://catfact.ninja/)
- [Official Joke API](https://official-joke-api.appspot.com/)

## Security

- Keep Slack tokens in environment variables.
- Exclude `.env` and `node_modules/` from version control.
- If a token is accidentally exposed, revoke or rotate it immediately.

## License

No license has been specified yet. Add a license if you want to define how others may use, modify, and distribute this project.
